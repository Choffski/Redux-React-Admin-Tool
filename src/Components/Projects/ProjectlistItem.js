import React, { Component } from 'react';


class ProjectlistItem extends Component {
  render() {
    return (

    <div className="projectListItem">
      {this.props.name} -- {this.props.category}
      <br/>
      Status: {this.props.status}
    </div>
    );
  }
}

export default ProjectlistItem;
