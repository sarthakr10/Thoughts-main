import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllBlogs } from "../utils/blogSlice";
export const useFetchAllBlogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const response = await fetch("https://thoughts-main-backend.onrender.com/api/v1/allBlogs");
    const data = await response.json();

    dispatch(setAllBlogs(data));
  };
};
