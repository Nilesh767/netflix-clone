import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase/firebase";

import { login, logout, selectUser } from "./features/userSlice";

import Aux from "./hoc/Auxiliary";
import Home from "./Screens/HomeScreen/Home";
import Login from "./Screens/LoginScreen/Login";

import "./App.css";

const EditProfile = React.lazy(() => {
  return import("./Screens/EditProfileScreen/EditProfile");
});

const Profiles = React.lazy(() => {
  return import("./Screens/Profiles/Profiles");
});

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      userAuth
        ? dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          )
        : dispatch(logout());
    });
    return unSubscribe;
  }, [dispatch]);

  let routes = (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );

  if (user) {
    routes = (
      <Switch>
        <Route path="/editProfile">
          <EditProfile />
        </Route>
        <Route path="/profiles">
          <Profiles />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="app">
      <Aux>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Aux>
    </div>
  );
};

export default App;
