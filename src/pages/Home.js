import React from "react";
import { Link } from "react-router-dom";

import "./styles/HomePage.css";
import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

function HomePage() {
  return (
    <React.Fragment>
      <div className="Home">
        <div className="container">
          <div className="Home__col col-12 col-md-14">
            <img src={confLogo} alt="ConfLogo" className="img-fluid mb-2"/>
            <h2>Print your badges</h2>
            <h3>The easiest way to manage your conference</h3>
            <Link className="btn btn-primary" to="/badges">
              Start
            </Link>
          </div>
        </div>
        <div className="Home__col d-none d-md-block col-md-8">
          <img src={astronauts} alt="ConfLogo" className="mg-fluid p-4" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
