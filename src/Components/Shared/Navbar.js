import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'


class Navbar extends Component {

  constructor(){
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = (e) =>{
    sessionStorage.removeItem('token');
    hashHistory.push('/');
  }

  render() {
    return (

      <div className="navBar">
        {/* <ul role="nav">
          <li><Link to="main">Dashboard</Link></li>
          <li><Link to="main/projects">Projects</Link></li>
          <li><Link to="main/profile">Profile</Link></li>
          <li><Link to="/">Logout</Link></li>

        </ul> */}

          {/*  alt test */}

          <div className="navBar">
            <button><Link to="main">Dashboard</Link></button>
            <button><Link to="main/projects">Projects</Link></button>
            <button><Link to="main/profile">Profile</Link></button>
            <button onClick={this.handleLogout}>Logout</button>

          </div>

      </div>
    );
  }
}

export default Navbar;
