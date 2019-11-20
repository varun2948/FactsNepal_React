import React, { Fragment } from "react";
import FactImg from "./FactImg";
import FactDetails from "./FactDetails";

const Fact = ({ fact, handleLike, likeUpdated }) => (
  <div>
    <FactImg image={fact.image} />
    <FactDetails
      fact={fact}
      handleLike={handleLike}
      likeUpdated={likeUpdated}
    />
  </div>
);

export default Fact;
