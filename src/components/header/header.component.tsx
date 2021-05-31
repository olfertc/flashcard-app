import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>
    <div className="options">
      <Link className="option" to="/matching">
        MATCHING
      </Link>
      <Link className="option" to="/quiz">
        QUIZ
      </Link>
    </div>
  </div>
);

export default Header;