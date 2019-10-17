import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ path, text }) => (
  <Link to={path} className=" no-decoration menu__item menu__item--active">
    {text}
  </Link>
);

export default LinkItem;
