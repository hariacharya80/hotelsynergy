function Footer() {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-100 text-black">
      <div>
        <h1 className="font-bold text-3xl cursor-pointer">
          <span className="text-blue-900">Hotel</span>
          <span className="text-red-400">Synergy</span>
        </h1>
      </div>
      <div className="text-md font-bold">
        Designed with <span className="text-rose-500">&hearts;</span> Hari
        Acharya
      </div>
    </div>
  );
}

export default Footer;
