import { FormEvent, useEffect, useState } from "react";
import UserImage from "../../assets/images/logo_circular_final.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoginFormValidation from "../../utils/LoginFormValidation";
import { LoginInfoType } from "../../types/Auth.types";
import UseAuth from "../../hooks/UseAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = UseAuth();

  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: "",
    hotelCode: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Login | HotelSynergy";
  }, []);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    //First validation the Login information.
    const validationResult = LoginFormValidation(loginInfo);
    if (validationResult.err) {
      toast.error(validationResult.msg || "An unknown error occoured.");
      setLoading(false);
      return false;
    }
    const loginResult = await login(loginInfo);
    setLoading(false);
    if (loginResult) {
      // alert(loginResult);
    }
    // alert(loginResult);
  };
  return (
    <section className="absolute w-screen min-h-screen bg-slate-200 flex justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-md p-5 md:h-fit md:mt-12 w-full md:w-2/3 lg:w-1/4  min-w-[40vw]"
      >
        <div className="w-full flex flex-col my-4 text-center justify-center items-center">
          <img src={UserImage} className="w-[120px]" alt="" />
          <h1 className="font-bold text-3xl">Hotel Synergy</h1>
          <span className="text-slate-500">
            Please provide your login information to login.
          </span>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="hotel-code">Hotel Code:</label>
          <input
            autoFocus
            disabled={loading}
            value={loginInfo.hotelCode}
            onChange={(e) => {
              setLoginInfo({ ...loginInfo, hotelCode: e.target.value });
            }}
            className="border-2 p-1 rounded"
            type="text"
            name="hotel-code"
            id="hotel-code"
            placeholder="1234"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="user-email">Email Address:</label>
          <input
            disabled={loading}
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            placeholder="admin@hotelyak.com.np"
            className="border-2 p-1 rounded"
            type="email"
            name="user-email"
            id="user-email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="user-password">Password :</label>
          <input
            disabled={loading}
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            placeholder="********"
            className="border-2 p-1 rounded"
            type="password"
            name="user-password"
            id="user-password"
          />
        </div>
        <button
          className={
            loading
              ? "bg-indigo-800 my-4 flex justify-center items-center gap-2 text-white w-full rounded p-2 hover:bg-indigo-950 transition-colors"
              : "bg-indigo-800 my-4 text-white w-full rounded p-2 hover:bg-indigo-950 transition-colors"
          }
        >
          {loading && (
            <div className="w-4 h-4 border-2 border-black border-t-white animate-spin rounded-full"></div>
          )}
          {loading ? "Loggin in..." : "Login"}
        </button>
        <span>
          Forgot password?{" "}
          <a
            className="hover:text-indigo-800"
            onClick={(e) => {
              e.preventDefault();
              return navigate("/reset");
            }}
            href="/reset"
          >
            Reset password
          </a>
        </span>
      </form>
    </section>
  );
}

export default Login;
