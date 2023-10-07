import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1610890690846-5149750c8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
        <h1 className="p-3 md:p-6 text-xl md:text-3xl font-bold">My Shows</h1>
        <div className="w-full">
          <SavedMovies />
        </div>
      </div>
    </>
  );
};

export default Account;
