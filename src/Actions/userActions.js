import 'whatwg-fetch'
import * as fetch from '../Helpers/Helpers';


export function getAllUsers(){
  return function (dispatch){

    dispatch({type:'FETCH_USERS_START'});
    fetch.get('getUsers', resp =>{

      dispatch({type:'FETCH_USERS_FULFILLED', payload:resp})

    })
  }
}

export function testDummy(){

    return{
      type:"FETCH_USERS_DUMMY",
      payload:{
        name:'Samuli',
        id:'01'
      }

    }

}
export function login(){
  return function (dispatch){

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
