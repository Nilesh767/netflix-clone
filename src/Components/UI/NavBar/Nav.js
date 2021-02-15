import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { auth } from "../../../Firebase/firebase";
import { avatar } from "./Avatar/Avatar";

import NetflixLogo from "./Logo/NetflixLogo";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__logo">
          <NetflixLogo />
        </div>
        <div className="nav__contents1">
          <ul className="nav__contents1-navItems">
            <li onClick={() => history.push("/")}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
          </ul>
        </div>
        <div className="nav__contents2">
          <div className="nav__contents2-profile" onClick={handleDropdown}>
            <div className="nav__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <ArrowDropDownIcon style={{ color: "#fff", size: 45 }} />
            {dropdown && (
              <div
                className="nav__account-dropdown"
                onMouseLeave={handleDropdown}
              >
                <ul className="nav__dropdown-profiles">
                  <li className="nav__dropdown-profile">
                    <img
                      src={avatar}
                      alt="avatar"
                      onClick={() => history.push("/editProfile")}
                    />
                    <p onClick={() => history.push("/editProfile")}>Neo</p>
                  </li>
                </ul>
                <div className="nav__dropdown-manage">
                  <p onClick={() => history.push("/profiles")}>
                    Manage Profiles
                  </p>
                </div>
                <ul className="nav__dropdown-account">
                  <li onClick={() => history.push("/editProfile")}>Account</li>
                  <li onClick={() => auth.signOut()}>Sign out of Netflix</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
