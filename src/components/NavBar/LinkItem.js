import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ path, text, id, className }) => (
  <Link to={path} className={className} id={id}>
    {text}
  </Link>
);

export default LinkItem;
