import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import CaseStudyData from "../components/HomePage/CaseStudy/CaseStudyData";
import axios from "axios";

class Projects extends Component {
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
      <React.Fragment>
        <NavBar noBg={false} />
        <section className="banner project-banner">
          <div className="container">
            <div className="proj-banner-wrap">
              <div className="row">
                <div className="order-2 order-sm-2 order-md-1 col-md-6">
                  <div className="col-wrap">
                      <span className="sec-caption">Projects</span>
                      <h1 className="headline1">We find solutions.</h1>
                      <h5 className="headline5">
                        Offering total research solutions, customised according
                        to the client’s needs
                      </h5>
                  </div>
                </div>
                <div className="order-1 order-sm-1 order-md-2 col-md-6">
                  <div className="col-wrap">
                    <figure>
                      <img src="./img/updated-organized.svg" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study pdt-132 pdb-128">
          <div className="container">
            <CaseStudyData casestudy={casestudy} />
          </div>
        </section>
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
