import { combineReducers } from 'redux';
import Names from './Names';

const rootReducer = combineReducers({ names: Names });

export default rootReducer;
