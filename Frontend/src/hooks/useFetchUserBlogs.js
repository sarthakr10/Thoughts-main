import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserBlogs } from "../utils/blogSlice";
export const useFetchUserBlogs = (_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const response = await fetch(
      "https://thoughts-main-backend.onrender.com/api/v1/userBlogs/" + _id
    );
    const data = await response.json();

    dispatch(setUserBlogs(data));
  };
};
