import React from "react";
import { SiTalenthouse } from "react-icons/si";
import { useOnAuthStateChange } from "../hooks/useOnAuthStateChange";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogOut } from "../utils/configSlice";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
const Header = () => {
  const auth = useOnAuthStateChange();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useOnlineStatus();
  const handleLogOut = () => {
    dispatch(setLogOut());
    navigate("/");
  };
  return (
    <div>
      <header className="body-font bg-black text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={"/home"} className="flex">
            <span className="text-2xl">
              <SiTalenthouse />
            </span>
            <span className="font-mono text-lg font-bold">houghts</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {auth && (
              <>
                <Link
                  to={"/home"}
                  className="mr-5 hover:text-blue-500 text-white font-mono font-bold"
                >
                  Thoughts
                </Link>
                <Link
                  to={"/myblog"}
                  className="mr-5 hover:text-blue-500 text-white font-mono font-bold"
                >
                  My Thoughts
                </Link>
                <Link
                  to={"/create"}
                  className="mr-5 hover:text-blue-500 text-white font-mono font-bold"
                >
                  Create
                </Link>
                {status ? (
                  <span className="mr-5 hover:text-blue-500 text-white font-mono font-bold">
                    🟢 online
                  </span>
                ) : (
                  <span className="mr-5 hover:text-blue-500 text-white font-mono font-bold">
                    🔴 offline
                  </span>
                )}
              </>
            )}
          </nav>
          {auth && (
            <>
              <button
                onClick={handleLogOut}
                className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
              >
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <svg fill="white" viewBox="0 0 512 512" className="w-4 h-4">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Logout
                </div>
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
