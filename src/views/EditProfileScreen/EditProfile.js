import React from "react";
import { useSelector } from "react-redux";

import { selectSubscription, selectUser } from "../../features/userSlice";
import { auth } from "../../Firebase/firebase";

import "./EditProfile.css";
import { avatar } from "../../Components/UI/NavBar/Avatar/Avatar";
import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";
import Plans from "./Plans/Plans";

const EditProfile = () => {
  const user = useSelector(selectUser);
  const userSubcription = useSelector(selectSubscription);

  return (
    <div className="EditProfile">
      <div className="Netflix__logo">
        <NetflixLogo />
      </div>
      <div className="EditProfile__body">
        <h1>Edit Profile</h1>
        <div className="EditProfile__info">
          <img src={avatar} alt="Avatar" />
          <div className="EditProfile__details">
            <h2>{user.email}</h2>
            <div className="EditProfile__plans">
              <h3>Plans: {userSubcription ? userSubcription : "None"}</h3>
              <Plans />
              <button
                className="EditProfile__signOut"
                type="submit"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
