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
                <div className="case-study-wrap pdt-117">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="case-study-image">
                        <figure className="figure-case-img left-img-sphere">
                            <img class="bg-case orange" src="./img/IMAGE-shape2.svg" />
                            <img className="bg-case pink" src="./img/IMAGE-shape4.svg" />
                            <img className="bg-case sm-pink" src="./img/IMAGE-shape1.svg" />
                            <img className="bg-case sm-orange" src="./img/IMAGE-shape3.svg" />
                            <img src={data.image} alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="case-study-content">
                        <div className="case-study-content-wrap">
                          <span className="sub-caption">
                            <Moment
                              date={data.issued_date}
                              format="Do MMMM YYYY"
                            />
                          </span>
                          <h3 className="headline2">{data.title}</h3>
                          <p className="body-para">{data.description}</p>
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
                            to={{
                              pathname: `/casestudy/${data.id}`
                            }}
                          >
                            <button className="btn-case">
                              Read Case Study
                            </button>
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
                          <span className="sub-caption">
                            <Moment
                              date={data.issued_date}
                              format="Do MMMM YYYY"
                            />
                          </span>
                          <h3 className="headline2">{data.title}</h3>
                          <p className="body-para">{data.description}</p>
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
                            to={{
                              pathname: `/casestudy/${data.id}`
                              // factid: data
                            }}
                          >
                            <button className="btn-case">
                              Read Case Study
                            </button>
                          </Link>
                          {/* <button className="btn-case">
                              <span>Read Case Study</span>
                            </button> */}
                        </div>
                      </div>
                    </div>

                    <div className="order-1 order-sm-1 order-md-2 col-md-6">
                      <div className="case-study-image">
                        <figure className="figure-case-img right-img-sphere">
                          <img class="bg-case orange" src="./img/IMAGE-shape2.svg" />
                          <img className="bg-case pink" src="./img/IMAGE-shape4.svg" />
                          <img className="bg-case sm-pink" src="./img/IMAGE-shape1.svg" />
                          <img className="bg-case sm-orange" src="./img/IMAGE-shape3.svg" />
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
