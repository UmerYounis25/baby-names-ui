import { GET_LOCAL_STORAGE_LIST } from '../types';

export const GetLocalStorageList = (list) => (dispatch) => {
	const sortedArray = list.sort((a, b) => {
		return b.createdAt - a.createdAt;
	});
	dispatch({ type: GET_LOCAL_STORAGE_LIST, payload: sortedArray });
};
