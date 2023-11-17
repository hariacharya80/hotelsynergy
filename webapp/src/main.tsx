import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import "./assets/styles/global.css";
import Reset from "./pages/Auth/Reset";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./pages/AdminDashboard/AdminLayout";
import AdminDashboardHome from "./pages/AdminDashboard/Dashboard";
import StaffSettings from "./pages/AdminDashboard/StaffSettings";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <AdminDashboardHome />
            </AdminLayout>
          }
        />
        <Route
          path="/staff"
          element={
            <AdminLayout>
              <StaffSettings />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
