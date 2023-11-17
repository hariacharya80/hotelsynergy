import { useState } from "react";
import { LoginInfoType, SignedInUserType } from "../types/Auth.types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UseAuth() {
  const localAuthRaw = localStorage.getItem("_auth");
  const navigate = useNavigate();
  let AuthData;
  if (localAuthRaw) {
    AuthData = JSON.parse(localAuthRaw);
  }
  const [user, setUser] = useState<SignedInUserType>(AuthData);

  const login = async (loginInfo: LoginInfoType) => {
    try {
      //send a network request.
      const request = await fetch(import.meta.env.VITE_BACKEND + "auth/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      if (request.status === 200) {
        //handle successful response.
        toast.success("User logged in successfully.");
        const data = await request.json();
        localStorage.setItem("_auth", JSON.stringify(data));
        setUser(data);
        return navigate(`/${data.role}`);
      } else if (request.status === 401) {
        const data = await request.json();
        toast.error(data.msg);
        return false;
      } else if (request.status === 500) {
        toast.error(
          "An unknown internal server error occoured, please try again later."
        );
        return false;
      }
      toast.error("An unknown error occoured.");
      return false;
    } catch (e) {
      //handle network errors (broadly)
      toast.error("An unknown server error occoured.");
      return false;
    }
  };
  const logout = async () => {
    try {
      const request = await fetch(
        import.meta.env.VITE_BACKEND + "auth/logout",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.userEmail }),
        }
      );
      if (request.status === 200) {
        toast.success("User logout successful.");
        localStorage.removeItem("_auth");
        return navigate("/");
      } else {
        toast.error("Can not logout right now.");
        return false;
      }
    } catch (e) {
      toast.error("Network Error: Can not logout.");
      return false;
    }
  };

  return { user, login, logout };
}

export default UseAuth;
