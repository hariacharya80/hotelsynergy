import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminDashboard() {
  const { user } = UseAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      toast.error("You must be logged in to access dashboard.");
      return navigate("/");
    } else if (user.role != "admin") {
      toast.error("You are not an administrator.");
      return navigate("/");
    }
  }, [user, navigate]);
  return <div>AdminDashboard</div>;
}

export default AdminDashboard;
