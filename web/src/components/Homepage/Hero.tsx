function Hero() {
  return (
    <div className="bg-[url('/backimage.jpg')] mt-10">
      <div className="flex flex-col backdrop-blur-sm items-center h-[60vh] justify-center py-12">
        <h1 className="font-bold text-4xl text-white">
          Best Hotel & Restaurant Management System.
        </h1>
        <span className="text-white py-2">
          Use hotel synergy to get the best out of your hotel & restaurant
          bussiness!
        </span>
        <div className="w-full flex justify-center gap-3">
          <button className="bg-rose-500 text-white p-2 rounded-md md:w-1/4">
            View Pricing
          </button>
          <button className="bg-rose-500 text-white p-2 rounded-md md:w-1/4">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
