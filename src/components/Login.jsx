import React, { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Footer1 from "./Footer1";
import FooterLast from "./FooterLast";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [register, setRegister] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  // const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);

  // Validate fields to enable/disable register button for that the user cannot register without filled data into textfilled
  const isFormValid =
    register.name && register.mobile && register.email && register.password;

  const registerChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };
  const registerSubmit = async (e) => {
    e.preventDefault();
    await submitData();
  };
  const submitData = async () => {
    setRegisterLoading(true); // Show loader this will show that loading is going on
    try {
      const response = await axios.post(
        import.meta.env.VITE_BASE_URL,
        register
      );

      if (
        response.data.status === 201 ||
        response.data.status === 200 ||
        response.data.status === 1
      ) {
        toast.success("Registration successfull");

        // Save token to localStorage after registration
        const token =response.data.data.token.token
        console.log(token);
        
        if (token)
        {
          localStorage.setItem("token", token);
          console.log("Token Stored successfully")
        }
        else
        {
          console.log("token not stored")
        }

        // Clear form fields after registation
        setRegister({
          name: "",
          mobile: "",
          email: "",
          password: "",
        });
      } else if (response.data.status === 0) {
        toast.error(error.response?.data || error.message, {
          autoClose: 4000,
          className: "bg-red-500 text-white p-3 rounded-lg", // Custom error style
        });
        console.log("Response:", response.data);
      }
    } catch (error) {
      // General error toast for failed API call
      toast.error("Registration failed. Please try again.", {
        autoClose: 4000,
        className: "bg-red-500 text-white p-3 rounded-lg", // Custom class for error toast
      });
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
    } finally {
      setRegisterLoading(false); // hide loading this will hide our loader after complating process
    }
  };

  // -------------login section code----------
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_LOGIN_URL,
        loginData
      );

      if (response.data.status === 200 || response.data.status === 1) {
        toast.success("Login successful");
        console.log("Login response:", response.data);
        navigate("/dashboard",{ state: { username: response.data.data.userDetail.name } });
        console.log(response.data.data.userDetail.name)
        // store token which is we get from the api
      } else {
        toast.error("Invalid login Details");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error.response?.data || error.message);
    } finally {
      setLoginLoading(false);
    }
  };

  // -------------login section code end here----------

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Menu />
      <div className="bg-gradient-to-r from-[#0FC7B4] to-[#28D695]">
        <div className="container w-full h-40  flex justify-center items-center text-white">
          <div className="flex justify-center items-center flex-col leading-13">
            <div className="font-medium text-4xl">My account</div>
            <div>Home / My Account</div>
          </div>
        </div>

        <div className="bg-blue-50 flex items-center justify-center p-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
            {/* Login Section */}
            <div className="p-8 rounded-xl">
              <h2 className="text-3xl font-semibold mb-6">Login</h2>

              {/* -----------------form data----------------  */}
              <form method="post" className="space-y-4" onSubmit={loginSubmit}>
                {/*--------- username box ------------ */}
                <div>
                  <label className="block text-gray-700">
                    Username or email address *
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={loginData.email}
                    onChange={loginChange}
                    required
                    className="w-full border border-gray-300 rounded-sm px-4 py-1 bg-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                {/*------------ username box end here--------  */}

                {/*------------ password box here--------  */}
                <div>
                  <label className="block text-gray-700">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={loginChange}
                    required
                    className="w-full rounded-sm px-4 border border-gray-300 py-1 bg-white mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                {/*------------ password box end here--------  */}

                {/*------------ submit box here--------  */}
                {loginLoading ? (
                  <button
                    type="button"
                    disabled
                    className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-3 py-1 rounded-xs flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    <span>Login...</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#e96e4f] to-[#f14114] text-sm text-white px-3 py-2 rounded-xs"
                  >
                    login
                  </button>
                )}
                {/*------------ submit box end here--------  */}

                <div className="flex items-center mt-2">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="mt-2">
                  <a href="#" className="text-gray-500">
                    Lost your password?
                  </a>
                </div>
              </form>
            </div>

            {/*--------------- Register Section box---------------*/}

            <form className="space-y-4" method="post" onSubmit={registerSubmit}>
              <div className="p-8 rounded-xl">
                <h2 className="text-3xl font-semibold mb-6">Register</h2>
                {/* ------username box------- */}
                <div>
                  <label className="block text-gray-700">Name *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={register.name}
                    onChange={registerChange}
                    className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                {/* -----------username box end here----- */}

                {/* ------mobile box------- */}
                <div>
                  <label className="block text-gray-700">
                    Contact Number *
                  </label>
                  <input
                    required
                    type="number"
                    name="mobile"
                    value={register.mobile}
                    onChange={registerChange}
                    className="w-full border border-gray-300 bg-white  rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                {/* -----------mobile box end here----- */}

                <div>
                  <label className="block text-gray-700">Email address *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={register.email}
                    onChange={registerChange}
                    className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={registerChange}
                    className="w-full border border-gray-300 bg-white rounded-md px-4 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                <p className="text-[12px] text-gray-400 leading-5">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a className="text-blue-600" href="#">
                    privacy policy
                  </a>{" "}
                  .
                </p>

                {registerLoading ? (
                  <button
                    type="button"
                    disabled
                    className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-3 py-1 rounded-xs flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    <span>Registering...</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="bg-gradient-to-r from-[#e96e4f] to-[#f14114] text-sm text-white px-3 py-2 rounded-xs"
                  >
                    Register
                  </button>
                )}
              </div>
            </form>
            {/* -----------------Register Section Box end here------------ */}
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} />

      <Footer1 />
      <FooterLast />
    </>
  );
};

export default Login;
