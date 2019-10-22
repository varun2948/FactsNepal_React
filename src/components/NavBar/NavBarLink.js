import React from "react";
import LinkItem from "./LinkItem";

const NavBarLink = () => (
  <nav className="navitems" id="nav-links">
    <ul className="menu-lists">
      <LinkItem path="/services" text="Services" id="dropdown" />
      <LinkItem path="/projects" text="Projects" />
      <LinkItem path="/facts" text="Facts" />
      <LinkItem path="/about" text="About" />
      <LinkItem path="/contact" text="Contact" />
    </ul>
  </nav>
);

export default NavBarLink;
