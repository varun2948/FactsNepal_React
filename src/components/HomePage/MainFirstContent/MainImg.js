import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const MainImg = () => (
  <div className="col-md-7  d-none d-md-block rtpanel">
    <div className="relative">
      <Fade bottom duration={1300} distance={"20px"}>
        <img className="backtriangle" src="img/factbars.png" alt="logo" />
      </Fade>
      <Fade bottom duration={1300} delay={500} distance={"20px"}>
        <img className="rel" src="img/man.png" alt="search" />
      </Fade>
      <Bounce duration={1300} delay={1000}>
        <img className="searchp" src="img/search.png" alt="man" />
      </Bounce>
    </div>
  </div>
);

export default MainImg;
