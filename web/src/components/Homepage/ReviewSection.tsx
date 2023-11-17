import { FaStar } from "react-icons/fa6";
import CustomerImage from "../../assets/images/customer.jpg";
function ReviewSection() {
  return (
    <section className="w-full flex justify-around items-center bg-slate-200 mb-10 rounded text-black p-4">
      <div className="text-center w-1/2">
        <p className=" text-2xl">
          Using Hotel Synergy has streamlined our operations, improved
          efficiency, and enhanced guest satisfaction. The system's seamless
          integration has saved us time, reduced errors, and provided us with
          valuable insights into our business.
        </p>
        <div className="flex items-center w-full justify-center my-2 text-yellow-500 gap-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-4 rounded-full border-rose-500 border-r-black border-b-indigo-400 ">
          <img
            src={CustomerImage}
            className="w-[200px] h-100 rounded-full"
            alt="Customer Image"
          />
        </div>
        <h1 className="mt-2 font-bold text-3xl">Tara Prasad Acharya</h1>
        <h2 className="text-xl">Hotel Yak</h2>
        <span>Nepal</span>
      </div>
    </section>
  );
}

export default ReviewSection;
