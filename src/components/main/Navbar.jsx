import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { menuOptions } from "../../utils/mainMenu";
import { AuthContext } from "../../contexts/AuthContextProvider";
import LogOutBtn from "../shared/LogOutBtn";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="px-4 py-2  shadow sticky top-0 bg-[#043341]   text-gray-100 z-50">
      <div className="container flex justify-between items-center mx-auto relative">
        <div className="flex items-center gap-8">
          <a
            href="/"
            aria-label="Back to homepage"
            className="p-2 text-2xl font-bold"
          >
            DreamEvent
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {menuOptions.map((m, i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "font-semibold underline" : ""
                  }
                  to={m.path}
                >
                  {m.show}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {user ? (
          <div className="dropdown dropdown-end hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 rounded-full">
                <img alt="user photo" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-gray-600 font-semibold rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <LogOutBtn />
              </li>
            </ul>
          </div>
        ) : (
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link
              to="/login"
              className="font-semibold px-3 py-1 rounded bg-gray-600 text-white hover:shadow shadow-blue-600"
            >
              Log in
            </Link>
          </div>
        )}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-4 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {showMenu && (
          <div className="absolute top-16 backdrop-blur-xs bg-white/10  w-screen min-h-screen flex items-center justify-center -right-4 lg:hidden">
            <ul className="bg-white w-2/3 h-80 px-4 py-12 rounded-lg flex flex-col items-center space-y-4 justify-center shadow">
              {user ? (
                <>
                  <li onClick={() => setShowMenu(!showMenu)}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL}
                      alt={user?.displayName}
                    />
                  </li>
                  <li onClick={() => setShowMenu(!showMenu)}>
                    <Link to="/profile">Profile</Link> <LogOutBtn />
                  </li>
                </>
              ) : (
                <Link
                  className=" text-center rounded-sm text-white  bg-emerald-700 font-semibold w-1/2"
                  to="/login"
                >
                  Login
                </Link>
              )}
              {menuOptions.map((m, i) => (
                <li
                  onClick={() => setShowMenu(!showMenu)}
                  key={i}
                  className="w-1/2"
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-emerald-800 block px-4 text-white text-center rounded-sm"
                        : "bg-gray-600 block text-white w-full text-center rounded-sm"
                    }
                    to={m.path}
                  >
                    {m.show}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
