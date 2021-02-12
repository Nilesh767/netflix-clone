import React from "react";

import "./SignUp.css";

const SignUp = () => {
  const register = (event) => {
    event.preventDefault();
  };

  const signIn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup__grey">New to Netflix?</span>
          <span className="signup__link" onClick={register}>
            {" "}
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
