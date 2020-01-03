import React, { Component } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";

import Fade from "react-reveal/Fade";

const PublicPoll = React.forwardRef((props, ref) => {
  const { publicPoll } = props;
  return (
    <div className="col-12 col-md-5" id="public-poll-info-div">
      <div ref={ref} class="test"></div>
      {publicPoll && publicPoll[0] && (
        <div className="public-poll-info-wrap">
          <h3 className="factsNepal-title">Public Poll</h3>
          <Link
            className="poll-link"
            to={{
              pathname: `/publicpoll/${publicPoll[0].id}`,
              poll_data: publicPoll[0]
            }}
          >
            <div className="public-poll-info">
              <div className="public-poll-flexcenter">
                <span className="title">PRODUCT</span>
                <h6>{publicPoll[0].question}</h6>
                <span className="date-time">
                  <TimeAgo date={publicPoll[0].publishedDate} />
                </span>
                {/* <span className="date-time">1 day ago</span> */}
                <span className="btn-vote">
                  {publicPoll[0].totalVotes} Votes
                </span>
                <div
                  className="grid-button"
                  style={{
                    lineHeight: "1.5",
                    color: "#ffffff",
                    background: "#9F2F35",
                    display: "inline-block",
                    cursor: "pointer",
                    textAlign: "center",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "#9F2F35",
                    marginLeft: "27px"
                  }}
                >
                  <div className="btn-wrap">
                    <button className="btn-primary">
                      <span>Vote</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
});

export default PublicPoll;
