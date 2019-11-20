import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "../static/css/line-awesome.min.css";
// import "pace-js";
// import "pace-js/themes/red/pace-theme-minimal.css";
// import "./scss/style.scss";
// import "../../scss/style.scss";

// components
import Navbar from "../components/NavBar/NavBar";
// pages
import HomePage from "../pages/HomePage";
import PublicPoll from "../pages/PublicPoll";
import FactsPage from "../pages/FactsPage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import WorksPage from "../pages/WorksPage";
import ContactPage from "../pages/ContactPage";


const Footer = () => (<h1> FOOTER </h1>);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/publicpoll" component={PublicPoll} />
            <Route path="/facts/:number" component={FactsPage} />
            {/* <Route path="/service" component={ServicePage} /> */}
            {/* <Route path="/works" component={WorksPage} /> */}
            {/* <Route path="/contact" component={ContactPage} /> */}
          </Switch>
          {/* <Footer /> */}
        </Router>

      </div>
    );
  }
}
export default App;
