import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const middlewares = [thunk]
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, composeWithDevTools(enhancer))

export default store;