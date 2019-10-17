import React from "react";
import Fade from "react-reveal/Fade";

const Service = ({ service }) => (
  <div className="col-md-4">
    <Fade bottom duration={1000} delay={400} distance={"50px"}>
      <div className="service-item text-center section-padding-y">
        <div className="service-item__iconholder imp-wpr ">
          <img src={service.image} alt={service.title} width="72px" />
        </div>
        <div className="service-item__title mt-2 mb-2 text-white overprimary">
          <div> {service.title}</div>
        </div>
        <a
          className="service-item__link no-decoration text-white overprimary"
          href="/service"
        >
          {" "}
          <span> Read More</span> <i className="la la-arrow-right" />{" "}
        </a>
      </div>
    </Fade>
  </div>
);

export default Service;
