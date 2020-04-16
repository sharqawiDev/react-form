import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

export default function App() {
  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify([]));
  });
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>{" "}
    </Router>
  );
}
