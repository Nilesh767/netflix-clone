import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Screens/HomeScreen/Home";

import "./App.css";
import Login from "./Screens/LoginScreen/Login";
import { auth } from "./Firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

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
        dispatch(logout);
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
