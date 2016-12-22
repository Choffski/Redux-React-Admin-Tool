import React, { Component } from 'react';



import ProjectlistItem from './ProjectlistItem';

class Projectlist extends Component {




  render() {
    let listItems;
    if(this.props.projects){
      listItems = this.props.projects.map(proj =>{
        return <ProjectlistItem status={proj.status} name={proj.name} category={proj.category}/>
      })

    }
    return (
      <div>
        <ul>
        {listItems}
        </ul>
      </div>

    );
  }
}



export default Projectlist;
