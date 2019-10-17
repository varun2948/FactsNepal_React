import React from "react";
import Fade from "react-reveal/Fade";
import PollResult from "./PollResult";

const Answer = ({ publicPollQuestion, pollResult }) => (
  <div>
    <div className="pp__wrp text-center">
      <Fade bottom duration={1000} delay={500} distance={"40px"}>
        <h5 className="mb-5">{publicPollQuestion.question}</h5>
        <PollResult data={pollResult} />
      </Fade>
    </div>
  </div>
);

export default Answer;
