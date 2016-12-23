import React, { Component } from 'react';
import { Link } from 'react-router'
import 'whatwg-fetch'

import Detailsdata from './Projectdetails/Detailsdata';
import EditProject from './Projectdetails/EditProject';

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
  allowEdit = () =>{

    if(!this.state.editable){
    this.setState({editable:true})
  } else{
    this.setState({editable:false})

  }
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
    this.allowEdit = this.allowEdit.bind(this);
    this.state={
      project:{},
      user:{},
      editable:false
    }
  }





  render() {
    console.log(this.state);
    return (
      <div className="detailContent">
        <div className="btn-bar">
        <button ><Link to="main/projects" className="btn btn-calm"> Back</Link></button>

        {
          this.state.editable?
          <button className="btn btn-warning" onClick={this.allowEdit}>Cancel Edit</button>
          :
          <button className="btn btn-success" onClick={this.allowEdit}>Edit</button>

        }

        </div>
          {
            this.state.editable?
            <EditProject project={this.state.project} />
            :
            <Detailsdata project={this.state.project} user={this.state.user} />

          }

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
