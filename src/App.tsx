// Library & CSS
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/home";
import { Activity } from "./pages/activity";
import { Navbar } from './templates/Navbar';

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}