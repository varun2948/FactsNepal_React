import React from "react";
import TimeAgo from "timeago-react";
import FactShare from "./FactShare";


const FactsDetails = ({ fact, handleLike, likeUpdated }) => (
  <div className="factsod__detail">
    <h5>{fact.description}</h5>
    <div className="cholder">
      <div className="factsod__counts">
        <span className="badge education"> {fact.category_title}</span>
        <span className="time">
          <i className="la la-calendar-o" />

          <span>
            <TimeAgo datetime={fact.updated_at} />
          </span>
        </span>
        <span
          id={fact.id}
          className="likecount"
          style={likeUpdated ? { background: "#fde2e4" } : { background: null }}
          onClick={() => handleLike(fact.id)}
        >
          <i
            style={likeUpdated ? { color: "#a93c46" } : { color: "black" }}
            className="la la-thumbs-o-up"
          />{" "}
          <span> {fact.like}</span>
        </span>
      </div>
      <FactShare />
    </div>
  </div>
);

export default FactsDetails;
