import { ON_NAME_EDIT } from '../types';

export const OnNameEdit = (name, id) => (dispatch) => {
	dispatch({
		type: ON_NAME_EDIT,
		payload: { name, id },
	});
};
