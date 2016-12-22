import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'


class Mainview extends Component {

  constructor(){
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    sessionStorage.removeItem('token');
    hashHistory.push('/');
  }


  render() {
    return (
      <div className="mainview">
      <h1>Main page</h1>
      <div className="navBar">
        <ul role="nav">
          <li><Link to="main/profile">Profile</Link></li>
          <li><Link to="main/leaderboard">Leaderboard</Link></li>
          <li><Link onClick={this.handleLogout}>Logout</Link></li>

        </ul>
      </div>
        <div className="contentArea">
          {this.props.children}
        </div>
    </div>
    );
  }
}

export default Mainview;
