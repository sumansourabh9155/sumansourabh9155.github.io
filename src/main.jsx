import "./main.css";
import "../src/component/navbar/Navbar.css";
import "../src/component/links/Link.css";
import "../src/component/skills/Skills.css";
import "../src/component/landingpage/LandingPage.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div className="glassy">
    <App />
  </div>,
  document.getElementById("root")
);
