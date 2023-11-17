import toast from "react-hot-toast";
import { LoginInfoType } from "../types/Auth.types";

function LoginFormValidation(loginInfo: LoginInfoType) {
  if (!loginInfo.hotelCode) {
    toast.error("Hotel code is required.");
    return { err: true, msg: "Hotel code is required.", element: "code" };
  }
  if (!loginInfo.email) {
    toast.error("Email address is required.");
    return { err: true, msg: "Email address is required", element: "email" };
  }
  if (
    !String(loginInfo.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    toast.error("Please provide a valid email address.");
    return {
      err: true,
      msg: "Please provide a valid email address",
      element: "email",
    };
  }
  if (!loginInfo.password) {
    toast.error("Password is required.");
    return {
      err: true,
      msg: "Password is required.",
      element: "password",
    };
  }
  if (loginInfo.password.length < 6) {
    toast.error("Please provide a valid password.");
    return {
      err: true,
      msg: "Please provide a valid password.",
      element: "password",
    };
  }
  return {
    err: false,
  };
}

export default LoginFormValidation;
