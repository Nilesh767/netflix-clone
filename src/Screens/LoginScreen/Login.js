import React, { useState } from "react";

import SignUp from "../SignUpScreen/SignUp";

import "./Login.css";

const Login = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="login">
      <div className="login__bg">
        <div className="login__gradient" />
        <img
          className="login__logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix Logo"
        />
        <button className="login__signInBtn" onClick={() => setSignedIn(true)}>
          Sign In
        </button>
        {signedIn ? (
          <SignUp />
        ) : (
          <div className="login__body">
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="login__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button className="login__getStarted">
                    Get Started &gt;
                  </button>
                </form>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
