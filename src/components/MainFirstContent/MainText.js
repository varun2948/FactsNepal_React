import React from "react";
import Fade from "react-reveal/Fade";

const MainText = () => (
  <div className="col-md-5">
    <Fade bottom duration={1000} distance={"20px"}>
      <h1 className="heroleft__header">FACTS</h1>
    </Fade>
    <Fade bottom duration={1100} distance={"20px"}>
      <h4>Research & analytics</h4>
    </Fade>
    <Fade bottom duration={1200} distance={"20px"}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        architecto voluptatum voluptate dolores ad est, ea rerum laboriosam
        assumenda culpa?
      </p>
    </Fade>
    <Fade bottom duration={1200} distance={"30px"}>
      <button className="btn btn-primary btn-lg heroleft__btn ">
        {" "}
        <span className="fom"> Find Out More</span>
        <i className="la la-arrow-right" />
      </button>
    </Fade>
  </div>
);

export default MainText;
