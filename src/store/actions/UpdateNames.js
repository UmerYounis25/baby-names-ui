import { UPDATE_NAME } from '../types/';
import store from '../index';

export const UpdateNames = (name, id) => (dispatch) => {
    const { names } = store.getState();

    const nameObject={
        name,
        id,
    }

	const modifiedNames=names.names.map((item) => {
		if (item.id === id) {
			return nameObject;
		}
		return item;
	});
	dispatch({
		type: UPDATE_NAME,
		payload: modifiedNames,
	});
};
