import { useNavigate } from "react-router-dom";
import UserImage from "../../assets/images/logo_circular_final.png";

function Reset() {
  const navigate = useNavigate();
  return (
    <section className="absolute left-0 top-0 w-screen h-screen bg-slate-200 flex justify-center">
      <form className="bg-white  rounded-md w-full md:mt-12 p-6 md:h-fit md:w-2/4 lg:w-1/3">
        <div className="w-full flex flex-col items-center my-2">
          <img src={UserImage} className="w-[120px]" alt="" />
          <h1 className="font-bold text-3xl">Reset Password</h1>
          <span className="text-slate-500">
            Please provide your info to reset password.
          </span>
        </div>
        <div className="w-full flex flex-col mt-2">
          <label htmlFor="hotel-code">Hotel Code:</label>
          <input
            className="border-2 p-1 rounded "
            type="text"
            placeholder="01234"
            name="hotel-code"
            id="hotel-code"
          />
        </div>
        <div className="w-full flex flex-col mt-2">
          <label htmlFor="email">Email Address: </label>
          <input
            className="border-2 p-1 rounded "
            type="email"
            placeholder="admin@hotelyak.com.np"
            name="email"
            id="email"
          />
        </div>
        <button className="w-full bg-indigo-800 hover:bg-indigo-950 transition-colors text-white py-1 rounded my-3">
          Send Reset Email
        </button>
        <p>
          Remember password?
          <a
            className="hover:text-indigo-800 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              return navigate("/");
            }}
            href="/"
          >
            {" "}
            back to login.
          </a>
        </p>
      </form>
    </section>
  );
}

export default Reset;
