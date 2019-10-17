import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Fact from "../Fact/Fact";
import Question from "../Poll/Question";
import FactList from '../FactLists/FactList';
import Answer from "../Poll/Answer";

const headerData = {
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
    "X-Requested-With": "XMLHttpRequest"
  }
};

class FactsPoll extends Component {
  state = {
    facts: [],
    publicPoll: [],
    pollResultApi: [],
    likeUpdated: false,
    pollUpdated: false
  };

  componentDidMount() {
    Promise.all([
      axios.get(`${process.env.API_URL}/api/factapi`),
      axios.get(`${process.env.API_URL}/api/publicpoll`),
      axios.get(`${process.env.API_URL}/api/pollresultapi`)
    ]).then(response => {
      const newFacts = response[0].data[0].home.map(fact => ({
        ...fact,
        likeUpdated: false
      }));

      response[0].data[0].home = newFacts;

      this.setState({
        facts: response[0].data,
        publicPoll: response[1].data,
        pollResultApi: response[2].data
      });

    });

  }

  pollOptionClick = (questionId, optionId) => {
    if (!this.state.pollUpdated) {
      const pollresult = {
        method: "POST",
        name: questionId,
        type: "json",
        data: {
          poll_id: questionId,
          option_id: optionId
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      axios
        .post(
          `${process.env.API_URL}/api/publicpollresult`,
          pollresult,
          headerData
        )
        .then(response => {
          const updatedPoll = [...this.state.pollResultApi];
          const filteredItem = updatedPoll.find(item => item.id === optionId);
          filteredItem.uv += 1;
          this.setState({
            pollResultApi: updatedPoll,
            pollUpdated: true
          });
        })
        .catch(error => console.log(error));
    }
  };

  handleLike = (id, sclick) => {
    const fact = this.state.facts[0].home.find(fact => fact.id === id);
    if (!fact.likeUpdated) {
      const postData = {
        method: "POST",
        name: id,
        type: "json",
        data: {
          post_id: id,
          post_like: 1
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      axios
        .post(`${process.env.API_URL}/api/POST_like`, postData, headerData)
        .then(response => {
          const updatedFact = [...this.state.facts];
          if (sclick == undefined) {

            updatedFact[0].home = [...this.state.facts[0].home];
            updatedFact[0].home[0].like += 1;
            updatedFact[0].home[0].likeUpdated = true;
          }
          else {
            const list_id = [this.state.facts[0].home.findIndex(x => x.id === id)];

            updatedFact[0].home = [...this.state.facts[0].home];

            updatedFact[0].home[list_id].like += 1
            updatedFact[0].home[list_id].likeUpdated = true;

          }
          this.setState({
            facts: updatedFact,
            // likeUpdated: true
          });
        })
        .catch(err => console.log("handleLike err", err));
    }
  };

  render() {
    const {
      state: { facts, publicPoll, pollResultApi, likeUpdated, pollUpdated },
      handleLike,
      pollOptionClick
    } = this;

    let description, question;

    if (facts[0] && facts[0].home && facts[0].home[0]) {
      description = (

        <Fact
          fact={facts[0].home[0]}
          handleLike={handleLike}
          likeUpdated={facts[0].home[0].likeUpdated}
        />
      );
    } else {
      description = <h2 style={{ color: "#b43046" }}>Loading...</h2>;
    }

    if (publicPoll.length > 0) {
      question = (
        <Question
          pollQuestion={publicPoll[0]}
          pollOptionClick={pollOptionClick}
        />
      );
    } else {
      question = <h2 style={{ color: "#b43046" }}>Loading...</h2>;
    }

    return (
      <section className="section-padding-y fact-poll">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-8 relative">
              <Fade bottom duration={1400} delay={1000} distance={"50px"}>
                <div className="factsod">
                  <div className="factsod__header">
                    <h5>Facts Of The Day</h5>
                  </div>
                  <form>
                    <div className="factsod__wrapper">
                      <Link className="viewall no-decoration" to="/allfacts">
                        <span>View All</span>
                        <i className="la la-caret-right" />
                      </Link>
                      {description}
                    </div>
                  </form>
                </div>
              </Fade>
            </div>
            <div className="col-md-5 col-lg-4 ">
              {console.log(facts)}
              {<FactList fact={facts[0]} handleLike={handleLike}
                likeUpdated={facts} />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FactsPoll;
