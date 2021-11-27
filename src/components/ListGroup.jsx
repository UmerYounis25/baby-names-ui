import React from 'react';
import { Platform } from 'react-native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { DeleteNames } from '../store/actions/DeleteNames';
import { GetLocalStorageList } from '../store/actions/GetLocalStorageList';
import { OnNameEdit } from '../store/actions/OnNameEdit';
import { localStorageNameList } from '../utils/types';
import MyStorage from '../utils/MyStorage';
import SearchResult from './SearchResult';

export const ListGroup = () => {
	const dispatch = useDispatch();
	const myStorage = new MyStorage();
	const [nameList, setNameList] = React.useState([]);
	const { names, searchValues, isSearching } = useSelector((state) => state.names);

	const resetNameList = () => {
		setNameList(names);
	};

	React.useEffect(() => {
		'ios' == Platform.OS
			? names.length >= 1 &&
			  myStorage.storeDataForIos(localStorageNameList, JSON.stringify(names))
			: names.length >= 1 &&
			  myStorage.addDataToStorage(localStorageNameList, JSON.stringify(names));
		setNameList(names);
	}, [names]);

	React.useEffect(() => {
		searchValues.length >= 1 && setNameList(searchValues);
	}, [searchValues]);

	React.useEffect(() => {
		if (Platform.OS === 'ios') {
			const value = myStorage.getDataForIos(localStorageNameList);
			value.then((value) => {
				if (null !== value) {
					const a = JSON.parse(value);
					dispatch(GetLocalStorageList(a));
				}
			});
		} else {
			const nameList = JSON.parse(myStorage.readDataFromStorage(localStorageNameList));
			nameList && dispatch(GetLocalStorageList(nameList));
		}
	}, []);

	React.useEffect(() => {
		if (nameList.length >= 1) {
			const sortedArray = nameList.sort((a, b) => b.createdAt - a.createdAt);
			setNameList(sortedArray);
		}
	}, [nameList]);

	return (
		<View style={styles.listGroup}>
			{searchValues.length >= 1 ? (
				<SearchResult message='Search Results' resetNameList={resetNameList}></SearchResult>
			) : (
				isSearching && (
					<SearchResult
						message='Result not Found'
						resetNameList={resetNameList}
					></SearchResult>
				)
			)}
			{nameList.length >= 1 ? (
				<FlatList
					data={nameList}
					renderItem={({ item, index }) => (
						<View key={item.id} style={styles.listItem}>
							<View style={styles.itemBox}>
								<Text style={styles.item}>{index + 1}</Text>
								<Text style={styles.item}>{item.name}</Text>
							</View>
							<View style={styles.itemBox}>
								<TouchableOpacity
									style={{ marginEnd: 15 }}
									onPress={() => dispatch(OnNameEdit(item.name, item.id))}
								>
									<Entypo name='edit' size={19} color='black' />
								</TouchableOpacity>
								<TouchableOpacity onPress={() => dispatch(DeleteNames(item.id))}>
									<MaterialIcons name='delete' size={22} color='black' />
								</TouchableOpacity>
							</View>
						</View>
					)}
				/>
			) : (
				!isSearching && <Text style={styles.title}>Please add some names to get started</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	listGroup: {
		marginTop: 35,
		marginBottom: 35,
		zIndex:-1
	},
	listItem: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	item: {
		fontSize: 16.5,
		marginEnd: 10,
	},
	title: {
		fontSize: 15,
		textAlign: 'center',
	},
	itemBox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
	},
	searchBtn: {
		padding: 7,
		borderRadius: 5,
		borderColor: '#ccc',
		fontSize: 13.9,
		borderWidth: 1,
	},
	searchText: {
		fontSize: 14.7,
	},
});
