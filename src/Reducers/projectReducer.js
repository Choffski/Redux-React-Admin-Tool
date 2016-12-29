const initialState ={
  fetching:false,
  fetched:false,
  adding: false,
  added: false,
  projects:[],
  newProject:{},
  currentProject:{},
  currentProjectTeam:{},
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

    case "ADD_PROJECT_PENDING": {
      return {... state, adding:true}
      break;
    }

    case "ADD_PROJECT_FULFILLED": {
      return {... state, adding:false, added:true, projects: state.projects.concat([action.payload])}
      break;
    }

    case "ADD_PROJECT_REJECTED": {
      return {... state, adding:false, added:false, error:action.payload}
      break;
    }


    ////////////////////////////////

    case "CURRENT_PROJECT":{
      return{
        ...state, currentProject: state.projects.find( (proj) => proj.id === action.payload )
      }
      break;
    }
    case "CLEAR_CURRENT_PROJECT":{
      return { ...state, currentProject:{}, currentProjectTeam:{} }
      break;
    }
    case "GET_PROJECT_TEAM_PENDING":{
      return { ...state, fetching:true}
      break;
    }
    case "GET_PROJECT_TEAM_FULFILLED":{
      return { ...state, fetching:false, fetched:true, currentProjectTeam: action.payload}
      break;
    }
    case "GET_PROJECT_TEAM_REJECTED":{
      return { ...state, fetching:false, fetched:false, error:action.payload}
      break;
    }

    case "DELETE_PROJECT":{
      return {
        ...state, projects: state.projects.filter( (item, index) => index !== action.payload)
      }
      break;
}


    default: return state;

  }
  return state;
}
