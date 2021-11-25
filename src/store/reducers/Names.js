import { ADD_NAME, SEARCH_NAMES } from '../types';

const initialState = {
	names: [],
	searchValues:[],
};

export default function Names(state = initialState, action) {
	switch (action.type) {
		case ADD_NAME:
			return {...state,names:[...state.names,action.payload ],searchValues:[] }
		case SEARCH_NAMES:
			return { ...state, searchValues: action.payload };

		default:
			return state;
	}
}
