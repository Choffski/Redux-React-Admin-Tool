import React, { Component } from 'react';



import ProjectlistItem from './ProjectlistItem';

class Projectlist extends Component {




  render() {
    let listItems;
    if(this.props.projects){
      listItems = this.props.projects.map(proj =>{
        return <ProjectlistItem data={proj} key={proj.id}/>
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
