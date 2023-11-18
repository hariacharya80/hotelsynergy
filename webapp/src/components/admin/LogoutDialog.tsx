import { Dispatch, SetStateAction, useState } from "react";
import UseAuth from "../../hooks/UseAuth";

interface LogoutDialogProps {
  showDialog: Dispatch<SetStateAction<boolean>>;
}
function LogoutDialog({ showDialog }: LogoutDialogProps) {
  const [loading, setLoading] = useState(false);
  const { logout } = UseAuth();

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  return (
    <section className="w-screen h-screen backdrop-blur-md absolute left-0 top-0 z-50 flex justify-center">
      <div className="bg-slate-100 p-4 rounded border-2  md:h-fit md:mt-12 w-full md:w-1/3 min-w-[50vw] md:min-w-[20vw] flex flex-col">
        <h1 className="font-bold text-2xl">Logout</h1>
        <span>Are you sure you want to logout?</span>
        <div className="flex flex-col md:flex-row gap-2 md:justify-between mt-4">
          <button
            disabled={loading}
            onClick={() => showDialog(false)}
            className={
              loading
                ? "bg-slate-300 md:w-1/3 text-black p-1 cursor-not-allowed rounded"
                : "bg-slate-500 md:w-1/3 text-white p-1 rounded"
            }
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className={
              loading
                ? "bg-rose-300  md:w-1/3 flex justify-center gap-2 items-center  text-black cursor-wait p-1 rounded"
                : "bg-rose-600 md:w-1/3 text-white p-1 rounded"
            }
          >
            {loading && (
              <div className="w-4 h-4 border-2 rounded-full border-black border-t-white animate-spin"></div>
            )}
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogoutDialog;
