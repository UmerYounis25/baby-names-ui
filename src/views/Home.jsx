import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { AddInput, ListGroup, SearchInput, FilterBy } from '../components/';

export default function App() {
	const { names } = useSelector((state) => state.names);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.heading}>Baby Names</Text>
				<SearchInput />
				{names.length >= 1 && <FilterBy />}
				<ListGroup />
				<AddInput />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ebeef0db',
		alignItems: 'center',
		height: '100%',
	},
	card: {
		backgroundColor: '#fff',
		marginTop: 40,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		paddingHorizontal: 24,
		paddingVertical: 40,
		borderRadius: 15,
		shadowOpacity: 0.1,
		shadowRadius: 9,
		width: '88%',
	},
	heading: {
		fontSize: 28,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 30,
	},
});
