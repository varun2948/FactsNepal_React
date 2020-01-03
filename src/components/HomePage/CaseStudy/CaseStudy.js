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
  constructor(props) {
    super(props);
    this.state = {
      casestudy: []
    };
  }
  componentDidMount() {
    Promise.all([
      axios({
        method: "GET",
        url: `${process.env.API_URL}api/casestudy`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      })
    ]).then(response => {
      console.log(response[0].data.collaborators);
      const sliced2Collaborators = response[0].data.collaborators.slice(0, 2);
      this.setState({
        casestudy: sliced2Collaborators
      });
      // console.log(this.state.casestudy, "cs");
    });
  }

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
