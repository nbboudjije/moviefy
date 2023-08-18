import React, { useState, useEffect } from "react";
import axiox from "axios";
import Movie from "./Movie";

const Movies = ({ rowId, title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const fetchAPI = () => {
    axiox.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  };

  console.log(movies);

  useEffect(() => {
    fetchAPI();
  }, [fetchURL]);

  return (
    <div className="text-white">
      <h1 className="text-l md:text-3xl font-bold p-2 ">{title}</h1>
      <div className="w-full h-full whitespace-nowrap scroll-smooth relative overflow-x-scroll overflow-hidden">
        {movies.map((movie, id) => (
          <Movie key={id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
