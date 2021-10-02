import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

const TextInputComponent = ({ value, onChangeCallback, name, i, keyboardType = 'default' }) => {
	// Theme
	const theme = useSelector((state) => state.theme);
	// Font Size
	const fontSize = useSelector((state) => state.fontSize);

	// Styles
	const styles = StyleSheet.create({
		inputContainer: {
			backgroundColor: theme.elevation.medium || 'white',
			borderColor: 'grey',
			borderWidth: 1,
			marginVertical: 2,
			minHeight: fontSize.body + 10,
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
				onChangeCallback(name, e.nativeEvent.text, i); //... Bind the name here
			}}
		/>
	);
};

export default TextInputComponent;
