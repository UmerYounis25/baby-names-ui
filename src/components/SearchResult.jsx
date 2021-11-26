import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { ClearSearch } from '../store/actions/ClearSearch';

const SearchResult = ({ message, resetNameList }) => {
	const dispatch = useDispatch();

	return (
		<View style={styles.searchBox}>
			<Text style={styles.searchText}>{message}</Text>
			<TouchableOpacity
				style={styles.searchBtn}
				onPress={() => {
					dispatch(ClearSearch());
					resetNameList();
				}}
			>
				<Text>Clear Search</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
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

export default SearchResult;
