import React from "react";
import HeaderText from "./MainText";
import HeaderImg from "./MainImg";
import ParticleJsImg from "./ParticleJsImg";
import ParticleJsText from "./ParticleJsText";

const FirstMain = () => (

  <section className="banner ">
    <ParticleJsImg />
    <div className="container">
      <ParticleJsText />
      {/* <HeaderText />
        <HeaderImg /> */}
    </div>
  </section >

);

export default FirstMain;
