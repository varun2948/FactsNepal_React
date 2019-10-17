import React from "react";
import LinkItem from "./LinkItem";

const NavBarLink = () => (
  <nav className="menu flex ml-a">
    <LinkItem path="/" text="Home" />
    <LinkItem path="/about" text="About" />
    <LinkItem path="/service" text="Services" />
    <LinkItem path="/works" text="Works" />
    <LinkItem path="/contact" text="Contact" />
    <div className="nav__hamburger none">
      <i className="la la-bars" />
    </div>
  </nav>
);

export default NavBarLink;
