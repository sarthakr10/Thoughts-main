import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { setUpdateBlogInfo } from "../utils/blogSlice";
import { useDispatch } from "react-redux";
import UpdateForm from "./UpdateForm";
const Cards = ({
  title,
  description,
  image,
  date,
  time,
  author,
  id,
  blogid,
}) => {
  const _id = useSelector((store) => store.config.userInfo._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState(false);
  const handleDelete = async () => {
    const response = await fetch(
      `https://thoughts-main-backend.onrender.com/api/v1/deleteBlog/${blogid}`,
      {
        method: "DELETE",
      }
    );
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
        navigate("/home");
      }, 3000);
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
  const handleUpdtae = async () => {
    const response = await fetch(
      `https://thoughts-main-backend.onrender.com/api/v1/singleBlog/${blogid}`
    );
    const data = await response.json();

    dispatch(setUpdateBlogInfo(data.data));
    setUpdateForm(!updateForm);
  };
  return (
    <div>
      <article className="flex w-full bg-white transition hover:shadow-xl mb-3 dark:bg-gray-900 dark:shadow-gray-800/25">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            <span>{date}</span>
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>{time}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="user post image"
            src={image}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                {title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
              {description}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <span
              onClick={handleUpdtae}
              className="text-2xl pb-2 pr-2 text-indigo-500"
            >
              {id == _id ? <FaEdit /> : null}
            </span>
            <span
              onClick={handleDelete}
              className="text-2xl pb-2 pr-2 text-red-600"
            >
              {id == _id ? <RiDeleteBin5Fill /> : null}
            </span>
            <a
              href="#"
              className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Author- {author}
            </a>
          </div>
        </div>
      </article>
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
      {updateForm && <UpdateForm />}
    </div>
  );
};

export default Cards;
