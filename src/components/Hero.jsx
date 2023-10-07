import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";
import { FaStar, FaCalendar, FaPlay, FaArrowCircleDown } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeAnimation } from "../motion";
const Hero = () => {
  const [movie, setMovie] = useState([]);

  const fetchAPI = () => {
    axios.get(requests.requestPopular).then((res) => {
      setMovie(res.data.results);
    });
  };

  const randomMovie = movie[Math.floor(Math.random() * movie.length)];

  console.log(randomMovie);

  useEffect(() => {
    fetchAPI();
  }, []);

  const sliceDescription = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen">
        <div className="bg-black/60 w-full h-screen absolute"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt="/"
          className="w-full h-screen object-cover"
        />
        <motion.div
          className="absolute top-[20%] text-white p-4 md:p-8"
          {...fadeAnimation}
        >
          <h1 className="text-2xl md:text-4xl font-bold">
            {randomMovie?.title}
          </h1>
          <div className="my-4 flex ">
            <button className="rounded-xl px-5 py-2 bg-gray-400 font-bold text-black animate-bounce flex item-center justify-center gap-2">
              <FaPlay size={18} /> Play
            </button>
            <button className="rounded px-5 py-2 border-gray-500 border-solid">
              Save For Later
            </button>
          </div>
          <p
            className="max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[35%]"
            max-
          >
            {sliceDescription(randomMovie?.overview, 150)}
          </p>
          <p className="flex flex-row items-center gap-2">
            <FaCalendar /> {randomMovie?.release_date}
          </p>

          <p className="flex flex-row items-center gap-2">
            <FaStar /> {randomMovie?.vote_average}
          </p>
        </motion.div>
      </div>
      <div className="absolute right-[1%] top-[90%]">
        <button className="text-white animate-bounce">
          <FaArrowCircleDown size={50} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
