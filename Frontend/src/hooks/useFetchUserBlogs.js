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
      "http://localhost:4040/api/v1/userBlogs/" + _id
    );
    const data = await response.json();

    dispatch(setUserBlogs(data));
  };
};
