import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { FaGoogle } from "react-icons/fa";


const GoogleLogin = () => {
    const {logInWithGoogle}= useContext(AuthContext)
    const handleGoogleLogIn=()=>{
        logInWithGoogle()
        .then(res=> console.log(res))
    }
    return (
        <button className="w-full bg-gray-800 p-1 rounded-sm font-semibold mb-6 flex items-center justify-center gap-4 hover:shadow shadow-accent hover:bg-gray-700 " onClick={handleGoogleLogIn}>
            <FaGoogle/> Signin With Google
        </button>
    );
};

export default GoogleLogin;