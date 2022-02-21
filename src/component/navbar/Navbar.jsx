import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark navbar-fixed-top">
      <a href="#" className="logo navbar-brand">
        <b>Suman</b>Sourabh
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto navbar">
          <li className="nav-item">
            <a className="nav-link siz" href="#">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link siz" href="#">
              Project
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link siz" href="#">
              About Me
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link siz" href="#">
              <button className="contact"> Contact Me</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
