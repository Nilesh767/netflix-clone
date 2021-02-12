import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Screens/HomeScreen/Home";

import "./App.css";
import Login from "./Screens/LoginScreen/Login";

function App() {
  // const user = null;
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
