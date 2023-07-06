import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <WhatWeDo />
    </div>
  );
};

export default Home;
