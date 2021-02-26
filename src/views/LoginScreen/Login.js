import React, { useState } from "react";
import NetflixLogo from "../../Components/UI/NavBar/Logo/NetflixLogo";

import SignUp from "./SignUpScreen/SignUp";

import "./Login.css";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [emailData, setEmailData] = useState("");

  const signInHandler = () => {
    setSignIn(true);
  };

  return (
    <div className="login">
      <div className="login__bg">
        <div className="login__gradient" />
        <div className="login__logo">
          <NetflixLogo />
        </div>
        <button className="login__signInBtn" onClick={signInHandler}>
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
                    onClick={signInHandler}
                  >
                    Get Started &gt;
                  </button>
                </form>
              </div>
            </>
          </div>
        )}
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

export default Login;
