import { combineReducers } from 'redux';

import  userReducer  from './userReducer'
import  projectReducer  from './projectReducer'



const combinedReducers = combineReducers({
  users: userReducer,
  projects: projectReducer
})

export default combinedReducers;
