import React, { Component } from 'react';
import { Link } from 'react-router'


class Navbar extends Component {
  render() {
    return (

      <div className="navBar">
        <ul role="nav">
          <li><Link to="main/profile">Profile</Link></li>
          <li><Link to="main/leaderboard">Leaderboard</Link></li>
          <li><Link to="/">Logout</Link></li>

        </ul>
      </div>
    );
  }
}

export default Navbar;
