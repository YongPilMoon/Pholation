import { createStore, applyMiddleware, combineReducers } from 'redux';

/* load modules */
import base from 'redux/modules/base/index';

/* configure middleware */

const createStoreWithMiddleware = applyMiddleware()(createStore);

const reducer = combineReducers({
  base
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;
