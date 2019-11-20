import React from "react";
import HeaderText from "./MainText";
import HeaderImg from "./MainImg";
import ParticleJsImg from "./ParticleJsImg";
import ParticleJsText from "./ParticleJsText";

const FirstMain = () => (

  // <div className="background-wrap">

  <section className="banner ">
    <ParticleJsImg />
    <div className="container">
      <ParticleJsText />
      {/* <HeaderText />
        <HeaderImg /> */}
    </div>
  </section >
  // </div>

);

export default FirstMain;
