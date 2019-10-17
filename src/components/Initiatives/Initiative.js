import React from "react";
import Fade from "react-reveal/Fade";

const Initiative = ({ initiative }) => (
  <div className=" col-md-12">
    <Fade bottom duration={1000} delay={500} distance={"50px"}>
      <div className="ii awareness">

        <div className="ii__img">
          <img src={initiative.image} alt="trophy" />
        </div>
        <div className="in-det">
          <h5 className="mb-3">{initiative.title}</h5>
          <p className="ii__description mb-3">
            {initiative.description}
          </p>
          <a href="#" className="no-decoration">
            {" "}
            <span>Read More</span>{" "}
            <span>
              <i className="la la-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </Fade>
  </div>
);

export default Initiative;
