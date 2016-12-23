import React, { Component } from 'react';
import 'whatwg-fetch'

class EditProject extends Component {



  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);

    this.projectTitle;
  }
onSubmit = () =>{

}

  render() {
    console.log(this.props.project);
    return (
      <form  onSubmit={this.onSubmit} className="projectDetailsData">
        <div className="dataBlock">
          <p>Project</p>
          <input type="text" placeholder="Project title"  ref={node => {
            this.projectTitle = node
          }} defaultValue={this.props.project.name}/>
      </div>
      <br/>
      <div className="dataBlock">
        <p>Category</p>
          <select defaultValue={this.props.project.category}>
            <option value="UI/UX">UI/UX</option>
            <option value="Front-end Development">Front-end Development</option>
            <option value="Back-end Development">Back-end Development</option>
          </select>
        <br/>
        <p>Description</p>
        <textarea placeholder="Enter Description" defaultValue={this.props.project.desc}></textarea>
        <br/>
        <p>Project Duration </p>
        <label>
          From
          <input type="date" defaultValue={new Date(this.props.project.start)}/>
        </label>
        <label>
          To
          <input type="date" defaultValue={new Date(this.props.project.end)}/>
        </label>
    </div>
      <br/>
      <div className="dataBlock">
      <p>Person responsible</p>
      <select>
        <option>asd</option>
      </select>
      <br/>
      <input type="submit" value="Save Changes"/>
    </div>
</form>
    );
  }
}



export default EditProject;
