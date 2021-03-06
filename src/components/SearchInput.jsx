import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { searchNames } from '../store/actions/SearchNames';

export const SearchInput = () => {
	const {clearSearchInput}= useSelector((state) => state.names);
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = React.useState('');
	const [searchError, setSearchError] = React.useState('');

	React.useEffect(() => {
		clearSearchInput&&setSearchTerm('');
	}, [clearSearchInput]);

	return (
		<View>
			<View style={styles.inputGroup}>
				<TextInput
					style={styles.input}
					placeholder='Search name'
					value={searchTerm}
					onChangeText={(text) => {
						setSearchTerm(text.trim());
					}}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						searchTerm.length >= 1
							? setSearchError('')
							: setSearchError('Please enter the valid value');
						dispatch(searchNames(searchTerm));
					}}
				>
					<Text style={styles.btnText}>Search</Text>
				</TouchableOpacity>
			</View>
			{searchError.length >= 1 && <Text style={styles.error}>{searchError}</Text>}
		</View>
	);
}

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
