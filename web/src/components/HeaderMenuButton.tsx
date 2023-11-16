import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderMenuInfoProps {
  url: string;
  name: string;
  currentMenu: string;
  setMenu: Dispatch<SetStateAction<string>>;
}

function HeaderMenuButton({
  url,
  name,
  currentMenu,
  setMenu,
}: HeaderMenuInfoProps) {
  const navigate = useNavigate();
  const activeMenu =
    "cursor-pointer text-rose-500 hover:text-rose-700 transition-colors";
  const inactiveMenu = "cursor-pointer hover:text-rose-500 transition-colors";
  return (
    <button
      className={url == currentMenu ? activeMenu : inactiveMenu}
      onClick={() => {
        setMenu(url);
        navigate(url);
      }}
    >
      {name}
    </button>
  );
}

export default HeaderMenuButton;
