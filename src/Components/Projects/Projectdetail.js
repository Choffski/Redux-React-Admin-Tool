import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


import { getProjectWithId, getAllProjects, getProjectMember, clearDetails } from '../../Actions/projectActions';


import Detailsdata from './Projectdetails/Detailsdata';
import EditProject from './Projectdetails/EditProject';

class Projectdetail extends Component {


  componentWillMount() {

    if(this.props.projects.length === 0){
      this.props.dispatch(getAllProjects());
    }

  }
  componentWillReceiveProps(nextProps){

    console.log(nextProps);

    if(Object.keys(nextProps.currentProject).length === 0){
    this.props.dispatch(getProjectWithId(this.props.params.id));
    }

    else if(Object.keys(nextProps.currentProject).length !== 0 && Object.keys(nextProps.currentTeam).length === 0){
      this.props.dispatch(getProjectMember(nextProps.currentProject.assigned));

    }
  }
  componentWillUnmount(){
    this.props.dispatch(clearDetails());

  }

  allowEdit = () =>{
    if(!this.state.editable){
    this.setState({editable:true})
  } else{
    this.setState({editable:false})
    }
  }


  constructor(){
    super();
    this.allowEdit = this.allowEdit.bind(this);
    this.state={
      editable:false
    }
  }




  render() {
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
            <EditProject project={this.props.currentProject} />
            :
            <Detailsdata project={this.props.currentProject} user={this.props.currentTeam} />

          }

      </div>

    );
  }
}

Projectdetail.propTypes = {
  currentProject: React.PropTypes.object,
  projects: React.PropTypes.array
}

function mapStateToProps(store) {
  return{
    currentProject: store.projects.currentProject,
    currentTeam: store.projects.currentProjectTeam,
    projects: store.projects.projects
  }
}




export default connect(mapStateToProps)(Projectdetail);
