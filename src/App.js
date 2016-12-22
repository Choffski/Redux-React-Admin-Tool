import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import 'whatwg-fetch'


import Login from './Components/Login/Login';
import Leaderboard from './Components/Leaderboards/Leaderboards';
import MainView from './Components/MainView/MainView';
import Profile from './Components/Profile/Profile';


class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path="/" component={Login}>
          </Route>
          <Route path="/main" component={MainView} onEnter ={checkLogin}>
              <Route path="profile" component={Profile}></Route>
              <Route path="leaderboard" component={Leaderboard}></Route>
          </Route>

        </Router>
    );
  }
}

const checkLogin = (nextStage, replace, callback) => {

fetch('http://localhost:8000/validateToken', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
token: sessionStorage.getItem('token')
})
}).then(checkStatus)
.then(resp => {
  return resp.json();
}).then(respObj =>{
  console.log(respObj);
  if(respObj.data == null){
    replace('/')
  }
  callback();
}).catch(function(error) {
    console.log('request failed', error)
    callback();

  })


}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}


export default App;