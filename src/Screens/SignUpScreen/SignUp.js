import React, { useRef } from "react";
import { auth } from "../../Firebase/firebase";

import "./SignUp.css";

const SignUp = ({ emailData }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          placeholder="Email Address"
          defaultValue={emailData}
          type="email"
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
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
