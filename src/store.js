//import dependencies
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

// import reducers
import combineReducers from './Reducers/index'

//// imports end
const middleware = applyMiddleware(logger(), thunk, promise());
// const store = createStore(todoReducers, {}, middleware);

export default createStore(combineReducers, middleware)
