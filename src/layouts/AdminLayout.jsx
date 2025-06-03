import { useContext, useState } from "react";
import AdminNav from "../components/admin/AdminNav";
import { Outlet } from "react-router";

const AdminLayout = () => {

  return (
    <main className="flex">
      <AdminNav />
      <div className="w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
