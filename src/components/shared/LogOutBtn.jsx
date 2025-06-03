import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { toast } from "react-toastify";

const LogOutBtn = () => {
  const {logOut} = useContext(AuthContext);

  return (
    <button onClick={()=>{
      logOut()
      toast.warning("Logged Out", {
        theme:"colored"
      })
      }} className="btn btn-xs font-bold btn-warning">
      Logout
    </button>
  );
};

export default LogOutBtn;
