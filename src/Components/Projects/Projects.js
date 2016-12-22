import React, { Component } from 'react';
import 'whatwg-fetch'


import Projectlist from './Projectlist'

class Projects extends Component {


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


  constructor(){
    super();

    this.state = {
      projects : []
    }

  }
  render() {
    return (
      <div className="mainContent">

        <Projectlist projects={this.state.projects}/>
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
