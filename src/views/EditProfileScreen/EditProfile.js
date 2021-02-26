import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

import { selectSubscription, selectUser } from "../../features/userSlice";

import { avatar } from "../../Components/UI/NavBar/Avatar/Avatar";
import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";
import Plans from "./Plans/Plans";

import "react-toastify/dist/ReactToastify.css";
import "./EditProfile.css";

const EditProfile = () => {
  const user = useSelector(selectUser);
  const userSubcription = useSelector(selectSubscription);
  const history = useHistory();

  const homeBtnHandler = () => {
    !userSubcription
      ? toast.error("You need to be Subscribed")
      : history.push("/");
  };

  useEffect(() => {
    userSubcription
      ? toast.info(
          `Test Data values for Subscription Card number: 4242424242424242 Exp date: 04/24 Cvv: 424`,
          { autoClose: 60000 }
        )
      : toast.dark();
  }, [userSubcription]);

  return (
    <div className="EditProfile">
      <div className="Netflix__logo">
        <NetflixLogo />
      </div>
      <button className="EditProfile__signInBtn" onClick={homeBtnHandler}>
        Home
      </button>
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
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
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

export default EditProfile;
