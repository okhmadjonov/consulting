import React from "react";
import "./Services.scss";
import service1 from "../../../../assets/images/frame/service1.png";
import service2 from "../../../../assets/images/frame/service2.png";
import service3 from "../../../../assets/images/frame/service3.png";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__title">Services we provide</div>
          <div className="services__body">
            <div className="services__body__card">
              <div className="sb__card-inner">
                <div className="card__inner-circle">
                  <img src={service1} alt="Service1" />
                </div>
                <div className="card__inner-text">
                  <h3 className="card__text__title">Accounting Services</h3>
                  <div className="card__subtitle__items">
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Managing full company’s accounting
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Partial accounting with “VAT”, “wage expenses” etc.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">Accounting outsourcing.</span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Financial statement analysis, interpretation, and
                        evaluation.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Advising on emerging tax issues.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Assistance in resolving business disputes.
                      </span>
                    </p>
                  </div>
                  <NavLink to="/" className="more__info">
                    More info <BsArrowRight />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="services__body__card">
              <div className="sb__card-inner">
                <div className="card__inner-text">
                  <h3 className="card__text__title">Tax Consulting</h3>
                  <div className="card__subtitle__items">
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Managing full company’s accounting
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Partial accounting with “VAT”, “wage expenses” etc.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">Accounting outsourcing.</span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Financial statement analysis, interpretation, and
                        evaluation.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Advising on emerging tax issues.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Assistance in resolving business disputes.
                      </span>
                    </p>
                  </div>
                  <NavLink to="/" className="more__info">
                    More info <BsArrowRight />
                  </NavLink>
                </div>
                <div className="card__inner-circle">
                  <img src={service2} alt="Service2" />
                </div>
              </div>
            </div>
            <div className="services__body__card">
              <div className="sb__card-inner">
                <div className="card__inner-circle">
                  <img src={service3} alt="Service3" />
                </div>
                <div className="card__inner-text">
                  <h3 className="card__text__title">Financial Consulting</h3>
                  <div className="card__subtitle__items">
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Managing full company’s accounting
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Partial accounting with “VAT”, “wage expenses” etc.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">Accounting outsourcing.</span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Financial statement analysis, interpretation, and
                        evaluation.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Advising on emerging tax issues.
                      </span>
                    </p>
                    <p className="item__dot__text">
                      <span className="it__dot" />
                      <span className="it__text">
                        Assistance in resolving business disputes.
                      </span>
                    </p>
                  </div>
                  <NavLink to="/" className="more__info">
                    More info <BsArrowRight />
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

export default Services;
