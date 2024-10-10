import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login2.svg"
import googlelogo from "../../../assets/images/googlelogo.svg";
import { useEffect, useState } from "react";
// import { LoadingSpinner } from "../../components/Feedbacks";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// import { apiGetUser, apiLogin, generateToken } from "../../services/auth";
import logo from "../../../assets/images/logo.png"
import LoadingImg from '../../../assets/images/rolling.svg'
import profilePic from "../../../assets/images/profile.jpg";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.role === "user") {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form data", formData);
    if (!validate()) return;

    try {
      setLoading(true);

      // const res = await apiLogin({
      //   email: formData.email,
      //   password: formData.password,
      // });

      // if (res.status === 200) {
        // const response = await apiGetUser(formData.username);

        // const user = await response.data.username;
        let user;
        if(formData.email==="albertnartey824@gmail.com"){
          user={
            firstname:"Albert",
            lastname:"Nartey",
            libraryname:"Govy's Library",
            email:"albertnartey824@gmail.com",
          }
          const userInfo = {
            // id: user.id,
            // token: res2.data.accessToken,
            firstName: user.firstname,
            lastName: user.lastname,
            libraryName: user.libraryname,
            email: user.email,
            role: "user",
            profile: {
              profilePicture:profilePic
            },
          };
  
          setTimeout(() => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: userInfo,
            });
            window.localStorage.setItem("librariumUser", JSON.stringify(userInfo));
            toast.success(`Welcome ${userInfo.firstName} ${userInfo.lastName}`);
            navigate("/dashboard");
            setLoading(false); 
          }, 5000);
        }else{
          toast.error("Not a registered user")
        }

        // const res2 = await generateToken({
        //   email: user.email,
        //   password: formData.password,
        // });

        // console.log("Logged in user --->", response);
        // console.log("token--->", res2.data.accessToken);
        
      // }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) toast.error("Invalid credentials");
      else toast.error("Sign in failed");
      setLoading(false);
    } finally {
      
    }
  };

  const handleLoginWithGoogle = async () => {
    // Google login logic here
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center p-5 gap-4 bg-[#F8F8FA]">
      <div className="logo flex flex-col justify-center items-center gap-4">
        <Link
          to="/"
          id="logo"
          className="flex flex-col items-center align-middle justify-center"
        >
          <img src={logo} alt="Logo" width={70} />
          <h2 className="text-lg font-semibold text-[#00B9BE]">
            The Librarium
          </h2>
        </Link>
      </div>
        <h2 className="text-4xl font-bold mb-6">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 max-w-lg"
        >
          {/* <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              USERNAME
            </label>
            <input
              className={`shadow appearance-none rounded-2xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.username ? "border-red-500" : ""
              }`}
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
          </div> */}

          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className={`shadow appearance-none rounded-2xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              className={`shadow appearance-none rounded-2xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-center mb-4 w-1/2 mx-auto">
            <button
              className={`w-full flex items-center justify-center align-middle bg-primary-main hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${
                loading ? "bg-gray-300 hover:bg-gray-300" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                // <LoadingSpinner height="25px" width="25px" />
                <img src={LoadingImg} alt="loading..." height="30px" width="30px" />

              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="text-center mb-4">OR</div>
          <div className="flex items-center justify-center w-1/2 mx-auto">
            <button
              className="w-full flex justify-center gap-2 align-middle items-center hover:bg-red-700 hover:text-white text-gray-700 font-semibold py-2 px-4 border-2 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLoginWithGoogle}
              disabled={loading}
            >
              <img src={googlelogo} alt="google-logo" />{" "}
              <p className="">Sign In with Google</p>
            </button>
          </div>
          <small className="text-center">
            New to PortiBuilder?{" "}
            <Link className="text-blue-600" to="/register">
              Sign Up
            </Link>
          </small>
        </form>
      </div>
      <div
        className="hidden md:flex col-span-5 md:col-span-2 gap-4  flex-col justify-center items-center bg-cover bg-center p-8 relative"
        style={{ backgroundImage: `url(${login})`, backgroundPosition:"center", backgroundRepeat:'no-repeat', backgroundSize:"contain" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        {/* Overlay */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-white mb-6 text-md">
            To keep connected, enter your details to login your account
          </p>
          <Link
            to="/signup"
            className="text-white bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Sign Up
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;