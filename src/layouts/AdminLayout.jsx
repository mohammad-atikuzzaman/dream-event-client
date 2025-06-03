import { useContext, useState } from "react";
import AdminNav from "../components/admin/AdminNav";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContextProvider";
import axios from "axios";

const AdminLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(user);

  useState(() => {
    axios(`http://localhost:3000/api/users/isadmin?emailId=${user?.email}`)
      .then((res) => setIsAdmin(res.data))
      .catch((err) => console.err(err));
  }, [user?.email]);

  if (!user) {
    return (
      <div className="flex flex-col items-center min-h-screen justify-center min-h-[60vh] text-center p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-red-500 mb-2">
          Access Denied
        </h2>
        <p className="text-gray-600 mb-4">
          You need to log in to view this page.
        </p>
        <Link
          to="/login"
          className="inline-block bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
        >
          Login
        </Link>
      </div>
    );
  }

  if (isAdmin !== "admin") {
    return (
      <div className="flex flex-col items-center min-h-screen justify-center min-h-[60vh] text-center p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-red-500 mb-2">
          Access Denied
        </h2>
        <p className="text-gray-600 mb-4">Only Admin Access</p>
        <Link
          to="/"
          className="inline-block bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }
  return (
    <main className="flex">
      <AdminNav />
      <Outlet />
    </main>
  );
};

export default AdminLayout;
