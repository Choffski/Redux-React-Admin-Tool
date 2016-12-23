import React, { Component } from 'react';
import 'whatwg-fetch'


import Projectlist from './Projectlist'

class Projects extends Component {

  handleDelete = (id) =>{
    console.log('finally handling delete ' + id);
    let projects = this.state.projects;
    let index = projects.findIndex( x => x.id === id)
    projects.splice(index, 1);
    this.setState({projects:projects})


    // Trigger API call to delete project from storage and reload projects

  }


  componentDidMount() {
    console.log('they did mount :) ')
    fetch('http://localhost:8000/getProjects', {
    'method' : 'GET'}).then(checkStatus)
    .then(resp =>{
      return resp.json();
    }).then(respArr =>{
      this.setState({projects: respArr});
    }).catch(function(error) {
        console.log('request failed', error)
        return
      })

  }

  componentWillUnmount(){
    console.log('Swapping between dashboard, projects and profile')
  }


  constructor(){
    super();

    

    this.state = {
      projects : []
    }
    this.handleDelete = this.handleDelete.bind(this);

  }
  render() {
    return (
      <div className="mainContent">

        <Projectlist onDelete={this.handleDelete} projects={this.state.projects}/>


      </div>
    );
  }
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
Projectlist.propTypes = {
  projects: React.PropTypes.array,
}



export default Projects;
