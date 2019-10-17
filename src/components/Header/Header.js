import React from "react";
import HeaderText from "./HeaderText";
import HeaderImg from "./HeaderImg";
import ParticleJsImg from "./ParticleJsImg";
import ParticleJsText from "./ParticleJsText";

const Header = () => (
  <section className="hero-image hero2">
    <ParticleJsImg />

    <div className="topsect">
      <div className="container">
        <div className="row">
          <ParticleJsText />
          {/* <HeaderText />
        <HeaderImg /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Header;
