import HeroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <div className="flex items-center justify-evenly my-10 gap-[10vw]">
      <div className="w-full md:w-2/3">
        <h1 className="font-bold text-4xl w-3/4">
          Best Hotel & Restaurant Management System.
        </h1>
        <div className="flex flex-col mt-5 gap-2">
          <span>Signup for a demo today!</span>
          <input
            className="border-2 w-2/3 p-1 rounded mb-2"
            placeholder="myemail@gmail.com"
            type="email"
            name="email"
            id="email"
          />
          <button className="bg-rose-500 text-white p-2 rounded-full md:w-4/5">
            Request Demo
          </button>
        </div>
      </div>
      <img className="hidden md:block w-1/3" src={HeroImage} alt="Hero image" />
    </div>
  );
}

export default Hero;
