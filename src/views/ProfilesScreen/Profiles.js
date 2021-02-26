import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { avatar, generator } from "../../Components/UI/NavBar/Avatar/Avatar";
import { selectSubscription } from "../../features/userSlice";

import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";

import "react-toastify/dist/ReactToastify.css";
import "./Profiles.css";

const avatar1 = generator.generateRandomAvatar();
const avatar2 = generator.generateRandomAvatar();

const Profiles = () => {
  const userSubcription = useSelector(selectSubscription);
  const history = useHistory();

  const homeBtnHandler = () => {
    !userSubcription
      ? toast.warn("You need to be Subscribed")
      : history.push("/");
  };

  return (
    <div className="profiles">
      <div className="Netflix__logo">
        <NetflixLogo />
      </div>
      <button className="EditProfile__signInBtn" onClick={homeBtnHandler}>
        Home
      </button>
      <div className="profiles__body">
        <h1>Who's watching?</h1>
        <div className="profiles__container">
          <div className="profiles__profile ">
            <img
              src={avatar}
              alt="active user avatar"
              onClick={() => toast.dark("This is the same profile BAKA!!")}
            />
            <h3
              className="profile-active"
              onClick={() => toast.dark("This is the same profile BAKA!!")}
            >
              Neo
            </h3>
          </div>
          <div className="profiles__profile  ">
            <img
              src={avatar1}
              alt="avatar"
              onClick={() =>
                toast.dark("I am too LAZY and UNinterested to implement this!")
              }
            />
            <h3
              onClick={() =>
                toast.dark("I am too LAZY and UNinterested to implement this!")
              }
            >
              Neon
            </h3>
          </div>
          <div className="profiles__profile ">
            <img
              src={avatar2}
              alt="avatar"
              onClick={() =>
                toast.dark("I am too LAZY and UNinterested to implement this!")
              }
            />
            <h3
              onClick={() =>
                toast.dark("I am too LAZY and UNinterested to implement this!")
              }
            >
              Nil
            </h3>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Profiles;
