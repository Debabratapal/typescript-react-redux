import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const initialState = {};

const middleware = [
  thunk,
  
];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;