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
import AllFactsPage from "../pages/AllFactsPage";
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

        <div className="background-wrap">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/* <Route path="/allfacts" component={AllFactsPage} /> */}
              {/* <Route path="/about" component={AboutPage} /> */}
              {/* <Route path="/service" component={ServicePage} /> */}
              {/* <Route path="/works" component={WorksPage} /> */}
              {/* <Route path="/contact" component={ContactPage} /> */}
            </Switch>
            {/* <Footer /> */}
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
