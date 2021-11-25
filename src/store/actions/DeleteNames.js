import { DELETE_NAME } from '../types/';
import store from '../index';

export const DeleteNames = (id) => (dispatch) => {
	const { names } = store.getState();
	const filteredNames = names.names.filter((name) => name.id !== id);
	dispatch({
		type: DELETE_NAME,
		payload: filteredNames,
	});
};
