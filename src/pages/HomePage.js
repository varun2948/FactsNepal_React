import React, { Component } from "react";
import FactsPublicPoll from "../components/HomePage/FactsPoll/Fact&PublicPoll";
import Services from "../components/HomePage/Services/Services";
import CaseStudy from "../components/HomePage/CaseStudy/CaseStudy";
import GeographicalCoverage from "../components/HomePage/GeographicalCoverage/GeographicalCoverage";
import ResourcesBooks from "../components/HomePage/ResourcesBooks/ResourcesBooks";
import Testimonials from "../components/Testimonials/Testimonials";
import MobileAppDownloads from "../components/HomePage/MobileAppDownloads/MobileAppDownloads";
import FirstMain from "../components/HomePage/MainFirstContent/FirstMain";
import Trusted from "../components/HomePage/Trusted/Trusted";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="Scrollreveal">
          {/* <div className="background-wrap"> */}
          <FirstMain />
          {/* </div> */}
          <Trusted />
          <Services />
          <FactsPublicPoll />
          <CaseStudy />
          <GeographicalCoverage />
          <ResourcesBooks />
          <Testimonials />
          <MobileAppDownloads />
          <Footer />
          {/* <Footer /> */}
          {/* <Initiatives />
        <HappyClients />
        <Footer /> */}
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
