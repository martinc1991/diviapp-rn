import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainHomeButton({ navigation, backgroundColor, fontColor, buttonText, linkTo, disabled = false }) {
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});

	const styles = StyleSheet.create({
		container: {
			backgroundColor: !disabled ? backgroundColor || 'orange' : 'grey',
			width: 0.9 * windowWidth,
			height: 120,
			borderRadius: 15,
			padding: 20,
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
		text: {
			color: fontColor || 'white',
			fontSize: 24,
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			// backgroundColor: 'navy',
			width: '60%',
			lineHeight: 24,
		},
	});

	return (
		<View>
			<TouchableOpacity style={styles.container} onPress={() => navigation.navigate(linkTo)}>
				<Text style={styles.text}>{buttonText || 'Este es un Boton principal'} </Text>
			</TouchableOpacity>
		</View>
	);
}
