import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Header } from './components';


import {
  LoginScreen,
  UploadExcelScreen,
  ResignReqScreen,
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
            <Route path="/upload" component={UploadExcelScreen} />
            <Route path="/courses" component={coursesView} />
            <Route path="/" component={ResignReqScreen} />
          </Switch>
          <h1> #Discovring_Technology</h1>
        </Router>
      </>
    );
  }
}

export default App;
