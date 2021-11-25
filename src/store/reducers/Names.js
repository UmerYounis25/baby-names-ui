import { ADD_NAME } from '../types';

const initialState = {
	names: [],
	searchValues: [],
};

export default function Names(state = initialState, action) {
	switch (action.type) {
		case ADD_NAME:
			return { ...state, names: [...state.names, action.payload], searchValues: [] };
		default:
			return state;
	}
}
