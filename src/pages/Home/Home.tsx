import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Apart from "./components/Apart/Apart";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Principles from "./components/Principles/Principles";
import HomeClients from "./components/HomeClients/HomeClients";
import HomeForm from "./components/HomeForm/HomeForm";
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
      <HomeForm />
    </div>
  );
};

export default Home;
