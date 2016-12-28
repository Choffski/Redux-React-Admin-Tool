import React, { Component } from 'react';

import Addinput from './Addinput'
import Selectoptions from './Selectoptions'



class AddProject extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = (e) => {

this.props.onChange(e)
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    this.props.onSubmit();
  }



  render() {
    let selectableUsers, selectableOptions;

    if(this.props.users){
      selectableUsers = this.props.users.map(usr =>{
        return <Selectoptions text={usr.fname} key={usr.id} value={usr.id}/>
      })
    }
    if(this.props.categories){
      selectableOptions = this.props.categories.map(cat =>{
        return <Selectoptions text={cat.name} key={cat.value} value={cat.value}/>
      })
    }
    return (

      <form className="add-form" onSubmit={this.handleSubmit}>
        <Addinput value={this.props.project.name} type="text" name="name" label="Add Project Name" placeholder="E.g. Mobile application for E-commerce" onChange={this.handleChange}/>


                <label className="add-form-label">
                  Select category <br/>
          <select className="add-form-input" name="category" onChange={this.handleChange}>
            <option value="none"></option>

            {selectableOptions}
          </select>

                </label>


        <label className="add-form-label">
          Description <br/>
        <textarea  className="add-form-input" value ={this.props.project.desc} type="text" name="desc" placeholder="Mobile e-commerce application using react native"  onChange={this.handleChange}/>
        </label>

        <Addinput value={this.props.project.start} type="date" name="start" label="Project Start date" onChange={this.handleChange}/>
        <Addinput value={this.props.project.end} type="date" name="end" label="Project End date" onChange={this.handleChange}/>


        <label className="add-form-label">
          Assign to <br/>
  <select className="add-form-input" name="assigned" onChange={this.handleChange}>
    <option value="none"></option>
    {selectableUsers}
  </select>

        </label>


        <input className="btn btn-success add-form-label" type="submit" value="Add New Project" />
      </form>



    );
  }
}



export default AddProject;
