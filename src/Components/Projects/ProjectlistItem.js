import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectlistItem extends Component {
  render() {
    return (

    <a className="list-item">
      <Link to={'/main/projects/' + this.props.id}>
      {this.props.name} -- {this.props.category}
      <br/>
      Status: {this.props.status}
    </Link>
    </a>
    );
  }
}

export default ProjectlistItem;
