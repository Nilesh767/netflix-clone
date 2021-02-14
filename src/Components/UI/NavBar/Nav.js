import React, { useEffect, useState } from "react";
import NetflixLogo from "./Logo/NetflixLogo";

import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 150 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <div className="nav__logo">
          <NetflixLogo />
        </div>
      </div>
    </div>
  );
}

export default Nav;
