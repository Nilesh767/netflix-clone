import React, { useRef, useState } from "react";
import { auth } from "../../Firebase/firebase";

import "./SignUp.css";

const SignUp = ({ emailData }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

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

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(nameRef);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  const submitHandler = (event) => {
    isSignUp ? register(event) : signIn(event);
  };

  return (
    <div className="signup">
      <form>
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        <input
          ref={emailRef}
          placeholder="Email Address"
          defaultValue={emailData}
          type="email"
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={submitHandler}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <h4>
          <span className="signup__grey">
            {isSignUp ? (
              <span className="emptySpan"></span>
            ) : (
              <span>New to Netflix?</span>
            )}
          </span>
          <span className="signup__link" onClick={signUpHandler}>
            {isSignUp ? <span>Sign In?</span> : <span>Sign Up Now.</span>}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
