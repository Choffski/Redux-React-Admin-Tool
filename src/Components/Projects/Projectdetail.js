import React, { Component } from 'react';
import { Link } from 'react-router'
import 'whatwg-fetch'



class Projectdetail extends Component {


  componentDidMount() {
    fetch('http://localhost:8000/getProjectDetail/' + this.props.params.id, {
    'method' : 'GET'}).then(checkStatus)
    .then(resp =>{
      return resp.json();
    }).then(respObj =>{
      this.setState({project: respObj});
      this.findUser(respObj.assigned);
    }).catch(function(error) {
        console.log('request failed', error)
        return
      })

  }


  findUser = (id) =>{
    fetch('http://localhost:8000/getUser/'+id, {
    'method' : 'GET'}).then(checkStatus)
    .then(resp =>{
      return resp.json();
    }).then(respObj =>{
      this.setState({user: respObj});
    }).catch(function(error) {
        console.log('request failed', error)
        return
      })

  }

  constructor(){
    super();
    this.findUser = this.findUser.bind(this);

    this.state={
      project:{},
      user:{}
    }
  }





  render() {
    console.log(this.state);
    return (
      <div>
        Project: {this.state.project.name}
        <br/>
        Assigned: {this.state.user.fname} {this.state.user.lname}
        <br/>
        <button><Link to="main/projects"> Back</Link></button>
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


export default Projectdetail;
