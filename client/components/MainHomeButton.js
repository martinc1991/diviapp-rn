import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Platform } from 'react-native';
// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Platform
const platform = Platform.OS;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainHomeButton({ navigation, backgroundColor, fontColor, buttonText, linkTo, disabled = false, iconColor = 'teal', iconName = 'ios-analytics' }) {
	// Font
	const [fontsLoaded, error] = useFonts({
		ubuntu: Ubuntu_400Regular,
		ubuntuBold: Ubuntu_700Bold,
		ubuntuItalic: Ubuntu_400Regular_Italic,
	});

	const styles = StyleSheet.create({
		container: {
			backgroundColor: !disabled ? backgroundColor || 'orange' : 'grey',
			width: 0.9 * windowWidth,
			maxWidth: 500,
			height: 0.17 * windowHeight,
			maxHeight: 150,
			borderRadius: 15,
			// padding: 20,
			marginVertical: 5,
			flexDirection: 'row',
			alignItems: 'flex-end',
			// Shadow for iOS
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.23,
			shadowRadius: 2.62,
			// Shadow for Android
			elevation: 4,
		},
		leftContainer: {
			flex: 6,
			flexDirection: 'row',
			alignItems: 'flex-start',
			padding: 20,
			// backgroundColor: 'blue',
		},
		rightContainer: {
			// flex: 3,
			height: '100%',
			justifyContent: 'center',
			alignItems: 'flex-end',
			paddingRight: 10,
			// left: 50,
			// bottom: 30,
			// backgroundColor: 'steelblue',
		},
		text: {
			color: fontColor || 'white',
			fontSize: fontSize.title,
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			// backgroundColor: 'navy',
			width: '60%',
			lineHeight: 24,
		},
	});

	return (
		<View>
			<TouchableOpacity style={styles.container} onPress={!disabled ? () => navigation.navigate(linkTo) : () => console.log('Proximamente')}>
				<View style={styles.leftContainer}>
					<Text style={styles.text}>{buttonText || 'Este es un Boton principal'} </Text>
				</View>
				<View style={styles.rightContainer}>
					<Ionicons name={iconName} color='rgba(60,60,60,0.2)' size={0.12 * windowHeight}></Ionicons>
				</View>
			</TouchableOpacity>
		</View>
	);
}
