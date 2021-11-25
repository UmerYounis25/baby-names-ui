import { ADD_NAME } from '../types';

const initialState = {
	names: [],
};

export default function Names(state = initialState, action) {
	switch (action.type) {
		case ADD_NAME:
			return {...state,names:[...state.names,action.payload ] }
		default:
			return state;
	}
}
