import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Apart from "./components/Apart/Apart";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <WhatWeDo />
      <Apart />
      <Services />
      <Experience />
    </div>
  );
};

export default Home;
