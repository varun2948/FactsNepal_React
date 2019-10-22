import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ path, text }) => (
  <Link to={path} className="menu-items">
    {text}
  </Link>
);

export default LinkItem;
