import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../store/actions/AddNames';
import { UpdateNames } from '../store/actions/UpdateNames';

export const AddInput = () => {
	const dispatch = useDispatch();
	const [addTerm, setAddTerm] = React.useState('');
	const [AddError, setAddError] = React.useState('');
	const {editedName}=useSelector((state) => state.names);

	useEffect(() => {
		if (editedName) {
			setAddTerm(editedName.name);
		}
	}, [editedName]);

	return (
		<View>
			{AddError.length >= 1 && <Text style={styles.error}>{AddError}</Text>}
			<View style={styles.inputGroup}>
				<TextInput
					style={styles.input}
					placeholder='Add name'
					value={addTerm}
					onChangeText={(text) => setAddTerm(text.trim())}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						if(addTerm.length >= 1) {
							setAddError('');
							setAddTerm('');
							if(editedName.name){
								dispatch(UpdateNames(addTerm, editedName.id));
							}else{
								dispatch(addName(addTerm));
							}

						}else{
							setAddError('Please enter a name');
						}
					}}
				>
					<Text style={styles.btnText}>Add</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		marginTop: 10,
		marginBottom: 10,
		fontSize: 16.5,
		flex: 1,
	},
	button: {
		backgroundColor: 'black',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		padding: 13,
	},
	btnText: {
		color: '#fff',
	},
	error: {
		color: 'red',
	},
});
