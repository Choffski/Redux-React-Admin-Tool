import axios from 'axios'
import * as fetch from '../Helpers/Helpers';



export function getAllProjects(){
  return function (dispatch){

    dispatch({type:'FETCH_PROJECTS_PENDING'});
    fetch.get('getProjects', resp =>{

      dispatch({type:'FETCH_PROJECTS_FULFILLED', payload:resp})

    })
  }

}
export function getProjectWithId(id){
  return function (dispatch){
    dispatch({type:'CURRENT_PROJECT', payload:id})
  }

}



export function getProjectMember(id){
return function (dispatch){
      dispatch({type:'GET_PROJECT_TEAM_PENDING'});

      axios.get('http://localhost:8000/getUser/'+ id)
      .then( resp =>{
        dispatch({type:'GET_PROJECT_TEAM_FULFILLED', payload:resp.data})
      })
      .catch(err =>{
        dispatch({type:'GET_PROJECT_TEAM_REJECTED', payload:err})
      })

}
    }

    export function clearDetails(){
      return function (dispatch){
        dispatch({type:"CLEAR_CURRENT_PROJECT"})
      }
    }

export function AddProject(body){
  return function (dispatch){
    dispatch({type:"ADD_PROJECT_PENDING"});
    dispatch({type:"ADD_PROJECT_FULFILLED", payload:body});

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
