import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__container">
          <NavLink to="/" className="logo">
            <img src={logo} alt="Logo" />
          </NavLink>

          <div className="menu">
            <NavLink className="menu__link" to="/">
              Accounting Services
            </NavLink>
            <NavLink className="menu__link" to="/">
              Tax Consulting
            </NavLink>
            <NavLink className="menu__link" to="/">
              Financial Consulting
            </NavLink>
            <NavLink className="menu__link" to="/">
              About Us
            </NavLink>
            <NavLink className="menu__link" to="/">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
