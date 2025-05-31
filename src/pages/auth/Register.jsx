import { useContext, useEffect } from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContextProvider";
import GoogleLogin from "../../components/auth/GoogleLogin";
import axios from "axios";

const photo =
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

const Register = () => {
  const { registerWithEmailPass, updateUserProfile, user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(data)
    registerWithEmailPass(email, password)
      .then((res) => {
        console.log(res);
        updateUserProfile(name, photo).then((res2) => {
          axios
            .post("http://localhost:3000/api/auth/register", {
              name,
              email,
              password,
              photo,
            })
            .then((res) => console.log(res.data, "from axios post"));
          alert(`${res.displayName} register successful`);
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-[url('/auth/background.jpg')] bg-cover bg-center">
      <form
        className="backdrop-blur-md bg-white/10  py-4 px-8  w-5/6 md:w-2/3 text-gray-100 rounded-lg "
        onSubmit={handleRegister}
      >
        <div className="mb-4">
          <Link title="Back to home" to="/">
            <TiArrowBack className="text-2xl" />
          </Link>
          <h2 className="text-2xl md:text-3xl text-center font-semibold ">
            Please Register
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
            iste!{" "}
          </p>
        </div>
        <GoogleLogin />
        <div className="divider divider-accent">
          Or Register With Credentials
        </div>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            className="w-full outline-1 px-4 py-1 rounded-sm"
            name="name"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
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
          className="w-full bg-gray-800 text-white mt-4 py-1 rounded-sm cursor-pointer hover:shadow shadow-accent hover:bg-gray-700 "
          type="submit"
        >
          Register
        </button>
        <p className="text-center block mt-8">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
