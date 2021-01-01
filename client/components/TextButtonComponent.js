import React from 'react';
import { StyleSheet, Text, Dimensions, Pressable, Platform } from 'react-native';
// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
import fontSize from '../theme/fontSize';

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Platform
const platform = Platform.OS;

export default function TextButtonComponent({ text, textColor, backgroundColor, onPress, onLongPress }) {
	// Font
	const [fontsLoaded, error] = useFonts({
		ubuntu: Ubuntu_400Regular,
		ubuntuBold: Ubuntu_700Bold,
		ubuntuItalic: Ubuntu_400Regular_Italic,
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
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			color: textColor,
			fontSize: fontSize.body,
		},
	});
	// Styles
	return (
		<Pressable style={styles.button} onPress={onPress ? onPress : () => {}} onLongPress={onLongPress ? onLongPress : () => {}} delayLongPress={1000}>
			<Text style={styles.text}>{text || 'Insert Text'}</Text>
		</Pressable>
	);
}
