import React from "react";
import "./Banner.scss";
import back__img from "../../../../assets/images/banner.png";
import { PiArrowUpRight, PiWhatsappLogoThin } from "react-icons/pi";
import { RiFlag2Line } from "react-icons/ri";
import trust from "../../../../assets/images/case/Trust.png";
import img100 from "../../../../assets/images/case/100+.png";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div
            className="banner__left"
            style={{ backgroundImage: `url(${back__img})` }}>
            <div className="banner__title__btn">
              <div className="banner__title__subtitle">
                <h3>
                  Take сontrol of your finances with our reliable services
                </h3>
                <p>
                  Financial planning, tax consultancy and accounting solutions
                </p>
              </div>
              <div className="banner__btn__container">
                <NavLink to="/" className="banner__btn">
                  Leran more
                </NavLink>
              </div>
            </div>
          </div>
          <div className="banner__right">
            <div className="banner__right-item">
              <div className="banner__right-item__card">
                <div className="bri__card-icon">
                  <PiArrowUpRight />
                </div>
                <div className="banner__right-item__card-i1">
                  <div className="i1__img__text">
                    <img src={trust} alt="Trust" />
                    <p>Trusted by Companies</p>
                  </div>
                </div>
              </div>
              <div className="banner__right-item__card">
                <div className="bri__card-icon">
                  <RiFlag2Line />
                </div>
                <div className="banner__right-item__card-i2">
                  <div className="i1__img__text">
                    <img src={img100} alt="Case Img" />
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner__right-item">
              <div className="banner__right-item__inner">
                <div className="bri__inner__inner">
                  <div className="get__free">
                    <h4>Get quick free сonsultations</h4>
                  </div>
                  <NavLink to="/" className="contact__whatsapp">
                    <PiWhatsappLogoThin className="whatsapp__icon" />
                    <p>Contact Us</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
