import React from "react";
import "./HomeClients.scss";
import clients from "../../../../assets/images/clients.png";
const HomeClients = () => {
  return (
    <div className="homeclients">
      <div className="container">
        <div className="homeclients__container">
          <div className="homeclients__title">100+ Satisfied Clients</div>
          <div className="homeclients__img">
            <img src={clients} alt="Clients" />
          </div>
          <div className="homeclients__subtitle">
            At G&D Consulting, we have successfully helped numerous clients in
            overcoming financial, tax, and accounting challenges. With a growing
            base of over 100 satisfied clients, our team of experts is
            well-equipped with the essential knowledge and expertise to prevent
            errors, ensure compliance, and capitalize on opportunities that
            others might overlook. By efficiently managing time-consuming tasks,
            we enable our clients to focus on their core business objectives and
            personal endeavors. <br /> Our commitment to cost-effectiveness and
            security has earned us the trust of a wide range of clients. We
            provide top-notch services without compromising on quality or the
            safeguarding of your confidential information. Our transparent and
            prompt communication guarantees clients remain well-informed and
            supported throughout our collaboration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClients;
