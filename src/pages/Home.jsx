import React from "react";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import requests from "../Requests";
import { motion } from "framer-motion";
import { headContainerAnimation, headContainerAnimation2 } from "../motion";

const Home = () => {
  return (
    <div>
      <Hero />
      <motion.div {...headContainerAnimation}>
        <Movies
          rowId="1"
          title="TopRated"
          fetchURL={requests.requestTopRated}
        />
      </motion.div>
      <motion.div {...headContainerAnimation2}>
        <Movies
          rowId="2"
          title="Upcoming"
          fetchURL={requests.requestUpcoming}
        />
      </motion.div>
      <motion.div {...headContainerAnimation}>
        <Movies rowId="3" title="Popular" fetchURL={requests.requestPopular} />
      </motion.div>
      <motion.div {...headContainerAnimation2}>
        <Movies
          rowId="4"
          title="Trending"
          fetchURL={requests.requestTrending}
        />
      </motion.div>
    </div>
  );
};

export default Home;
