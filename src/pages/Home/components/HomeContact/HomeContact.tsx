import React from "react";
import "./HomeContact.scss";
import { NavLink } from "react-router-dom";
import whatsapp from "../../../../assets/images/whatsapp.png";
import tg from "../../../../assets/images/tg.png";
import email from "../../../../assets/images/email.png";
const HomeContact = () => {
  return (
    <div className="homecontact">
      <div className="container">
        <div className="homecontact__wrapper">
          <div className="homecontact__title">Or you can contact with us</div>
          <div className="homecontact__icons">
            <NavLink to="/" className="whatsapp hc__icon">
              <img src={whatsapp} alt="Whatsapp" className="hc__p" /> Whatsapp
            </NavLink>
            <NavLink to="/" className="telegram hc__icon">
              <img src={tg} alt="Telegram" className="hc__p" />
              Telegram
            </NavLink>
            <NavLink to="/" className="email hc__icon">
              <img src={email} alt="Email" className="hc__p" />
              E-mail
            </NavLink>
          </div>
          <div className="homecontact__subtitle">
            Click for a free consultation and confidently achieve financial
            goals. Empower your business with our expert services. Act now!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
