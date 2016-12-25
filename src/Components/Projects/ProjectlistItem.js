import React, { Component } from 'react';
import { Link } from 'react-router';

class ProjectlistItem extends Component {

  deleteEvent = (id) =>{
    this.props.onDelete(id);
  }

  render() {
    return (

    <div className="list-item">
  <div className="col-66">   <Link to={'/main/projects/' + this.props.data.id}>
    <strong> {this.props.data.name} </strong>
      <br/>
       {this.props.data.category}
      </Link>
    </div>
    <div className="col-33">  <a className="btn btn-danger" onClick={this.deleteEvent.bind(this, this.props.data.id)}> delete</a>
</div>
    </div>
    );
  }
}

export default ProjectlistItem;
