import React, { Component } from 'react';




class Addinput extends Component {
constructor(){
  super();

  this.handleChange = this.handleChange.bind(this);

}


handleChange =(e) =>{
  this.props.onChange(e);

}


  render() {


    return (
      <label className="add-form-label">
        {this.props.label} <br/>
        <input className="add-form-input" value={this.props.value} required="true" name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} onChange={this.handleChange}/>
      </label>

    );
  }
}



export default Addinput;
