import React, { Component } from 'react';



import ProjectlistItem from './ProjectlistItem';

class Projectlist extends Component {




  render() {
    let listItems;
    if(this.props.projects){
      listItems = this.props.projects.map(proj =>{
        return <ProjectlistItem status={proj.status} name={proj.name} key={proj.id} id={proj.id} category={proj.category}/>
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
