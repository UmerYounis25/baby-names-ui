import { combineReducers } from 'redux';
import BabyNames from './BabyNames';

const rootReducer = combineReducers({ babyName: BabyNames });

export default rootReducer;
