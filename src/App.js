import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase/firebase";

import { login, logout, selectUser } from "./features/userSlice";

import Home from "./Screens/HomeScreen/Home";
import Login from "./Screens/LoginScreen/Login";
import Profile from "./Screens/ProfileScreen/Profile";

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

  useEffect(() => {
    console.log("render");
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/editProfile">
              <Profile />
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
