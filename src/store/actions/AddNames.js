import { ADD_NAME } from '../types/';

export const addName = (name) => (dispatch) => {
	const id = Math.random().toString(36).substr(2, 9);
	const nameObject={name,id,createdAt:Date.now()};
	dispatch({ type: ADD_NAME, payload: nameObject });
};
