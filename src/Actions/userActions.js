import 'whatwg-fetch'
import axios from 'axios'
import * as fetch from '../Helpers/Helpers';


export function getAllUsers(){
  return function (dispatch){

    dispatch({type:'FETCH_USERS_START'});
    fetch.get('getUsers', resp =>{

      dispatch({type:'FETCH_USERS_FULFILLED', payload:resp})

    })
  }
}

export function login(user, password){
  return  dispatch => {
    dispatch({type:'LOGIN_PENDING'});
    let body ={
      user: user,
      password: password
    }

    return(axios.post('http://localhost:8000/login', body))

  }
}

export function checkAuth(){
  return function (dispatch){

  }
}


// export function getUsers() {
//   return function(dispatch){
//
//       dispatch({type: "FETCH_USERS_START"});
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((response) =>{
//       dispatch({type: "FETCH_USERS_FULFILLED",payload: response.data})
//     })
//     .catch((err) =>{
//       dispatch({type: "FETCH_USERS_REJECTED",payload: err})
//     })
//
//   }
// }
