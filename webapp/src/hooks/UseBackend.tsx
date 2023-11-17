import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { SecuredBackendResponseType } from "../types/Auth.types";

function UseBackend() {
  const { user } = UseAuth();
  const navigate = useNavigate();

  /* Why we need a seperate fuction to make request?
        Note: Auth requests (login/logout) are handled under Auth Hook.
    1. Customize handeling of our request accouring to our server.
    2. Don't need to write repetative conditionals and templates while
    avoiding to use any 3rd party libraries like axios.
    3. TO LOOK COOL (🤣🤣) */

  const makeRequest = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    payload: Object
  ): Promise<SecuredBackendResponseType> => {
    try {
      //checking to see if the user is logged in or not.
      if (!user) {
        return {
          err: true,
          msg: "User is not logged in to make request.",
          action: () => {
            return navigate("/login");
          },
        };
      }
      //making the request with the headers of currently logged in user.
      const request = await fetch(import.meta.env.VITE_BACKEND + endpoint, {
        method: method,
        headers: {
          "content-type": "application/json",
          "auth-token": user.authToken.toString(),
        },
        body: JSON.stringify(payload),
      });

      //returning a successful response.
      if (request.status === 200) {
        return { err: false };
      } else if (request.status == 401) {
        //returning a error when 401
        const data = await request.json();
        return { err: true, msg: data.msg };
      } else if (request.status === 500) {
        //returning error for 500
        return {
          err: true,
          msg: "An unknown internal server error occoured, please try again later.",
        };
      }
      //when non of the above cases match
      return {
        err: true,
        msg: "An unknown error occoured while processing your request, Please try again later.",
      };
    } catch (e) {
      //handeling connection issues. (broadly)
      return {
        err: true,
        msg: "Can not connect, Please check your internet connection.",
      };
    }
  };

  return { makeRequest };
}

export default UseBackend;
