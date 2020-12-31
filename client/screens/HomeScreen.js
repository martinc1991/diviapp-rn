import React, { useState } from 'react';
import { Appearance, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MainHomeButton from '../components/MainHomeButton';
// Basic Font
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation }) {
	console.log('render');
	console.log(Appearance.getColorScheme());
	const dispatch = useDispatch();

	const theme = useSelector((state) => state.theme);
	const [isEnabled, setIsEnabled] = useState(false);
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});
	console.log(theme);

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
			fontFamily: fontsLoaded ? 'basic' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: 18,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			fontWeight: 'bold',
			marginBottom: 5,
			maxWidth: '70%',
		},
		textBody: {
			fontFamily: fontsLoaded ? 'basic' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: 14,
			color: theme.text.body || 'lightgrey',
			fontWeight: 'bold',
		},
	});

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ width: windowWidth }}>
				<View style={styles.proximamenteContainer}>
					<Text style={styles.textTitle}>Bienvenido, que te gustaría hacer hoy?</Text>
					<MainHomeButton navigation={navigation} backgroundColor={theme.primary} buttonText={'Cálculo rápido'} linkTo='BasicCalculation' />
					<MainHomeButton navigation={navigation} backgroundColor={theme.secondary} buttonText={'Acerca de esta app'} linkTo='About' />
				</View>
				<View style={styles.proximamenteContainer}>
					<Text style={styles.textTitle}>Proximamente</Text>
					<MainHomeButton navigation={navigation} buttonText={'Cálculo personalizado'} linkTo='' disabled={true} />
					<MainHomeButton navigation={navigation} buttonText={'Modo Vacaciones'} linkTo='' disabled={true} />
					<MainHomeButton navigation={navigation} buttonText={'Contactos'} linkTo='' disabled={true} />

					{/* <Button title='Calculo Basico' onPress={() => navigation.navigate('BasicCalculation')} /> */}
					{/* <Button title='Acerca de' onPress={() => navigation.navigate('About')} /> */}
					{/* <Button title='Cambiar Tema' onPress={() => dispatch(changeTheme)} /> */}
				</View>
			</ScrollView>
		</View>
	);
}
