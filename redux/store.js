import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
