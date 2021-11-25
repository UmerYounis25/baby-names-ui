import { ADD_NAME, SEARCH_NAMES, DELETE_NAME } from '../types';

const initialState = {
	names: [],
	searchValues:[],
};

export default function Names(state = initialState, action) {
	switch (action.type) {
		case ADD_NAME:
			return { ...state, names: [...state.names, action.payload], searchValues: [] };
		case SEARCH_NAMES:
			return { ...state, searchValues: action.payload };
		case DELETE_NAME:
			return { ...state, names: action.payload, searchValues:[] };

		default:
			return state;
	}
}
