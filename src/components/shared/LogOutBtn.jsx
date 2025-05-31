import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";

const LogOutBtn = () => {
  const {logOut} = useContext(AuthContext);

  return (
    <button onClick={()=>logOut()} className="btn btn-xs font-bold btn-warning">
      Logout
    </button>
  );
};

export default LogOutBtn;
