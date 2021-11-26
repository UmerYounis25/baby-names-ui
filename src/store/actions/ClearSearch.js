import { CLEAR_SEARCH } from '../types';

export const ClearSearch = () => (dispatch) => {
	dispatch({ type: CLEAR_SEARCH, payload: [] });
};
