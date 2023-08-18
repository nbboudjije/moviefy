import React from "react";

const Movie = ({ movie, id }) => {
  return (
    <div
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt=""
        className="w-full h-auto"
      />
      <h1 className="text-xs md:text-sm text-center">{movie?.title}</h1>
    </div>
  );
};

export default Movie;
