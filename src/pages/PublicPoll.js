import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import axios from "axios";

class PublicPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radiobutton: true,
      selected: false,
      radio_value: "",
      polloftheday: []
    };
  }

  componentDidMount() {}
  componentWillMount() {
    const { poll_data } = this.props.location;
    if (poll_data) {
      window.localStorage.setItem("publicpoll", JSON.stringify(poll_data));
      // console.log()
    }
    var daypoll =
      localStorage.getItem("publicpoll") &&
      JSON.parse(localStorage.getItem("publicpoll"));

    this.setState({ polloftheday: daypoll });
  }

  // componentWillUnmount() {
  //     localStorage.clear();
  // }
  handleSubmitClick = event => {
    // alert('Done');
    event.preventDefault();
    const pollsubmit = {
      pollquestion_id: this.state.polloftheday.id,
      answer_id: this.state.radio_value
    };
    axios
      .post(`${process.env.API_URL}/api/publicpollstore`, pollsubmit)
      .then(response => {
        this.props.history.push({
          pathname: `/publicpollresult/${this.state.radio_value}`,
          data: response.data.result_data[0] // your data array of objects
        });
      })
      .catch(err => console.log("handleLike err", err));
  };

  handleSelect = e => {
    // console.log(e.currentTarget.value);
    this.setState({ selected: true, radio_value: e.currentTarget.value });
    // console.log(this.state.radio_value);
  };
  render() {
    const { selected, polloftheday } = this.state;

    return (
      <React.Fragment>
        <NavBar noBg={false} bgGrey={true} />
        {polloftheday && (
          <div className="banner-content banner-height bg-grey">
            <div className="container">
              <div className="publicpoll-wrap mrt-100">
                <div className="wrap-center">
                  <div className="title-wrap">
                    <span className="title-span span-14">Sports</span>
                    <h3 className="publicpoll-title">
                      {polloftheday.question}
                    </h3>
                    <div className="btn-wrap">
                      <button>{polloftheday.totalVotes} Votes</button>
                      <span className="title-date span-12">1 day ago</span>
                    </div>
                  </div>
                  <div className="publicpoll-group">
                    <form
                      action=""
                      onSubmit={this.handleSubmitClick}
                      className={`publicpoll-form ${
                        selected ? "publicpoll-form2" : ""
                      }`}
                    >
                      {polloftheday.options.map((data, key) => {
                        return (
                          <div
                            key={key}
                            className={`form-group inputform ${
                              this.state.radio_value == data.id ? "active" : ""
                            } `}
                          >
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                onSelect={this.handleSelect}
                                id={`customControlValidation${key}`}
                                name="radio-stacked"
                                required
                                onChange={this.handleSelect}
                                value={data.id}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={`customControlValidation${key}`}
                              >
                                {data.question}
                              </label>
                            </div>
                          </div>
                        );
                      })}
                      <button className="btn span-10">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default PublicPoll;
