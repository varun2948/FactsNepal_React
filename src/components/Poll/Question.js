import React from "react";

const Question = ({ pollQuestion, pollOptionClick }) => (
  <form>
    <div>
      <div className="pp__wrp text-center">
        <h5 className="mb-5">{pollQuestion.question}</h5>
        <ul className="options">
          {pollQuestion.options.map((opt, i) => (
            <input
              key={i}
              className="btn btn-primary btn-block"
              data-optionid={opt.id}
              // data-id={i}
              data-questionid={opt.question_id}
              type="button"
              value={opt.question}
              onClick={() => pollOptionClick(opt.question_id, opt.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  </form>
);

export default Question;
