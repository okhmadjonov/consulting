import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Apart from "./components/Apart/Apart";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Principles from "./components/Principles/Principles";
import HomeClients from "./components/HomeClients/HomeClients";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <WhatWeDo />
      <Apart />
      <Services />
      <Experience />
      <Principles />
      <HomeClients />
    </div>
  );
};

export default Home;
