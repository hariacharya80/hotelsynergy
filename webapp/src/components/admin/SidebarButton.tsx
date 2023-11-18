import React from "react";
import { useNavigate } from "react-router-dom";

interface SidebarButtonProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  currentMenu: string;
}

function SidebarButton({ name, url, icon, currentMenu }: SidebarButtonProps) {
  const navigate = useNavigate();
  const activeClass =
    "w-full border-l-4 border-l-indigo-600 bg-indigo-200 flex transition-all hover:bg-indigo-100  justify-start gap-2  p-2 rounded items-center text-md border-2 border-indigo-300 text-indigo-600 my-1";
  const inActiveClass =
    "w-full bg-slate-100 flex transition-all hover:bg-slate-300 justify-start items-center gap-2 rounded-md p-2 text-md border-2 border-slate-300 my-1 ";
  return (
    <button
      className={
        name.toLowerCase() === currentMenu.toLowerCase()
          ? activeClass
          : inActiveClass
      }
      onClick={() => {
        return navigate(url);
      }}
    >
      {icon}
      {name}
    </button>
  );
}

export default SidebarButton;
