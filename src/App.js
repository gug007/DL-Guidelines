import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guidelines from "./Guidelines";
import Guide from "./Guide/Guide";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Guide />
        </Route>
        <Route path="/">
          <Guidelines />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
