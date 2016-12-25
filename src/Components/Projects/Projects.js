import React, { Component } from 'react';
import 'whatwg-fetch'
import { checkStatus } from '../../Helpers/Helpers'

import Projectlist from './Projectlist'
import Addproject from '../Add/Addproject'

class Projects extends Component {

  handleDelete = (id) =>{
    console.log('finally handling delete ' + id);
    let projects = this.state.projects;
    let index = projects.findIndex( x => x.id === id)
    projects.splice(index, 1);
    this.setState({projects:projects})
    // Trigger API call to delete project from storage and reload projects
  }

  allowAdding = () =>{

    if(!this.state.addable){
    this.setState({addable:true})
  } else{
    this.setState({addable:false})

  }
  }

  handleAdding = () =>{
    let projects = this.state.projects;

        const defaultObj = {
          name:"",
          category:"",
          desc:"",
          start:new Date(),
          end: new Date(),
          assigned:"none",
          status:"none",
          id:0
        }

    projects.push(this.state.newProject);
    this.setState({projects:projects, newProject:defaultObj});

//API call to backend
  }

  changeVal = (e) =>{

    let proj = this.state.newProject;
    proj[e.target.name] = e.target.value;
      this.setState({newProject : proj})
    console.log(this.state);
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

      fetch('http://localhost:8000/getUsers', {
      'method' : 'GET'}).then(checkStatus)
      .then(resp =>{
        return resp.json();
      }).then(respArr =>{
        this.setState({users: respArr});
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
      projects : [],
      users :[],
      addable : false,
      newProject:{
        name:"",
        category:"",
        desc:"",
        start:new Date(),
        end: new Date(),
        assigned:"",
        status:"",
        id:0
      },
      options:[{
        name:'UI/UX design',
        value:'UI/UX'
      },
      { name:'Front-end development',
        value:'Front-end'
      },
      {
        name:'Back-end development',
        value:'Back-end'
      }
    ]
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.allowAdding = this.allowAdding.bind(this);
    this.handleAdding = this.handleAdding.bind(this);
    this.changeVal = this.changeVal.bind(this);

  }
  render() {
    return (
      <div className="mainContent">

        {
          this.state.addable?
          <div>
          <button className="btn btn-warning" onClick={this.allowAdding}> Cancel</button>
          <Addproject users={this.state.users} categories={this.state.options} onSubmit={this.handleAdding} onChange={this.changeVal} project={this.state.newProject}/>
          </div>
          :
          <button className="btn btn-success" onClick={this.allowAdding}> Add New Project</button>
        }
        <Projectlist onDelete={this.handleDelete} projects={this.state.projects}/>


      </div>
    );
  }
}


Projectlist.propTypes = {
  projects: React.PropTypes.array,
  addable: React.PropTypes.bool,
  newProject: React.PropTypes.object,
  users: React.PropTypes.array,
  options: React.PropTypes.array
}



export default Projects;
