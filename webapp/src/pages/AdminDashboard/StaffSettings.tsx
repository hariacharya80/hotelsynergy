import { useEffect } from "react";

function AdminStaff() {
  useEffect(() => {
    document.title = "Staff | HotelSynergy";
  });
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl mt-5 mb-2">Staff Management</h1>
      </div>
      <div className="flex flex-col w-2/3 my-3 bg-slate-200 mx-5">
        <ul className="grid grid-cols-4">
          <li className="w-full">Name</li>
          <li className="w-full">Email Address</li>
          <li className="w-full">Role</li>
          <li className="w-full">Actions</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminStaff;
