import React from "react";
import "./WhatWeDo.scss";
import { NavLink } from "react-router-dom";
const WhatWeDo = () => {
  return (
    <div className="whatwedo">
      <div className="whatwedo__container">
        <h3 className="whatwedo__title">What we do</h3>
        <p className="whatwedo__subtitle">
          We provide accounting services, tax consultancy and financial
          solutions to help you stay ahead of the game from all key sectors of
          the economy. <br />
          <br /> Relying on our unrivalled multi-year experience, you will be
          able to discover new ways of development and find winning
          opportunities.
        </p>
        <NavLink to="/" className="whatwedo__btn">
          More about us
        </NavLink>
      </div>
    </div>
  );
};

export default WhatWeDo;
