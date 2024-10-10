import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login.svg";
import googlelogo from "../../../assets/images/googlelogo.svg";
import { useEffect, useState } from "react";
// import { LoadingSpinner } from "../../components/Feedbacks";
import LoadingImg from '../../../assets/images/rolling.svg'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// import { apiGetUser, apiLogin, generateToken } from "../../services/auth";
import logo from "../../../assets/images/logo.png";
import { apiSignUp } from "../../../services/auth";

const Register = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.role === "user") {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    libraryName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    libraryName: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.firstName.length < 2) {
      isValid = false;
      newErrors.firstName = "First name must be at least 2 characters long";
    }

    if (formData.lastName.length < 2) {
      isValid = false;
      newErrors.lastName = "Last name must be at least 2 characters long";
    }

    if (formData.libraryName.length < 2) {
      isValid = false;
      newErrors.libraryName = "Library name must be at least 2 characters long";
    }

    if (formData.email === "") {
      isValid = false;
      newErrors.email = "Email is required";
    }

    if (formData.password1.length < 6) {
      isValid = false;
      newErrors.password1 = "Password must be at least 6 characters long";
    }

    if (formData.password1 !== formData.password2) {
      isValid = false;
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // Exit if validation fails

    try {
      setLoading(true); // Set loading state to true

      // const res = await  apiSignUp({
      //   firstname: formData.firstName,
      //   lastname: formData.lastName,
      //   email: formData.email,
      //   password: formData.password1,
      //   username: formData.username,
      // });
      // const newUser = await res.data;
      const newUser = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        libraryName: formData.libraryName,
        email: formData.email,
        password: formData.password1,
      };

      // const res2 = await generateToken({
      //   email: newUser.email,
      //   password: formData.password1,
      // });
      // const token = await res2.data.accessToken;
      console.log("new user--->", newUser); // Log the response
      // console.log("Token ----->", token);
      const userInfo = {
        // token: token,
        // id: newUser.id,
        firstName: newUser.firstname,
        lastName: newUser.lastname,
        libraryName: newUser.libraryName,
        email: newUser.email,
        role: "user",
        profile: {
          profilePicture:
            "https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    } catch (error) {
      console.error("Sign up failed", error); // Log the error for debugging
      toast.error("Sign up failed"); // Show error notification to the user
      setLoading(false); 
    } finally {
      
    }
  };

  const handleLoginWithGoogle = async () => {
    // Google login logic here
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div
        className="hidden md:flex col-span-5 md:col-span-2 gap-4 flex-col justify-center items-center bg-cover bg-center p-8 relative"
        style={{
          backgroundImage: `url(${login})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-white text-4xl font-bold mb-4 relative">
          Hello Friend
        </h2>
        <p className="text-white mb-6 text-md text-center relative">
          To keep connected with us, provide us with your information
        </p>
        <Link
          to="/login"
          className="text-white bg-gray-500 hover:bg-gray-700 px-6 py-4 rounded-lg relative"
        >
          Sign In
        </Link> */}
      </div>
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
        <h2 className="text-4xl text-center font-bold mb-6">Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 max-w-lg"
        >
          <div className="flex mb-4 gap-4 align-middle justify-between items-center">
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="firstName"
              >
                FIRST NAME
              </label>
              <input
                className={`shadow appearance-none rounded-2xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                id="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
                disabled={loading}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                LAST NAME
              </label>
              <input
                className={`shadow appearance-none rounded-2xl  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                id="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                disabled={loading}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="otherName"
            >
              OTHER NAME
            </label>
            <input
              className={`shadow appearance-none rounded w-[60%}] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.otherName ? "border-red-500" : ""
              }`}
              id="otherName"
              type="text"
              placeholder="Other Name"
              onChange={handleChange}
              value={formData.otherName}
            />
            {errors.otherName && (
              <p className="text-red-500 text-xs italic">{errors.otherName}</p>
            )}
          </div> */}
          <div className="w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="libraryName"
            >
              LIBRARY NAME
            </label>
            <input
              className={`shadow appearance-none rounded-2xl  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.libraryName ? "border-red-500" : ""
              }`}
              id="libraryName"
              type="text"
              placeholder="Library Name"
              onChange={handleChange}
              value={formData.libraryName}
              disabled={loading}
            />
            {errors.libraryName && (
              <p className="text-red-500 text-xs italic">
                {errors.libraryName}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className={`shadow appearance-none rounded-2xl  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password1"
            >
              PASSWORD
            </label>
            <input
              className={`shadow appearance-none rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password1 ? "border-red-500" : ""
              }`}
              id="password1"
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={formData.password1}
              disabled={loading}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password1 && (
              <p className="text-red-500 text-xs italic">{errors.password1}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password2"
            >
              CONFIRM PASSWORD
            </label>
            <input
              className={`shadow appearance-none rounded-2xl  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password2 ? "border-red-500" : ""
              }`}
              id="password2"
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.password2}
              disabled={loading}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword2((prev) => !prev)}
            >
              {showPassword2 ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password2 && (
              <p className="text-red-500 text-xs italic">{errors.password2}</p>
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
                "Sign Up"
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
              <p className="">Sign Up with Google</p>
            </button>
          </div>
          <small className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-600" to="/login">
              Sign in
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
