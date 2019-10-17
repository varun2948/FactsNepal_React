import React, { Component } from "react";
import axios from "axios";
import Fact from "../components/Fact/Fact";

const headerData = {
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": "TuJoRzMGXIzBhy3OH8JJXFmoegsooPSCB5dnw5q4",
    "X-Requested-With": "XMLHttpRequest"
  }
};

export default class AllFactsPage extends Component {
  state = {
    facts: []
  };

  componentDidMount() {
    axios.get(`${process.env.API_URL}/api/factapi`).then(response => {
      const newFacts = response.data[0].home.map(fact => ({
        ...fact,
        likeUpdated: false
      }));
      this.setState({
        facts: newFacts
      });
      console.log("fact State", this.state.facts);
    });
  }

  handleLike = id => {
    const fact = this.state.facts.find(fact => fact.id === id);
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
          const updatedFacts = [...this.state.facts];
          const filteredFact = updatedFacts.find(fact => fact.id === id);
          filteredFact.like += 1;
          filteredFact.likeUpdated = true;
          this.setState({
            facts: updatedFacts
          });
        })
        .catch(err => console.log("handleLike err", err));
    }
  };

  render() {
    const {
      state: { facts },
      handleLike
    } = this;

    return (
      <div className="col-md-8 offset-md-2 relative allfacts">
        {facts.map((fact, index) => (
          <div
            className="factsod"
            style={
              facts.length - 1 === index
                ? { borderRadius: "8px" }
                : { marginBottom: "16px", borderRadius: "8px" }
            }
            key={fact.id}
          >
            <Fact
              fact={fact}
              handleLike={handleLike}
              likeUpdated={fact.likeUpdated}
            />
          </div>
        ))}
      </div>
    );
  }
}
