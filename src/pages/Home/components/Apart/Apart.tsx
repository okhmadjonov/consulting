import React from "react";
import "./Apart.scss";
import apart1 from "../../../../assets/images/illusion/apart1.png";
import apart2 from "../../../../assets/images/illusion/apart2.png";
import apart3 from "../../../../assets/images/illusion/apart3.png";
import { NavLink } from "react-router-dom";
const Apart = () => {
  return (
    <div className="apart">
      <div className="container">
        <div className="apart__wrapper">
          <h3 className="apart__title">What sets us apart</h3>
          <div className="apart__body">
            <div className="apart__body__card">
              <div className="card__img">
                <img src={apart1} alt="Apart set us" />
              </div>
              <h3 className="card__title">Reliable Connections</h3>
              <p className="card__subtitle">
                We prioritize understanding client needs, supporting them beyond
                advice, anticipating business issues, emphasizing clear
                communication, and hands-on management.
              </p>
            </div>
            <div className="apart__body__card">
              <div className="card__img">
                <img src={apart2} alt="Apart set us" />
              </div>
              <h3 className="card__title">Professional Responsibility</h3>
              <p className="card__subtitle">
                We foster honest relationships with clients and colleagues,
                nurturing mutual understanding, support, and comprehending
                individual needs.
              </p>
            </div>
            <div className="apart__body__card">
              <div className="card__img">
                <img src={apart3} alt="Apart set us" />
              </div>
              <h3 className="card__title">Close Client Rapport</h3>
              <p className="card__subtitle">
                We practice responsibility and professionalism, adhering to high
                standards, providing comprehensive advice, engaging skilled
                specialists, and valuing confidentiality and ethics.
              </p>
            </div>
          </div>
          <div className="consultation__btn">
            <NavLink to="/" className="get__free__consultation">
              Get free consultation
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apart;
