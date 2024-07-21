import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setIsLoggedIn, setUserInfo } from "../utils/configSlice";
import "react-toastify/dist/ReactToastify.css";
const LoginComp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const response = await fetch("https://thoughts-main-backend.onrender.com/api/v1/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = await response.json();
    if (message.sucess) {
      toast.success(message.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(setUserInfo({ ...message.user, password: undefined }));
      setTimeout(() => {
        dispatch(setIsLoggedIn());
        navigate("/home");
      }, 2000);
    }
    if (!message.sucess) {
      toast.error(message.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div>
      <section className=" font-poppins">
        <div className="relative z-10 flex items-center h-screen py-16 overflow-hidden lg:bg-blue-900 lg:dark:bg-gray-800 2xl:py-44">
          <div className="absolute top-0 left-0 w-full h-full lg:bg-blue-900 dark:bg-bg-gray-700 lg:bottom-0 lg:h-auto lg:w-4/12">
            <img
              src="https://i.postimg.cc/XJBZvxHp/first.jpg"
              alt=""
              className="hidden object-cover w-full h-full lg:block"
            />
          </div>
          <div className="relative max-w-6xl px-4 mx-auto">
            <div className="justify-center max-w-xl mx-auto lg:max-w-5xl">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 lg:w-2/5">
                  <div className="z-10 w-full p-10 shadow-md bg-gray-50 dark:bg-gray-900 rounded-lg ">
                    <h2 className="text-xl font-bold leading-tight mb-7 md:text-2xl dark:text-gray-300">
                      Login to your account
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300">
                          Email:
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-3 mt-2 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="mt-4">
                        <div>
                          <label className="text-gray-700 dark:text-gray-300 ">
                            Password:
                          </label>
                          <div className="relative flex items-center mt-2">
                            <input
                              {...register("password")}
                              type="password"
                              className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                              placeholder="Enter password"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="w-full px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg hover:text-gray-700 hover:bg-blue-200 "
                        type="submit"
                      >
                        LOGIN
                      </button>
                      <div className="mt-4 text-gray-700  dark:text-gray-300">
                        Need an account?
                        <Link
                          to={"/register"}
                          className="font-semibold text-blue-700 hover:underline"
                        >
                          Create an account{" "}
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                  <span className="flex items-center justify-center w-20 h-20 mx-auto text-gray-900 bg-yellow-400 rounded-lg dark:bg-yellow-300 mb-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  </span>
                  <h2 className="text-4xl font-bold text-center text-gray-100 dark:text-gray-400 mb-9 lg:text-6xl ">
                    Are you ready to login your account?
                  </h2>
                  <p className="text-xl font-semibold text-center text-gray-200 dark:text-gray-500 ">
                    You are welcome here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default LoginComp;
