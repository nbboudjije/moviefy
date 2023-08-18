import React from "react";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Hero />
      <Movies rowId="1" title="TopRated" fetchURL={requests.requestTopRated} />
      <Movies rowId="2" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Movies rowId="3" title="Popular" fetchURL={requests.requestPopular} />
      <Movies rowId="4" title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
