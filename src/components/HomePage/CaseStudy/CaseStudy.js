import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Moment from "react-moment";
var moment = require("moment");

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
          {casestudy &&
            casestudy.map((data, key) => {
              return (
                // <React.Fragment>
                key % 2 != 0 ? (
                  <div className="case-study-wrap pdb-130">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="case-study-image">
                          <figure className="figure-case-img">
                            <img src={data.image} alt="" />
                          </figure>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="case-study-content">
                          <div className="case-study-content-wrap">
                            <span className="date-time">
                              <Moment
                                date={data.issued_date}
                                format="Do MMMM YYYY"
                              />
                            </span>
                            <h3 className="factsNepal-title">{data.title}</h3>
                            <p className="factsNepal-para">
                              {data.description}
                            </p>
                            {/* <span className="caption">Funded by</span> */}
                            <div className="img-wrap">
                              {data &&
                                data.multiple_images &&
                                data.multiple_images.map((collab, key) => {
                                  return (
                                    <img
                                      className="sub-span-img"
                                      src={collab.thumbnailImageUrl}
                                      alt=""
                                    />
                                  );
                                })}
                            </div>
                            <Link
                              className="btn-case"
                              to={{
                                pathname: `/casestudy/${data.id}`
                              }}
                            >
                              <span>Read Case Study</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="case-study-wrap">
                    <div className="row">
                      <div className="order-2 order-sm-2 order-md-1 col-md-6">
                        <div className="case-study-content">
                          <div className="case-study-content-wrap">
                            <span className="date-time">
                              <Moment
                                date={data.issued_date}
                                format="Do MMMM YYYY"
                              />
                            </span>
                            <h3 className="factsNepal-title">{data.title}</h3>
                            <p className="factsNepal-para">
                              {data.description}
                            </p>
                            <div className="logo-wrap">
                              <div className="logo-mid">
                                {data &&
                                  data.multiple_images &&
                                  data.multiple_images.map((collab, key) => {
                                    return (
                                      <img
                                        src={collab.thumbnailImageUrl}
                                        alt=""
                                      />
                                    );
                                  })}
                              </div>
                            </div>
                            <Link
                              className="btn-case"
                              to={{
                                pathname: `/casestudy/${data.id}`
                                // factid: data
                              }}
                            >
                              <span>Read Case Study</span>
                            </Link>
                            {/* <button className="btn-case">
                              <span>Read Case Study</span>
                            </button> */}
                          </div>
                        </div>
                      </div>

                      <div className="order-1 order-sm-1 order-md-2 col-md-6">
                        <div className="case-study-image">
                          <figure className="figure-case-img">
                            <img src={data.image} alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                )
                // </React.Fragment>
              );
            })}
        </div>
      </section>
    );
  }
}

export default CaseStudy;
