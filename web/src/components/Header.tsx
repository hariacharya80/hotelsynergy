import { useEffect, useState } from "react";
import HeaderMenuButton from "./HeaderMenuButton";
import { useNavigate } from "react-router-dom";

function Header() {
  const headerMenus = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/features" },
    { name: "Success Stories", link: "/stories" },
    { name: "Pricing", link: "/pricing" },
  ];
  const [currentMenu, setCurrentMenu] = useState(document.location.pathname);
  const navigate = useNavigate();
  useEffect(() => {});
  return (
    <header className="flex justify-between items-center h-[10vh] px-5 py-4 shadow-lg">
      <div
        onClick={() => {
          setCurrentMenu("/");
          navigate("/");
        }}
        className="flex flex-col items-center"
      >
        <h1 className="font-bold text-3xl cursor-pointer">
          <span className="text-blue-900">Hotel</span>
          <span className="text-red-400">Synergy</span>
        </h1>
      </div>
      <ul className=" hidden md:flex items-center gap-3">
        {headerMenus.map((item) => {
          return (
            <HeaderMenuButton
              setMenu={setCurrentMenu}
              key={item.link}
              currentMenu={currentMenu}
              name={item.name}
              url={item.link}
            />
          );
        })}
        <button
          onClick={() => {
            setCurrentMenu("/demo");
            navigate("/demo");
          }}
          className="text-white bg-rose-500 px-8 py-2 rounded-full hover:bg-rose-800 transition-colors"
        >
          Request Demo
        </button>
      </ul>
    </header>
  );
}

export default Header;
