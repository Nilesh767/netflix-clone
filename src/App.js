import React, { Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase/firebase";

import {
  login,
  logout,
  selectSubscription,
  selectUser,
} from "./features/userSlice";

import Aux from "./hoc/Auxiliary";
import Login from "./views/LoginScreen/Login";
import EditProfile from "./views/EditProfileScreen/EditProfile";
import Home from "./views/HomeScreen/Home";
import Profiles from "./views/Profiles/Profiles";

import "./App.css";

const App = () => {
  const user = useSelector(selectUser);
  const userSubcription = useSelector(selectSubscription);
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
      <Route>
        <Login path="/" />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  if (user) {
    routes = (
      <Switch>
        <Route path="/editProfile">
          <EditProfile />
        </Route>

        {userSubcription ? (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Profiles">
              <Profiles />
            </Route>
          </Switch>
        ) : (
          <Redirect to="/editProfile" />
        )}
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
