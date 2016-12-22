import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectlistItem extends Component {
  render() {
    return (

    <button className="list-item">
      <Link to={'/main/projects/' + this.props.data.id}>
      {this.props.data.name} -- {this.props.data.category}
      <br/>
      Status: {this.props.data.status}
    </Link>
    </button>
    );
  }
}

export default ProjectlistItem;
