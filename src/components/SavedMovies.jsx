import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { db } from "../firebase";
import {
  getDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { UserInfo } from "../context/AuthContect";
import { motion } from "framer-motion";
import { slideAnimation } from "../motion";

const SavedMovies = () => {
  const [moviesaved, setMoviesaved] = useState([]);

  const { user } = UserInfo();
  const docref = doc(db, "users", `${user.email}`);

  const getMovie = async () => {
    onSnapshot(docref, (doc) => {
      setMoviesaved(doc.data());
    });
  };

  console.log(moviesaved?.savedMovies);
  useEffect(() => {
    getMovie();
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async (ourid) => {
    try {
      const result = moviesaved?.savedMovies?.filter(
        (item) => item?.id !== ourid
      );
      await updateDoc(movieRef, { savedMovies: result });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white w-full p-4">
      <motion.div
        {...slideAnimation("left")}
        className="max-w-[1240px] mx-auto whitespace-nowrap scroll-smooth overflow-x-scroll scrollbar-hide"
      >
        {moviesaved?.savedMovies?.map((mov) => (
          <div className="w-[160px] md:w-[200px] sm:w-[240px] lg:w-[280px] inline-block p-2 relative">
            <img src={`https://image.tmdb.org/t/p/w500/${mov?.img}`} alt="" />
            <div className="absolute top-0 left-0 justify-center items-center flex w-full h-full duration-300 hover:bg-black/70">
              <h1 className="text-center font-bold">{mov?.name}</h1>
              <p
                onClick={() => {
                  deleteMovie(mov?.id);
                }}
                className="absolute left-4 top-4 cursor-pointer"
              >
                <AiOutlineClose />
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SavedMovies;
