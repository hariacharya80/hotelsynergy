import HeroImage from "../assets/images/hero.png";

function Homepage() {
  return (
    <div className="flex items-center justify-evenly gap-[10vw]">
      <div>
        <h1 className="font-bold text-4xl">
          Best Hotel & Restaurant Management System.
        </h1>
        <div className="flex flex-col mt-5 gap-2">
          <span>Signup for a demo today!</span>
          <input
            className="border-2 w-full p-1 rounded mb-2"
            placeholder="myemail@gmail.com"
            type="email"
            name="email"
            id="email"
          />
          <button className="bg-rose-500 text-white p-2 rounded-full w-4/5">
            Request Demo
          </button>
        </div>
      </div>
      <img className="hidden md:block" src={HeroImage} alt="Hero image" />
    </div>
  );
}

export default Homepage;
