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
            <Route path="/login" exact component={LoginScreen} />
            <Route path="/jobs" component={jobsView} />
            <Route path="/courses" component={coursesView} />
            <Route path="/profile" component={profile} />
            <Route path="/" component={dashbord} />
          </Switch>
          <h1> #Discovring_Technology</h1>
        </Router>
      </>
    );
  }
}

export default App;
