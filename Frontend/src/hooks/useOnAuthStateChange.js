import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useOnAuthStateChange = () => {
  const isLoggedIn = useSelector((store) => store.config.isLoggedIn);
  const [auth, setAuth] = useState(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(isLoggedIn);

    if (auth) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [auth, isLoggedIn]);

  return auth;
};
