import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import 'whatwg-fetch'
import { login } from '../../Actions/userActions'

import { connect } from 'react-redux';


class Login extends Component {

  constructor(){
    super();
    this.userInput = {};
    this.passwordInput = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (e) =>{
    e.preventDefault();
     let user = this.userInput.value.trim();
     let password = this.passwordInput.value.trim();

     this.props.dispatch(login(user,password))
     .then(resp =>{
       if(resp.data.data){
       sessionStorage.setItem('token', resp.data.data.token);
       this.props.dispatch({type:'LOGIN_FULFILLED'});
       this.props.dispatch({type:'ADD_CURRENT_USER', payload:resp.data.data.currentUser});


       hashHistory.push('/main');
     } else {
       this.props.dispatch({type:'LOGIN_REJECTED', payload:resp.data.error})
     }
     })
     .catch(err =>{
       this.props.dispatch({type:'LOGIN_REJECTED', payload:err})
     })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>
          Username:
          <input type="text" name="Username" placeholder="Your Username" ref={node => {
            this.userInput = node
          }} />
        </label>
        <label>
          Password:
          <input type="password" name="Password" placeholder="Your Password" ref={node =>{
            this.passwordInput = node
          }}/>
        </label>

        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default connect()(Login);
