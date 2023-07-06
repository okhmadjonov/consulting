import React from "react";
import { NavLink } from "react-router-dom";
import f__logo from "../../assets/images/f__logo.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__menu">
            <div className="f__header">
              <div className="container">
                <div className="f__header__container">
                  <NavLink to="/" className="f__logo">
                    <img src={f__logo} alt="Logo" />
                  </NavLink>

                  <div className="f__menu">
                    <NavLink className="f__menu__link" to="/">
                      Accounting Services
                    </NavLink>
                    <NavLink className="f__menu__link" to="/">
                      Tax Consulting
                    </NavLink>
                    <NavLink className="f__menu__link" to="/">
                      Financial Consulting
                    </NavLink>
                    <NavLink className="f__menu__link" to="/">
                      About Us
                    </NavLink>
                    <NavLink className="f__menu__link" to="/">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="copyright">© 2023 G&D Consulting</div>
            <div className="policy">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
