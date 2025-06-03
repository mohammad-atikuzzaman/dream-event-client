import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { Link } from "react-router";

const UserSecurity = ({ children }) => {
  const { user } = useContext(AuthContext);

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
          to="/"
          className="inline-block bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return <>{children}</>;
};

export default UserSecurity;
