import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const GoogleLogin = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogIn = () => {
    logInWithGoogle()
      .then(({ user }) => {
        // return console.log(user.email, user.displayName, user.photoURL);

        toast.success("Signin Successful", {
          theme:"colored"
        });
        axios
          .post("https://dream-event-back-end.vercel.app/api/auth/register", {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          })
          .then(() => console.log("User Data saved on Database"))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
  return (
    <button
      className="mx-auto bg-red-600 px-4 py-1 rounded-sm font-semibold mb-6 flex items-center justify-center gap-4 hover:shadow shadow-secondary hover:bg-red-700 "
      onClick={handleGoogleLogIn}
    >
      <FaGoogle /> Signin With Google
    </button>
  );
};

export default GoogleLogin;
