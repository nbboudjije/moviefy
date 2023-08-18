import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] text-white p-3 absolute z-10">
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
            className="p-3 px-10 rounded"
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
    </div>
  );
};

export default Navbar;
