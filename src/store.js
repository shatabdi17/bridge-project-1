import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { USER_ACTIONS } from './actions';

const initialState = {
  loggedIn: false,
  username: "",
  profile: {},
  repos: [],
  pullRequests: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case USER_ACTIONS.LOGIN:
      return {
        ...state,
        loggedIn: true,
        profile: action.payload
      }
    case USER_ACTIONS.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        profile: {},
        username: "",
        firstName: "",
      }
    case USER_ACTIONS.SAVE_FORKED_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    case USER_ACTIONS.SAVE_PULL_REQUESTS:
      return {
        ...state,
        pullRequests: action.payload
    }
    default:
      return state;
  }
};
  
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);