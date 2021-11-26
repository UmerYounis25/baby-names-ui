import { SEARCH_NAMES } from '../types/';
import store from "../index";

export const searchNames = (searchTerm) => (dispatch) => {
	const { names } = store.getState();
    if(searchTerm.length > 0){
		const filteredNames = names.names.filter((name) =>
		name.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);
	dispatch({ type: SEARCH_NAMES, payload: filteredNames });
    return;
}
    dispatch({ type: SEARCH_NAMES, payload: [] });
};
