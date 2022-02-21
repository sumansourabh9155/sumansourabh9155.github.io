import Navbar from "./component/navbar/Navbar";
import LandingPage from "./component/landingpage/LandingPage";
import Links from "./component/links/Links";
import Skills from "./component/skills/Skills";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Links />
      <Skills />
    </div>
  );
}

export default App;
