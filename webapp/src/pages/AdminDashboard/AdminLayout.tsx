import React, { useEffect } from "react";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/admin/Sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}
function AdminLayout({ children }: AdminLayoutProps) {
  const { user } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      toast.error("You need to login first.");
      return navigate("/");
    } else if (user.role != "admin") {
      toast.error("You need to be admin to view this page.");
      return navigate("/");
    }
  }, [user, navigate]);
  return (
    <section className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex justify-start gap-2">
      <AdminSidebar />
      <section className="p-2 overflow-y-auto h-screen w-[88vw]">
        {children}
      </section>
    </section>
  );
}

export default AdminLayout;
