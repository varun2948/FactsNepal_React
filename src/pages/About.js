import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <NavBar noBg={false} />
        <h1 style={{ textAlign: "center" }}>Comming Soon....</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
