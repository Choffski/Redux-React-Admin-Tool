import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import 'whatwg-fetch'


class Login extends Component {

  constructor(){
    super();
    this.userInput = {};
    this.passwordInput = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();

     let user = this.userInput.value.trim();
     let password = this.passwordInput.value.trim();

     if(!user || !password) return;
     console.log(user + ' '+ password)


     fetch('http://localhost:8000/login', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify({
   user: user,
   password:password,
 })
}).then(resp =>{
return resp.json();
}).then(respObj =>{
  console.log(respObj);

  if(respObj.error){
    alert(respObj.error);
  } else{
    sessionStorage.setItem('token', respObj.data.token);
    hashHistory.push('/main');

  }
})

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>
          Username:
          <input type="text" name="Username" placeholder="your username" ref={node => {
            this.userInput = node
          }} />
        </label>
        <label>
          Password:
          <input type="password" name="Password" ref={node =>{
            this.passwordInput = node
          }}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default Login;
