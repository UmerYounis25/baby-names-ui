import { SORT_ITEMS } from '../types';
import store from '../index';

export const SortItems = (type) => (dispatch) => {
	const { names } = store.getState();
	let sortedArray = [];
	if (type === 'date') {
		sortedArray = names.names.sort((a, b) => b.createdAt - a.createdAt);
	} else if (type == 'length') {
		sortedArray = names.names.sort((a, b) => b.name.length - a.name.length);
	} else if (type == 'name') {
		sortedArray = names.names.sort((a, b) => a.name.localeCompare(b.name));
	}

	dispatch({
		type: SORT_ITEMS,
		payload: sortedArray,
	});
};
