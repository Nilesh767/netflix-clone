import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Screens/HomeScreen/Home";

import "./App.css";
import Login from "./Screens/LoginScreen/Login";
import { auth } from "./Firebase/firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log("logged in");
      } else {
        //not logged in
      }
    });
    return unSubscribe;
  }, []);

  useEffect(() => {
    console.log("render");
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
