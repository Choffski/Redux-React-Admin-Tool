import 'whatwg-fetch'
import * as fetch from '../Helpers/Helpers';



export function getAllProjects(){
  return function (dispatch){

    dispatch({type:'FETCH_PROJECTS_PENDING'});
    fetch.get('getProjects', resp =>{

      dispatch({type:'FETCH_PROJECTS_FULFILLED', payload:resp})

    })
  }

}
export function getProjectWithId(){
  return function (dispatch){

  }
}
export function AddProject(){
  return function (dispatch){

  }
}

export function deleteProject(key){
  return function (dispatch){
    dispatch({type:'DELETE_PROJECT', payload:key});
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
