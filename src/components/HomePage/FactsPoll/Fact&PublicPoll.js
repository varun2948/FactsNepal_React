import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import PublicPoll from "./PublicPoll";
import Moment from "react-moment";
var moment = require("moment");
import Particles from "react-particles-js";

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

    const fact_date = moment(factoftheday.public_date, "YYYY-MM-DD");
    return (
      <section className="general-info pdt-81 pdb-104">
        <div className="container">
          <div className="general-info-wrap">
            <div className="circle red-gradient sphere1"></div>
            <div className="circle pink-gradient sphere2"></div>
            <div className="circle orange-gradient sphere3"></div>
            <div className="circle orange-gradient sphere4"></div>
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
                                  <span className="sub-caption">
                                    {factoftheday.category_title}
                                  </span>
                                  <p className="body-para">
                                    {factoftheday.description}
                                  </p>
                                  <span className="sm-caption">
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
