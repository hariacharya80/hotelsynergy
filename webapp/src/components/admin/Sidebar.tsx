import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { TbToolsKitchen3 } from "react-icons/tb";
import AppLogo from "../../assets/images/logo_circular_final.png";
import SidebarButton from "./SidebarButton";
import { FaHome, FaUsers, FaBuilding } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { IoLogOut, IoSettings } from "react-icons/io5";
import LogoutDialog from "./LogoutDialog";

function AdminSidebar() {
  const [currentMenu, setCurrentMenu] = useState(
    document.location.pathname.split("/")[2]
  );
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  useEffect(() => {
    if (document.location.pathname.split("/")[2] === "admin") {
      setCurrentMenu("Home");
    } else {
      setCurrentMenu(document.location.pathname.split("/")[2]);
    }
  }, [document.location.pathname]);
  return (
    <>
      <aside className="min-w-fit w-[15vw] px-4 h-[100vh] overflow-y-auto shadow-2xl bg-slate-200 flex flex-col items-center">
        {showLogoutDialog &&
          ReactDOM.createPortal(
            <LogoutDialog showDialog={setShowLogoutDialog} />,
            document.getElementById("dialog") as HTMLElement
          )}
        <img
          src={AppLogo}
          className="w-[120px] mb-3 mt-3"
          alt="Hotel Synergy Logo"
        />
        <span className="w-full text-center font-bold text-xl">
          Example Hotel P. Ltd.
        </span>
        <span className="mb-3">Default User</span>
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
          icon={<TbToolsKitchen3 />}
          name="Kitchen"
          url="/admin/kitchen"
        />
        <SidebarButton
          currentMenu={currentMenu}
          icon={<FaBuilding />}
          name="Vendors"
          url="/admin/vendors"
        />
        <SidebarButton
          currentMenu={currentMenu}
          icon={<MdInventory2 />}
          name="Inventory"
          url="/admin/inventory"
        />
        <SidebarButton
          currentMenu={currentMenu}
          icon={<IoSettings />}
          name="Settings"
          url="/admin/settings"
        />
        <button
          onClick={() => {
            setShowLogoutDialog(true);
          }}
          className="mt-1 hover:border-none transition-all mb-4 hover:bg-rose-600 hover:text-white bg-rose-300  text-rose-600 w-full flex justify-start items-center text-md p-2 rounded-md gap-2"
        >
          <IoLogOut />
          <span>Log out</span>
        </button>
      </aside>
    </>
  );
}

export default AdminSidebar;
