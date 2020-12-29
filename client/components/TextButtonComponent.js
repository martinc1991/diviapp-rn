import React from 'react';
import { StyleSheet, Text, Dimensions, Pressable } from 'react-native';
// Basic Font
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';

export default function TextButtonComponent({ text, textColor, backgroundColor, onPress, onLongPress }) {
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});
	// Styles
	const styles = StyleSheet.create({
		button: {
			maxWidth: text.length * 10 + 40, // So the buttons dont take all the width available (Pretty exprimental)
			margin: 0,
			backgroundColor: backgroundColor || 'red',
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: 20,
			paddingVertical: 8,
			borderRadius: 3,
			// iOS shadow
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.22,
			shadowRadius: 2.22,
			// Android shadow
			elevation: 3,
		},
		text: {
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			color: textColor,
			fontSize: 18,
		},
	});
	// Styles
	return (
		<Pressable style={styles.button} onPress={onPress ? onPress : () => {}} onLongPress={onLongPress ? onLongPress : () => {}} delayLongPress={1000}>
			<Text style={styles.text}>{text || 'Insert Text'}</Text>
		</Pressable>
	);
}
