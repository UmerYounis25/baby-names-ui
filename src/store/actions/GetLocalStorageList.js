import { GET_LOCAL_STORAGE_LIST } from '../types';

export const GetLocalStorageList = (list) => (dispatch) => {
	dispatch({ type: GET_LOCAL_STORAGE_LIST, payload: list });
};
