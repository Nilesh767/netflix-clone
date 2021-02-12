import React from "react";

import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__bg">
        <div className="loginScreen__gradient" />
        <img
          className="loginScreen__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix Logo"
        />
        <button className="loginScreen_signInBtn">Sign In</button>
        <div className="loginScreen__body">
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button className="loginScreen__getStarted">Get Started &gt;</button>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
