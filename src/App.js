import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guidelines from "./Giudelines";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">123</Route>
        <Route path="/">
          <Guidelines />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
