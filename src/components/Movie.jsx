import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserInfo } from "../context/AuthContect";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const Movie = ({ movie, id }) => {
  const [likes, setLikes] = useState(false);
  const [save, setSave] = useState(false);

  const likesMovie = () => {
    setLikes(!likes);
  };
  const { user } = UserInfo();

  const saveMovie = async () => {
    if (user !== null) {
      setLikes(!likes);
      setSave(true);
      const reffdoc = doc(db, "users", `${user?.email}`);
      await updateDoc(reffdoc, {
        savedMovies: arrayUnion({
          id: movie.id,
          name: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("you have to login to be able to save movies!");
    }
  };
  return (
    <div
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt=""
        className="w-full object-cover"
      />
      <div className="absolute flex justify-center items-center top-0 left-0 w-full h-full p-2 opacity-0 hover:opacity-100 duration-300 hover:bg-black/60">
        <h1 className="text-xs md:text-sm text-center font-bold ">
          {movie?.title}
        </h1>
        <p className="absolute top-4 left-4 cursor-pointer" onClick={saveMovie}>
          {likes ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
