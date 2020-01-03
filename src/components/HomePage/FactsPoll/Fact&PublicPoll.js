import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import PublicPoll from "./PublicPoll";
import Moment from "react-moment";
var moment = require("moment");

const headerData = {
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
    "X-Requested-With": "XMLHttpRequest"
  }
};

class FactsPublicPoll extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = {
      facts: [],
      factoftheday: [],
      publicPoll: [],
      pollResultApi: [],
      likeUpdated: false,
      pollUpdated: false
    };
  }

  componentDidMount() {
    console.log(this.factscard.clientHeight, "ref");

    Promise.all([
      axios.post(`${process.env.API_URL}api/factapi`),
      axios.get(`${process.env.API_URL}api/publicpoll_web`)
      // axios.get(`${process.env.API_URL}/api/pollresultapi`)
    ]).then(response => {
      const newFacts = response[0].data[0].home.data.map(fact => ({
        ...fact,
        // ...factoftheday,
        likeUpdated: false
      }));

      response[0].data[0].home.data = newFacts;

      this.setState({
        facts: response[0].data,
        factoftheday: response[0].data[0].home.data[0],
        publicPoll: response[1].data.publicpoll
      });
    });
  }

  render() {
    const {
      state: { facts, factoftheday, publicPoll }
    } = this;
    var last = facts[facts.length - 1];
    console.log(last);
    // const {
    //   state: { facts, publicPoll, pollResultApi, likeUpdated, pollUpdated },
    //   handleLike,
    //   pollOptionClick
    // } = this;

    // let description, question;

    // if (facts[0] && facts[0].home && facts[0].home[0]) {
    //   description = (

    //     <Fact
    //       fact={facts[0].home[0]}
    //       handleLike={handleLike}
    //       likeUpdated={facts[0].home[0].likeUpdated}
    //     />
    //   );
    // } else {
    //   description = <h2 style={{ color: "#b43046" }}>Loading...</h2>;
    // }

    // if (publicPoll.length > 0) {
    //   question = (
    //     <Question
    //       pollQuestion={publicPoll[0]}
    //       pollOptionClick={pollOptionClick}
    //     />
    //   );
    // } else {
    //   question = <h2 style={{ color: "#b43046" }}>Loading...</h2>;
    // }
    console.log(factoftheday.public_date, "publicPoll");

    const fact_date = moment(factoftheday.public_date, "YYYY-MM-DD");
    console.log(this.childRef.current, "childref");
    return (
      //     <section className="section-padding-y fact-poll">
      //     <div className="container-fluid">
      //       <div className="row">
      //         <div className="col-md-7 col-lg-8 relative">
      //           <Fade bottom duration={1400} delay={1000} distance={"50px"}>
      //             <div className="factsod">
      //               <div className="factsod__header">
      //                 <h5>Facts Of The Day</h5>
      //               </div>
      //               <form>
      //                 <div className="factsod__wrapper">
      //                   <Link className="viewall no-decoration" to="/allfacts">
      //                     <span>View All</span>
      //                     <i className="la la-caret-right" />
      //                   </Link>
      //                   {description}
      //                 </div>
      //               </form>
      //             </div>
      //           </Fade>
      //         </div>
      //         <div className="col-md-5 col-lg-4 ">
      //           {console.log(facts)}
      //           {<FactList fact={facts[0]} handleLike={handleLike}
      //             likeUpdated={facts} />}
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      <section className="general-info pdt-90 pdb-120">
        <div className="container">
          <div className="general-info-wrap">
            <Fade bottom duration={1100} delay={500} distance={"50px"}>
              <div className="row">
                <div className="col-12 col-md-7" id="fact-info-div">
                  <div
                    className="fact-info-wrap"
                    ref={ref => {
                      this.factscard = ref;
                    }}
                  >
                    <h3 className="factsNepal-title">Fact of the day</h3>
                    <Link
                      className="poll-link"
                      to={{
                        pathname: `/facts/${factoftheday.id}`,
                        facts_data: factoftheday
                      }}
                    >
                      <div className="fact-info">
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <div className="fact-info-img">
                              <figure>
                                <img src={factoftheday.image} alt="fact-img" />
                              </figure>
                            </div>
                          </div>
                          <div className="col-12 col-md-8">
                            <div className="fact-info-content">
                              <div className="fact-info-content-wrap">
                                <div className="center">
                                  <span className="title">
                                    {factoftheday.category_title}
                                  </span>
                                  <p className="factsNepal-para">
                                    {factoftheday.description}
                                  </p>
                                  <span className="date-time">
                                    {
                                      <Moment
                                        date={fact_date}
                                        format="Do MMMM YYYY"
                                      />
                                    }
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <PublicPoll
                  ref={this.childRef}
                  publicPoll={publicPoll}
                  Link={Link}
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}

export default FactsPublicPoll;
