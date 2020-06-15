import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Header } from './components';


import {
  LoginScreen,
  jobsView,
  profile,
  dashbord,
  recJobsView,
  coursesView
} from './screens';
import './App.css';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route path="/jobs" component={jobsView} />
            <Route path="/myjobs" component={recJobsView} />
            <Route path="/courses" component={coursesView} />
            <Route path="/profile" component={profile} />
            <Route path="/dashbord" component={dashbord} />
            <Route path="/" exact component={LoginScreen} />
          </Switch>
          <h1> #Discovring_Technology</h1>
        </Router>
      </>
    );
  }
}

export default App;
