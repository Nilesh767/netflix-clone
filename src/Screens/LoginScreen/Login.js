import React, { useState } from "react";
import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";

import SignUp from "../SignUpScreen/SignUp";

import "./Login.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [emailData, setEmailData] = useState("");

  return (
    <div className="login">
      <div className="login__bg">
        <div className="login__gradient" />
        <div className="login__logo">
          <NetflixLogo  />
        </div>
        <button
          className="login__signInBtn"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        {signIn ? (
          <SignUp emailData={emailData} />
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
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmailData(e.target.value)}
                  />
                  <button
                    className="login__getStarted"
                    type="submit"
                    onClick={() => setSignIn(true)}
                  >
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
