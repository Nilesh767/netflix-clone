import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

import { auth } from "../../../Firebase/firebase";

import { avatar } from "./Avatar/Avatar";
import NetflixLogo from "./Logo/NetflixLogo";

import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [input, setInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const inputEl = useRef(null);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      alert(
        "I am too lazy and uninterested to implement this! \n So... Get Rickrolled Kid!!!"
      );
      window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  };

  const searchClick = () => {
    setSearchOpen(true);
    setTimeout(() => {
      inputEl.current.focus();
    }, 300);
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
        <div className="nav__logo" onClick={() => history.push("/")}>
          <NetflixLogo />
        </div>
        <div className="nav__contents1">
          <ul className="nav__contents1-navItems">
            <li onClick={() => history.push("/")}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
          </ul>
        </div>
        <div className="nav__searchBar">
          <ul>
            <li
              className={`app__search mobile ${
                searchOpen || input ? "open" : ""
              }`}
              onClick={searchClick}
            >
              <SearchIcon
                style={{ fontSize: 20 }}
                className="app__searchIcon"
                onClick={searchClick}
              />
              <form>
                <input
                  type="search"
                  ref={inputEl}
                  onBlur={() => setSearchOpen(false)}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => handleSearch(e)}
                  placeholder="Search..."
                />
              </form>
            </li>
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
