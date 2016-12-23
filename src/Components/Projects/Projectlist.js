import React, { Component } from 'react';



import ProjectlistItem from './ProjectlistItem';

class Projectlist extends Component {

  handleDelete = (id) =>{
    this.props.onDelete(id);
  }

  render() {

    let listItems;
    if(this.props.projects){
      listItems = this.props.projects.map(proj =>{
        return <ProjectlistItem data={proj} onDelete={this.handleDelete.bind(this)} key={proj.id}/>
      })

    }
    return (
      <div className="list">
          {listItems}
      </div>

    );
  }
}



export default Projectlist;
