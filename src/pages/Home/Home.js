import React from "react";
// import { Grid } from "@material-ui/core";

import "./Home.css";
// import Linkedin from "../Home/img/linkedin.png";
// import Github from "../Home/img/github.png";
// import Photo from "./photo.png";
import Profile from "./profile.JPG";

function Home() {
  return (
    <div className="grid">
      <div className="left">
        Muhammad Rizqi Az Zayyad
        <p className="job">Informatics Student 👨‍💻</p>
        <div className="grid-media">
          <a
            href="https://www.linkedin.com/in/muhammad-rizqi-az-zayyad-3209a6199/"
            target="_blank"
          >
            <div className="job card">
              {/* <img src={Linkedin} /> */}
              Linkedin
            </div>
          </a>
          <a href="https://github.com/rizqizyd/" target="_blank">
            <div className="job card">
              {/* <img src={Github} /> */}
              Github
            </div>
          </a>
        </div>
      </div>
      <div className="right">
        <img className="image" src={Profile} alt="profile" />
      </div>
    </div>
  );
}

export default Home;
