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

          <ul className="navBar">
            <li className="btn "><Link to="main"  className="btn btn-success btn-width-100" >Dashboard</Link></li>
            <li className="btn"><Link to="main/projects" className="btn btn-success btn-width-100">Projects</Link></li>
            <li className="btn"><Link to="main/profile" className="btn btn-success btn-width-100">Profile</Link></li>

          </ul>

          <ul>
            <li className="btn btn-warning" onClick={this.handleLogout}>Logout</li>
          </ul>

      </div>
    );
  }
}

export default Navbar;
