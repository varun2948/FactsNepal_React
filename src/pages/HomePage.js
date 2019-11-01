import React, { Component } from "react";
import FactsPoll from "../components/FactsPoll/FactsPoll";
import Services from "../components/Services/Services";
import Initiatives from "../components/Initiatives/Initiatives";
import HappyClients from "../components/HappyClients/HappyClients";
import Footer from "../components/Footer/Footer";
import FirstMain from "../components/MainFirstContent/FirstMain";
import Trusted from "../components/Trusted/Trusted";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="Scrollreveal">
        <FirstMain />
        <Trusted />
        <Services />
        {/* <FactsPoll />
        <Services />
        <Initiatives />
        <HappyClients />
        <Footer /> */}
      </div>
    );
  }
}
export default HomePage;
