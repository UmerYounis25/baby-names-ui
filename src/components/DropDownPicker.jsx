import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { SortItems } from '../store/actions/SortItems';

const DropDownPicker = ({ filterlist }) => {
	const dispatch = useDispatch();
	const [selectedOption, setSelectedOption] = useState('');
	const [open, setOpen] = useState(false);
	const [list, setList] = useState([]);

	useEffect(() => {
		dispatch(SortItems(selectedOption));
	}, [selectedOption]);

	useEffect(() => {
		setList(filterlist);
        setSelectedOption(filterlist[0]);
	}, [list]);

	return (
		<View style={styles.dropDownPicker}>
			<TouchableOpacity style={styles.dropDownPickerButton} onPress={() => setOpen(!open)}>
				<Text style={styles.dropDownPickerButtonText}>{selectedOption}</Text>
				<Entypo name='triangle-down' size={20} color='black' />
			</TouchableOpacity>
			{open && (
				<View style={styles.manu}>
					{list.length>=1 && list.map((item) => {
						return (
							<Text style={styles.manuItem} onPress={() => {
                                setSelectedOption(item) 
                                setOpen(false)
                                }}>
								{item}
							</Text>
						);
					})}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	dropDownPicker: {
		position: 'relative',
		zIndex: 99999,
	},
	dropDownPickerButton: {
		width: 90,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical:5,
    	flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	manu: {
		width: 130,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 8,
		padding: 7,
		right: 0,
		position: 'absolute',
		top: 40,
		backgroundColor: '#fff',
		zIndex: 99999,
	},
	manuItem: {
		backgroundColor: '#fff',
		padding: 5,
	},
});

export default DropDownPicker;
