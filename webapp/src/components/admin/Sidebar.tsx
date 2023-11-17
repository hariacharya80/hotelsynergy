import { useEffect, useState } from "react";
import AppLogo from "../../assets/images/logo_circular_final.png";
import SidebarButton from "./SidebarButton";
import { FaHome, FaUsers } from "react-icons/fa";

function AdminSidebar() {
  const [currentMenu, setCurrentMenu] = useState(
    document.location.pathname.split("/")[1]
  );
  useEffect(() => {
    if (document.location.pathname.split("/")[1] === "admin") {
      setCurrentMenu("Home");
    } else {
      setCurrentMenu(document.location.pathname.split("/")[1]);
    }
  }, [document.location.pathname]);
  return (
    <aside className="min-w-fit w-[12vw] h-screen shadow-2xl bg-slate-200 flex flex-col items-center">
      <img src={AppLogo} className="w-[120px]" alt="Hotel Synergy Logo" />
      <SidebarButton
        currentMenu={currentMenu}
        icon={<FaHome />}
        name="Home"
        url="/admin/home"
      />
      <SidebarButton
        currentMenu={currentMenu}
        icon={<FaUsers />}
        name="Staff"
        url="/admin/staff"
      />
      <SidebarButton
        currentMenu={currentMenu}
        icon={<FaUsers />}
        name="Kitchen"
        url="/admin/kitchen"
      />
    </aside>
  );
}

export default AdminSidebar;
