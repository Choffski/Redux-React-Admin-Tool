import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { checkLogin } from './Helpers/Helpers'


import Login from './Components/Login/Login';
import Projects from './Components/Projects/Projects';
import MainView from './Components/MainView/MainView';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import Projectdetail from './Components/Projects/Projectdetail';








class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path="/" component={Login}>
          </Route>
          <Route path="/main" component={MainView} onEnter={checkLogin}>
              <IndexRoute component={Dashboard}></IndexRoute>
              <Route path="profile" component={Profile}></Route>
              <Route path="projects" component={Projects}>
              </Route>
              <Route path="projects/:id" component={Projectdetail}></Route>

          </Route>

        </Router>
    );
  }
}


export default App;
