import axios from "axios";
import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import CaseStudyData from "./CaseStudyData";


const headerData = {
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
        "X-Requested-With": "XMLHttpRequest"
    }
};

class CaseStudy extends Component {
    state = {};

  render() {
    const { casestudy } = this.state;
    return (
      <section className="case-study pdt-120 pdb-150">
        <div className="container">
          <CaseStudyData casestudy={casestudy} />
        </div>
      </section>
    );
  }
}

export default CaseStudy;