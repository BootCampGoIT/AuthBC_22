import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({ 
    auth: authReducer,
    error: errorReducer,
    loader: loaderReducer,
 })

 export default rootReducer;