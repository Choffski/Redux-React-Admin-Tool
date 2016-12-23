import React, { Component } from 'react';
import 'whatwg-fetch'



class Detailsdata extends Component {


  constructor(){
    super();

    this.convertDate = this.convertDate.bind(this);


  }
  convertDate = (timestamp) =>{
    if(timestamp){
    let date = new Date (timestamp *1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();

    return day+'/'+month+'/'+year;
    }
    else return ('No Date Specified')
  }


  render() {
    return (
      <div className="projectDetailsData">
        <div className="dataBlock">
          <p>Project</p>
          <h4>{this.props.project.name}</h4>
      </div>
      <br/>
      <div className="dataBlock">
        <p>Category</p>
        <p>{this.props.project.category}</p>
        <br/>
        <p>Description</p>
        <p>{this.props.project.desc}</p>
        <br/>
        <p>Project Duration </p>
        <p> From: {this.convertDate(this.props.project.start)} To: {this.convertDate(this.props.project.end)}</p>
    </div>
      <br/>
      <div className="dataBlock">
      <p>Person responsible</p>
      <p>{this.props.user.fname} {this.props.user.lname}</p>
    </div>
</div>
    );
  }
}



export default Detailsdata;
