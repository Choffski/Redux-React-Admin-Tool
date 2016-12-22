import React, { Component } from 'react';
import { Link } from 'react-router'



class Projectdetail extends Component {




  render() {
    console.log(this.props);
    return (
      <div>
        <button><Link to="main/projects"> Back</Link></button>
        <h3>Project details</h3>
      </div>

    );
  }
}



export default Projectdetail;
