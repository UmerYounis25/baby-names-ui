import {
	ADD_NAME,
	SEARCH_NAMES,
	DELETE_NAME,
	ON_NAME_EDIT,
	UPDATE_NAME,
	GET_LOCAL_STORAGE_LIST,
} from '../types';

const initialState = {
	names: [],
	searchValues:[],
	editedName:{}
};

export default function Names(state = initialState, action) {
	switch (action.type) {
		case ADD_NAME:
			return { ...state, names: [...state.names, action.payload], searchValues: [] };
		case SEARCH_NAMES:
			return { ...state, searchValues: action.payload };
		case DELETE_NAME:
			return { ...state, names: action.payload, searchValues: [] };
		case UPDATE_NAME:
			return { ...state, names: action.payload, searchValues: [], editedName: {} };
		case ON_NAME_EDIT:
			return { ...state, editedName: action.payload };
		case GET_LOCAL_STORAGE_LIST:
			return { ...state, names: action.payload };
		default:
			return state;
	}
}
