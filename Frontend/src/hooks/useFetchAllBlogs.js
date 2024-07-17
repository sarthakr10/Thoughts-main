import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllBlogs } from "../utils/blogSlice";
export const useFetchAllBlogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:4040/api/v1/allBlogs");
    const data = await response.json();

    dispatch(setAllBlogs(data));
  };
};
