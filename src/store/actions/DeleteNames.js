import { DELETE_NAME } from '../types/';
import { Platform } from 'react-native';
import store from '../index';
import { localStorageNameList } from '../../utils/types';
import MyStorage from '../../utils/MyStorage';

const myStorage = new MyStorage();

export const DeleteNames = (id) => (dispatch) => {
	const { names } = store.getState();
	const filteredNames = names.names.filter((name) => name.id !== id);
	'ios' === Platform.OS
		? 0 == filteredNames.length && myStorage.removeDataForIos(localStorageNameList)
		: 0 == filteredNames.length && myStorage.deleteDataFromStorage(localStorageNameList);
		
	dispatch({
		type: DELETE_NAME,
		payload: filteredNames,
	});
};
