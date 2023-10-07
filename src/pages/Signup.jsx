import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserInfo } from "../context/AuthContect";

const Signup = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    createAccount,
    setError,
    error,
    user,
  } = UserInfo();

  console.log(user);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createAccount(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://images.unsplash.com/photo-1610890690846-5149750c8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="fixed bg-black/60 w-full h-full top-0 left-0"></div>

        <div className="fixed py-24 px-4 top-0 left-0 lg:top-5 lg:left-5 w-full h-full text-white">
          <div className="max-w-[450px] h-screen bg-black/80">
            <div className="max-w-[320px] mx-auto py-8">
              <h1 className="text-4xl ">Signup</h1>
              {error ? (
                <div className="mt-2">
                  <p className="p-3 mt-2 bg-red-500">{error}</p>
                </div>
              ) : null}
              <form
                onSubmit={handleSignup}
                action=""
                className="flex flex-col my-8"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="my-2 p-3 rounded shadow-lg hover:shadow-purple-500 text-black"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="my-2 p-3 rounded shadow-lg hover:shadow-purple-500 text-black"
                  autoComplete="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="bg-purple-500 py-2 font-bold my-4 rounded"
                >
                  Submit
                </button>
              </form>

              <p>
                <input type="checkbox" /> Remember Me
              </p>
              <p>
                <span>Already Have an Account?</span>
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
