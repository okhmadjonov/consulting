import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Apart from "./components/Apart/Apart";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <WhatWeDo />
      <Apart />
    </div>
  );
};

export default Home;
