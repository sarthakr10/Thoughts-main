import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterComp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const response = await fetch("https://thoughts-main-backend.onrender.com/api/v1/register", {
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
      setTimeout(() => {
        navigate("/");
      }, 5000);
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
      <section className="h-96 lg:h-screen font-poppins ">
        <div className="relative z-10 flex justify-center h-screen py-7 lg:py-16 dark:bg-gray-800 2xl:py-44">
          <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 lg:bottom-0 lg:h-auto lg:w-full">
            <div className="absolute inset-0 lg:bg-[#00000066] "></div>
            <img
              src="https://images.pexels.com/photos/7321/sea-water-ocean-horizon.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
              className="hidden object-cover w-full h-full lg:block"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative max-w-6xl px-4 mx-auto">
              <div className="max-w-xl mx-auto lg:max-w-5xl">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                    <h2 className="text-4xl font-bold leading-loose text-left text-gray-100 dark:text-gray-300 mb-9 lg:text-6xl ">
                      Welcome and join our community
                    </h2>
                    <p className="text-lg text-left text-gray-200 dark:text-gray-300 ">
                      You are welcome here!
                    </p>
                  </div>
                  <div className="w-full px-4 lg:w-2/5">
                    <div className="p-6 shadow-md lg:p-9 bg-gray-50 dark:bg-gray-900 ">
                      <h2 className="mb-4 text-xl font-bold lg:mb-8 lg:text-3xl dark:text-gray-400">
                        Register your Account
                      </h2>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-0 m-0"
                      >
                        <div>
                          <label
                            for=""
                            className="text-lg font-medium text-gray-700 dark:text-gray-400"
                          >
                            Username:
                          </label>
                          <input
                            {...register("username")}
                            type="text"
                            className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                            placeholder="Enter your username"
                          />
                        </div>
                        <div>
                          <label
                            for=""
                            className="text-lg font-medium text-gray-700 dark:text-gray-400"
                          >
                            Email:
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            className="w-full px-4 py-3 mt-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label
                            for=""
                            className="text-lg font-medium text-gray-700 dark:text-gray-400 "
                          >
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
                        <button
                          className="w-full px-4 py-3 mt-5 font-semibold text-gray-200 bg-blue-500 rounded-lg dark:bg-blue-500 hover:text-blue-200 "
                          type="submit"
                        >
                          Register
                        </button>
                        <div className="flex flex-wrap items-center mt-3 text-sm text-gray-700 lg:text-base lg:mt-5 dark:text-gray-400">
                          Already member?
                          <Link
                            to={"/"}
                            href="#"
                            className="ml-2 text-base font-semibold text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                          >
                            Login here
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
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
export default RegisterComp;
