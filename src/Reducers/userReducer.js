const initialState ={
  fetching:false,
  fetched:false,
  users:[],
  activeUser:{},
  error:null
}


export default function reducer (state = initialState, action){

  switch (action.type) {

    case "FETCH_USERS_PENDING":{
      return {...state, fetching:true}
      break
    }
    case "FETCH_USERS_FULFILLED":{
      return {...state, fetching:false, fetched:true, users:action.payload}
      break;
    }
    case "FETCH_USERS_REJECTED":{
      return {...state, fetching:false, fetched:false, error:action.payload}
      break;
    }
    case 'FETCH_USERS_DUMMY':{
      return{...state,fetched:true, fetching:false, activeUser:action.payload}
    }
    ////////////////////////////////
    case "LOGIN_PENDING":{
      return {...state, fetching:true}
      break;
    }
    case "LOGIN_FULFILLED":{
      return {...state, fetching:false, activeUser:action.payload}
      break;
    }
    case "LOGIN_REJECTED":{
      return {...state, fetching:false, error:action.payload}
      break;
    }


    default: return state;

  }
  return state;
}
