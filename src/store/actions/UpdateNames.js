import { UPDATE_NAME } from '../types/';
import store from '../index';

export const UpdateNames = (name, id) => (dispatch) => {
	const { names } = store.getState();
	const nameObject = { name: name, id: id };
	const modifiedNames = names.names.map((item) => (item.id === id ? nameObject : item));
	
	dispatch({
		type: UPDATE_NAME,
		payload: modifiedNames,
	});
};
