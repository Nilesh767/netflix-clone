import React from "react";

import { generator } from "../../Components/UI/NavBar/Avatar/Avatar";
import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";

import "./Profiles.css";

const avatar1 = generator.generateRandomAvatar();
const avatar2 = generator.generateRandomAvatar();
const avatar3 = generator.generateRandomAvatar();

const Profiles = () => {
  return (
    <div className="profiles">
      <div className="Netflix__logo">
        <NetflixLogo />
      </div>
      <div className="profiles__body">
        <h1>Who's watching?</h1>
        <div className="profiles__container">
          <div className="profiles__profile ">
            <img src={avatar1} alt="avatar" />
            <h3>Neo</h3>
          </div>
          <div className="profiles__profile  ">
            <img src={avatar2} alt="avatar" />
            <h3>Neon</h3>
          </div>
          <div className="profiles__profile ">
            <img src={avatar3} alt="avatar" />
            <h3>Nil</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
