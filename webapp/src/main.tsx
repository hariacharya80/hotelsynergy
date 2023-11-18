import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import "./assets/styles/global.css";
import Reset from "./pages/Auth/Reset";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./pages/AdminDashboard/AdminLayout";
import AdminDashboardHome from "./pages/AdminDashboard/Dashboard";
import AdminSetttings from "./pages/AdminDashboard/Settings";
import AdminInventory from "./pages/AdminDashboard/Inventory";
import AdminVendors from "./pages/AdminDashboard/Vendors";
import AdminKitchen from "./pages/AdminDashboard/Kitchen";
import AdminStaff from "./pages/AdminDashboard/StaffSettings";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route
          path="/admin"
          element={<Navigate to={"/admin/home"} replace />}
        />
        <Route
          path="/admin/home"
          element={
            <AdminLayout>
              <AdminDashboardHome />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/staff"
          element={
            <AdminLayout>
              <AdminStaff />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/kitchen"
          element={
            <AdminLayout>
              <AdminKitchen />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/vendors"
          element={
            <AdminLayout>
              <AdminVendors />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <AdminLayout>
              <AdminInventory />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <AdminLayout>
              <AdminSetttings />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
