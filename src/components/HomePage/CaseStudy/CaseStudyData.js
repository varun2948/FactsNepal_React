import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
var moment = require("moment");

class CaseStudyData extends Component {
  render() {
    const { casestudy } = this.props;
    return (
      <div>
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
                          <p className="factsNepal-para">{data.description}</p>
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
                          <p className="factsNepal-para">{data.description}</p>
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
    );
  }
}

export default CaseStudyData;