// Library & CSS
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import $ from "jquery";
import "jquery.nicescroll";

// Pages
import { Home } from "./pages/home";
import { Activity } from "./pages/activity";
import { Navbar } from './templates/Navbar';

export class App extends React.Component {
  componentDidMount() {
    $("body").niceScroll({
      cursorcolor: "#7289DA"
    });
  }
  render() {
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
}