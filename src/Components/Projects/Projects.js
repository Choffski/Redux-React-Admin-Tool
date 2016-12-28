import React, { Component } from 'react';
import 'whatwg-fetch'
import { connect } from 'react-redux';

import * as user from '../../Actions/userActions'
import * as project from '../../Actions/projectActions'

import Projectlist from './Projectlist'
import Addproject from '../Add/AddProject'




class Projects extends Component {

    componentWillMount() {
      this.props.dispatch(user.getAllUsers())
      this.props.dispatch(project.getAllProjects());

    }

  handleDelete = (id) =>{

    let index = this.props.projects.findIndex( x => x.id === id)
    this.props.dispatch(project.deleteProject(index))
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

  constructor(){
    super();

    this.state = {
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
    console.log(this.props);
    return (
      <div className="mainContent">
        {
          this.state.addable?
          <div>
          <button className="btn btn-warning" onClick={this.allowAdding}> Cancel</button>
          <Addproject users={this.props.users} categories={this.state.options} onSubmit={this.handleAdding} onChange={this.changeVal} project={this.state.newProject}/>
          </div>
          :
          <button className="btn btn-success" onClick={this.allowAdding}> Add New Project</button>
        }
        <Projectlist onDelete={this.handleDelete} projects={this.props.projects}/>
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

function mapStateToProps(store) {
  return{
      fetchingUsers: store.users.fetching,
      fetchingProjects: store.projects.fetching,
      users: store.users.users,
      projects: store.projects.projects,
      newProject: store.projects.newProject
  }
}



export default connect(mapStateToProps)(Projects);
