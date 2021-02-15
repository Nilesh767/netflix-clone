import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase/firebase";

import { login, logout, selectUser } from "./features/userSlice";

import Home from "./Screens/HomeScreen/Home";
import Login from "./Screens/LoginScreen/Login";
import Profiles from "./Screens/Profiles/Profiles";
import EditProfile from "./Screens/EditProfileScreen/EditProfile";

import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
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
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
