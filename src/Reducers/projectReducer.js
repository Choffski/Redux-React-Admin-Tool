const initialState ={
  fetching:false,
  fetched:false,
  projects:[],
  newProject:{},
  currentProject:{},
  error:null
}


export default function reducer (state = initialState, action){

  switch (action.type) {

    case "FETCH_PROJECTS_PENDING":{
      return {...state, fetching:true}
      break
    }
    case "FETCH_PROJECTS_FULFILLED":{
      return {...state, fetching:false, fetched:true, projects:action.payload}
      break;
    }
    case "FETCH_PROJECTS_REJECTED":{
      return {...state, fetching:false, fetched:false, error:action.payload}
      break;
    }
    ////////////////////////////////
    case "DELETE_PROJECT":{
      return {
        projects: state.projects.filter( (item, index) => index !== action.payload)
      }

}


    default: return state;

  }
  return state;
}
