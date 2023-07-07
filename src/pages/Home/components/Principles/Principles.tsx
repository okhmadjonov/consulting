import React from "react";
import "./Principles.scss";
import star from "../../../../assets/images/star.png";
import exp_shape from "../../../../assets/images/exp_shape.png";
import { NavLink } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
const Principles = () => {
  return (
    <div className="principles">
      <div className="container">
        <div className="principles__container">
          <div className="pc__star">
            <img src={star} alt="Star" />
          </div>
          <div className="pc__body">
            <div className="pc__body__card demo">
              <h3>
                Our <br />
                principles
              </h3>
            </div>
            <div className="pc__body__card lightblue">
              <div className="pcb__card__inner">
                <h4 className="pcbc__inner__title">
                  Providing an individual approach to each client and developing
                  a personalized solution for their business 1
                </h4>
                <NavLink to="/" className="pcbc__inner__btn">
                  <BsChevronRight />
                </NavLink>
              </div>
            </div>
            <div className="pc__body__card lightgrey">
              <div className="pcb__card__inner">
                <h4 className="pcbc__inner__title">
                  Providing an individual approach to each client and developing
                  a personalized solution for their business 1
                </h4>
                <NavLink to="/" className="pcbc__inner__btn">
                  <BsChevronRight />
                </NavLink>
              </div>
            </div>
            <div className="pc__body__card lightblue">
              <div className="pcb__card__inner">
                <h4 className="pcbc__inner__title">
                  Providing an individual approach to each client and developing
                  a personalized solution for their business 1
                </h4>
                <NavLink to="/" className="pcbc__inner__btn">
                  <BsChevronRight />
                </NavLink>
              </div>
            </div>
            <div className="pc__body__card lightgrey">
              <div className="pcb__card__inner">
                <h4 className="pcbc__inner__title">
                  Providing an individual approach to each client and developing
                  a personalized solution for their business 1
                </h4>
                <NavLink to="/" className="pcbc__inner__btn">
                  <BsChevronRight />
                </NavLink>
              </div>
            </div>
            <div className="pc__body__card lightblue">
              <div className="pcb__card__inner">
                <h4 className="pcbc__inner__title">
                  Providing an individual approach to each client and developing
                  a personalized solution for their business 1
                </h4>
                <NavLink to="/" className="pcbc__inner__btn">
                  <BsChevronRight />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exp__shape">
        <img src={exp_shape} alt="Expe" />
      </div>
    </div>
  );
};

export default Principles;
