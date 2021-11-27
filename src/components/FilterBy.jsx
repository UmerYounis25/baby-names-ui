import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from './DropDownPicker';

export const FilterBy = () => {
	return (
		<View style={styles.container}>
			<Text style={{fontSize:16}}>Filter By</Text>
			<DropDownPicker filterlist={['name', 'length','date']} />
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
		marginTop: 17,
		paddingHorizontal: 10,
    }
});
