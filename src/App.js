import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homescreen from "./Screens/Homescreen/Homescreen";

import "./App.css";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homescreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
