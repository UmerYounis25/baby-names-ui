import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'; 
import {DeleteNames} from "../store/actions/DeleteNames"
import { useDispatch } from 'react-redux';
export const ListGroup = () => {
	const dispatch = useDispatch()
    const { names, searchValues } = useSelector((state) => state.names);
	return (
		<View style={styles.listGroup}>
			{names.length >= 1 ? (
				<FlatList
					data={searchValues.length >= 1 ? searchValues : names}
					renderItem={({ item, index }) => (
						<View style={styles.listItem}>
							<View style={styles.textbox}>
								<Text style={styles.listItemText}>{index + 1}</Text>
								<Text style={styles.listItemText}>{item.name}</Text>
							</View>
							<TouchableOpacity onPress={() => dispatch(DeleteNames(item.id))}>
								<MaterialIcons name='delete' size={23} color='black' />
							</TouchableOpacity>
						</View>
					)}
				/>
			) : (
				<Text style={styles.listItemText}>Please add some names to get started</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	listGroup: {
		marginTop: 35,
		marginBottom: 35,
	},
	listItem: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		marginBottom: 5,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	listItemText: {
		fontSize: 16.5,
		marginEnd: 10,
	},
	textbox:{
		flexDirection: 'row',
	}
});
