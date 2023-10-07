import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserInfo } from "../context/AuthContect";

const Navbar = () => {
  const { user, logOut, setError } = UserInfo();

  const navigate = useNavigate();
  const signOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="w-full h-[70px] text-white p-3 absolute z-10">
      {user !== null ? (
        <div className="w-full flex justify-between items-center mx-auto">
          <Link to="/">
            <h1 className="text-purple-600 text-2xl md:text-4xl font-bold">
              MOVIEFY
            </h1>
          </Link>

          <div className="md:block hidden">
            <button className="py-2 px-5 rounded-lg">
              <AiOutlineSearch size={18} />
            </button>
            <input
              className="p-3 px-10 rounded shadow-lg hover:shadow-purple-500 text-black"
              type="text"
              placeholder="Search Your Movie"
            />
          </div>
          <div>
            <Link to="/account">
              <button className="py-2 px-5 rounded-lg font-bold ">
                Account
              </button>
            </Link>

            <button
              className="py-2 px-5 rounded-lg bg-purple-600 font-bold"
              onClick={signOut}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-between items-center mx-auto">
          <Link to="/">
            <h1 className="text-purple-600 text-2xl md:text-4xl font-bold">
              MOVIEFY
            </h1>
          </Link>

          <div className="md:block hidden">
            <button className="py-2 px-5 rounded-lg">
              <AiOutlineSearch size={18} />
            </button>
            <input
              className="p-3 px-10 rounded shadow-lg hover:shadow-purple-500 text-black"
              type="text"
              placeholder="Search Your Movie"
            />
          </div>
          <div>
            <Link to="login">
              <button className="py-2 px-5 rounded-lg font-bold ">Login</button>
            </Link>
            <Link to="signup">
              <button className="py-2 px-5 rounded-lg bg-purple-600 font-bold">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
