import React from "react";
import "./HomeForm.scss";
import shape2 from "../../../../assets/images/shape2.png";
import hfb from "../../../../assets/images/hfb.png";
const HomeForm = () => {
  return (
    <div className="homeform">
      <div
        className="homeform__form"
        style={{ backgroundImage: `url(${hfb})` }}>
        <div className="homeform__form__inner">
          <div className="form__inner__title">Let's work together!</div>
          <div className="form__inner__form">
            <form action="#">
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Your Email" />
              <select name="request" id="request">
                <option value="Req">What is your request?</option>
                <option value="Req">What is your request?</option>
                <option value="Req">What is your request?</option>
              </select>
              <textarea
                name="yourmessage"
                placeholder="Tell more about your request"></textarea>
              <input type="submit" name="send" value="Send" />
            </form>
          </div>
        </div>
      </div>

      <div className="homeform__bottom">
        <img src={shape2} alt="Shape" />
      </div>
    </div>
  );
};

export default HomeForm;
