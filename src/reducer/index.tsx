import { combineReducers } from 'redux';

import { RESET_STORE } from '../constant';

import util from './utils';
import auth from './auth';

const appReducer =  combineReducers({
  auth,
  util,
})

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
