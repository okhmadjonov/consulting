import React from "react";
import "./Experience.scss";
import { NavLink } from "react-router-dom";
import exp1 from "../../../../assets/images/illusion/exp1.png";
import exp2 from "../../../../assets/images/illusion/exp2.png";
import exp3 from "../../../../assets/images/illusion/exp3.png";
import { BsArrowRight } from "react-icons/bs";
const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="experience__wrapper">
          <div className="experience__title">Experience</div>
          <div className="experience__body">
            <div className="exp__card">
              <div className="exp__img">
                <img src={exp1} alt="Exp1" />
              </div>
              <div className="exp__title">Experience in the UAE</div>
              <div className="exp__subtitle">
                Our team specializes in accounting, bookkeeping, and tax
                services in the UAE, providing consultations tailored to your
                needs. We have vast experience advising top UAE companies,
                private investment firms, and startups. Our priorities include a
                cohesive team, result-oriented focus, and a deep understanding
                of the local Emirati market and its financial regulations.
              </div>
            </div>
            <div className="exp__card">
              <div className="exp__img">
                <img src={exp2} alt="Exp1" />
              </div>
              <div className="exp__title">Adapting to Market Changes</div>
              <div className="exp__subtitle">
                We consider the specifics of UAE legislation and our clients'
                industry characteristics. Our team keeps an eye on technological
                solutions and quickly adapts to market changes. This approach
                helps improve business processes and maintain stability in a
                dynamic environment.
              </div>
            </div>
            <div className="exp__card">
              <div className="exp__img">
                <img src={exp3} alt="Exp1" />
              </div>
              <div className="exp__title">
                Global and Local Expertise Combined
              </div>
              <div className="exp__subtitle">
                By merging international experience with a profound knowledge of
                the local market, we provide an exceptional service to our
                clients. We pride ourselves on being accessible, promptly and
                efficiently addressing any client concerns that may arise.
              </div>
            </div>
          </div>
          <div className="experience__btn">
            <NavLink to="/" className="get__free__consultation">
              Get free consultation
              <BsArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
