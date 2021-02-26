import React, { Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import db, { auth } from "./Firebase/firebase";

import { login, logout, selectUser, subbed } from "./features/userSlice";

import Aux from "./hoc/Auxiliary";
import Login from "./views/LoginScreen/Login";
import EditProfile from "./views/EditProfileScreen/EditProfile";
import Home from "./views/HomeScreen/Home";
import Profiles from "./views/ProfilesScreen/Profiles";
import WatchList from "./views/WatchListScreen/WatchList";

import "./App.css";

const App = () => {
  const [subscription, setSubcription] = useState(null);
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

  useEffect(() => {
    db.collection("customers")
      .doc(user?.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscriptions) => {
          setSubcription({
            role: subscriptions.data().role,
            current_period_end: subscriptions.data().current_period_end.seconds,
            current_period_start: subscriptions.data().current_period_start
              .seconds,
          });
        });
      });
  }, [user?.uid]);

  useEffect(() => {
    let userSub;
    subscription != null
      ? (userSub = dispatch(subbed(subscription.role)))
      : (userSub = dispatch(subbed(null)));
    return userSub;
  }, [dispatch, subscription]);

  let routes = null;
  if (user && subscription) {
    routes = (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profiles">
          <Profiles />
        </Route>
        <Route exact path="/watchList">
          <WatchList />
        </Route>
        <Route path="/editProfile">
          <EditProfile />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (user) {
    routes = (
      <Switch>
        <Route path="/editProfile">
          <EditProfile />
        </Route>
        <Redirect to="/editProfile" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route>
          <Login path="/" />
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
