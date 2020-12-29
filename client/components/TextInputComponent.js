import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
// Basic Font
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';

// Text input Component
const TextInputComponent = ({ value, onChangeCallback, name, i, keyboardType = 'default' }) => {
	const theme = useSelector((state) => state.theme);
	// Font
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});
	// Styles
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: 'lightblue',
			alignItems: 'center',
			justifyContent: 'space-evenly',
		},
		peopleInputContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			borderWidth: 2,
			borderColor: 'red',
		},
		inputContainer: {
			backgroundColor: theme.elevation.medium || 'white',
			borderColor: 'grey',
			borderWidth: 1,
			marginVertical: 2,
			width: '90%',
			paddingHorizontal: 10,
			borderRadius: 3,
			color: theme.text.body || 'grey',
		},
	});
	// Styles
	return (
		<TextInput
			style={styles.inputContainer}
			value={value}
			keyboardType={keyboardType}
			onChange={(e) => {
				// console.log(name, e.nativeEvent.text, i, e);
				onChangeCallback(name, e.nativeEvent.text, i); //... Bind the name here
			}}
		/>
	);
};
// Text input Component

export default TextInputComponent;
