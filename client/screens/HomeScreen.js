import React, { useState } from 'react';
import { Appearance, ScrollView, StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MainHomeButton from '../components/MainHomeButton';
// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
import FooterComponent from '../components/FooterComponent';

// Platform
const platform = Platform.OS;

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation }) {
	// console.log('render');
	// console.log(Appearance.getColorScheme());
	const dispatch = useDispatch();
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
	// console.log(theme);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.background || 'red',
			alignItems: 'center',
			// justifyContent: 'space-evenly',
		},
		proximamenteContainer: {
			marginVertical: 20,
			alignItems: 'center',
		},
		textTitle: {
			fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.title,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			// fontWeight: 'bold',
			marginBottom: 5,
			maxWidth: '70%',
		},
		textSubtitle: {
			fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.caption.regular,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			// fontWeight: 'bold',
			marginBottom: 5,
			maxWidth: '90%',
		},
	});

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ width: windowWidth }}>
				<View style={styles.proximamenteContainer}>
					<Text style={styles.textTitle}>Bienvenido 😁</Text>
					<Text style={styles.textSubtitle}>Qué te gustaría hacer hoy?</Text>
					<MainHomeButton navigation={navigation} backgroundColor={theme.primary} buttonText={'Cálculo rápido'} linkTo='BasicCalculation' iconName={'git-network'} />
					<MainHomeButton navigation={navigation} backgroundColor={theme.secondary} buttonText={'Acerca de DiviApp'} linkTo='About' iconName={'planet'} />
				</View>
				<View style={styles.proximamenteContainer}>
					<Text style={styles.textTitle}>Próximamente</Text>
					<MainHomeButton navigation={navigation} buttonText={'Cálculo personalizado'} linkTo='' disabled={true} iconName={'options'} />
					<MainHomeButton navigation={navigation} buttonText={'Modo Vacaciones'} linkTo='' disabled={true} iconName={'map'} />
					<MainHomeButton navigation={navigation} buttonText={'Contactos'} linkTo='' disabled={true} iconName={'people'} />
				</View>
				<FooterComponent />
			</ScrollView>
		</View>
	);
}
