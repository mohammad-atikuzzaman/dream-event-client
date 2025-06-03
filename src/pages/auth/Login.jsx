import { useContext, useEffect } from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContextProvider";
import GoogleLogin from "../../components/auth/GoogleLogin";

const Login = () => {
  const { logInWithEmailPass, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email, password };
    // console.log(data);
    logInWithEmailPass(email, password)
      .then((res) => alert(`${res.displayName} is login Successful`))
      .catch((err) => alert(`${err.message}`));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-[url('/auth/background.jpg')] bg-cover bg-center">
      <div className="backdrop-blur-md bg-white/10  p-4 w-5/6 md:w-2/3 text-gray-100 rounded-lg z">
        <div className="mb-4">
          <Link title="Back to home" to="/">
            <TiArrowBack className="text-2xl text-red-600" />
          </Link>
          <h2 className="text-2xl md:text-3xl text-center font-semibold ">
            Please Login
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
            iste!{" "}
          </p>
        </div>
        <GoogleLogin />
        <div className="divider divider-secondary">
          Or Login With Credentials
        </div>
        <form className="" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              className="w-full outline-1 px-4 py-1 rounded-sm"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              className="w-full outline-1 px-4 py-1 rounded-sm"
              name="password"
              id="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <button
            className="w-full bg-red-600 text-white mt-2 py-1 rounded-sm cursor-pointer hover:shadow shadow-secondary hover:bg-red-700"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center block mt-8">
          Don't have any account?{" "}
          <Link className="underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
