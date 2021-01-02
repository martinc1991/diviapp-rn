import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';

// Text input Component
const TextInputComponent = ({ value, onChangeCallback, name, i, keyboardType = 'default' }) => {
	// Theme
	const theme = useSelector((state) => state.theme);
	// Font Size
	const fontSize = useSelector((state) => state.fontSize);
	// Font
	const [fontsLoaded, error] = useFonts({
		ubuntu: Ubuntu_400Regular,
		ubuntuBold: Ubuntu_700Bold,
		ubuntuItalic: Ubuntu_400Regular_Italic,
	});
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
				// console.log(name, e.nativeEvent.text, i, e);
				onChangeCallback(name, e.nativeEvent.text, i); //... Bind the name here
			}}
		/>
	);
};
// Text input Component

export default TextInputComponent;
