// Ubuntu Font
import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import React from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../components/organisms/FooterComponent';
import MainHomeButton from '../components/atoms/MainHomeButton';

// Platform
const platform = Platform.OS;

// Dimensions
const { windowWidth, windowHeight } = Dimensions.get('window');

export default function Home({ navigation }) {
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

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.background || 'red',
			alignItems: 'center',
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
			marginBottom: 5,
			maxWidth: '70%',
		},
		textSubtitle: {
			fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.caption.regular,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			marginBottom: 5,
			maxWidth: '90%',
		},
	});

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: windowWidth }}>
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
