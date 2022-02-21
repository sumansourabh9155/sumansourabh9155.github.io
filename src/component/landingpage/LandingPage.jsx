import React from "react";

function LandingPage() {
  return (
    <div className="hero">
      <svg
        width="95"
        viewBox="0 0 68 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.3333 27.0417L42.5 4.91666V17.2083C8.63314 17.2083 4.72597 41.0001 5.66664 54.0833C7.08897 47.4827 7.74914 36.875 42.5 36.875V49.1667L62.3333 27.0417Z"
          stroke="#E1C3DE"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h1 className="intro bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
        Web Devloper
      </h1>
      <h1 className="intro"> and</h1>
      <br />
      <h1 className="intro bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
        UI / UX
      </h1>
      <h1 className="intro"> Desiner</h1>

      <div className="scrolldown">
        <p>SCORLLDOWN</p>
        <svg
          width="13"
          height="116"
          viewBox="0 0 17 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="9.99968"
            y1="0.0360302"
            x2="7.99968"
            y2="111.036"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M0.999981 96L8.3612 113.25L15.7224 96"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
}
export default LandingPage;
