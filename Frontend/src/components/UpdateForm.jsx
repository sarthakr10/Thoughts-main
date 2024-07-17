import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UpdateForm = () => {
  const { title, description, image, _id } = useSelector(
    (store) => store.blog.updateBlogInfo
  );
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    const response = await fetch(
      `http://localhost:4040/api/v1/updateBlog/${_id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const message = await response.json();
    if (message.success) {
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
        navigate("/home");
      }, 4000);
    } else {
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

  useEffect(() => {
    setValue("title", title);
    setValue("description", description);
    setValue("image", image);
  }, [setValue, title, description, image]);

  const handleClose = () => {
    navigate("/home");
  };

  return (
    <div className="absolute top-36 left-[36%] w-[27%] bg-black p-8 rounded-lg">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded-full"
      >
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 lg:mb-7">
          <label htmlFor="title" className="block text-white mb-2">Title</label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className="w-full px-4 py-4 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700"
            placeholder="Enter your title"
          />
        </div>
        <div className="mb-4 lg:mb-7">
          <label htmlFor="description" className="block text-white mb-2">Description</label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="w-full px-4 py-4 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4 lg:mb-7">
          <label htmlFor="image" className="block text-white mb-2">Image Link</label>
          <input
            {...register("image")}
            type="text"
            id="image"
            className="w-full px-4 py-4 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700"
            placeholder="Enter image link"
          />
        </div>
        <button
          className="w-full px-4 py-4 text-sm font-bold text-gray-300 uppercase bg-blue-600 rounded-md lg:text-lg dark:text-gray-300 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900"
          type="submit"
        >
          UPDATE
        </button>
      </form>
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

export default UpdateForm;
