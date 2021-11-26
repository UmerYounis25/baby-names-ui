import AsyncStorage from '@react-native-async-storage/async-storage';

class MyStorage {
	// for web
	addDataToStorage(key, value) {
		localStorage.setItem(key, value);
	}
	readDataFromStorage(key) {
		return localStorage.getItem(key);
	}
	deleteDataFromStorage(key) {
		localStorage.removeItem(key);
	}

	// for ios
	async storeDataForIos(key, value) {
		await AsyncStorage.setItem(key, value);
	}
	async getDataForIos(key) {
		const value = await AsyncStorage.getItem(key);
		return value;
	}
	async removeDataForIos(key) {
		await AsyncStorage.removeItem(key);
	}
}

export default MyStorage;
