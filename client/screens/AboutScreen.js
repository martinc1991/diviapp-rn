import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, Platform, View, ScrollView, Dimensions, Pressable, Modal, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments, resetCurrentPayment } from '../redux/actions/paymentActions';
import Clipboard from 'expo-clipboard';
// Expo WebBrowser (manage links to the web)
import * as WebBrowser from 'expo-web-browser';
// Expo MailComposer (manage mailing)
import * as MailComposer from 'expo-mail-composer';
// Image Components
import PlanetIconComponent from '../components/icons/PlanetIconComponent';
import LaunchingImageComponent from '../components/icons/LaunchingImageComponent';
import MakerLaunchImageComponent from '../components/icons/MakerLaunchImageComponent';
import OuterSpaceImageComponent from '../components/icons/OuterSpaceImageComponent';
import StarryWindowImageComponent from '../components/icons/StarryWindowImageComponent';
import ToTheMoonImageComponent from '../components/icons/ToTheMoonImageComponent';
import VoidImageComponent from '../components/icons/VoidImageComponent';
// Icon Components
import LinkedinIconComponent from '../components/icons/LinkedinIconComponent';
import GitHubIconComponent from '../components/icons/GitHubIconComponent';
import EmailIconComponent from '../components/icons/EmailIconComponent';

// Text input component
import TextButtonComponent from '../components/TextButtonComponent';

// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Platform
const platform = Platform.OS;

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// My age calculation

const myDob = new Date('1991/08/22');
const today = new Date();

function dateDiffInYears(dateold, datenew) {
	var ynew = datenew.getFullYear();
	var mnew = datenew.getMonth();
	var dnew = datenew.getDate();
	var yold = dateold.getFullYear();
	var mold = dateold.getMonth();
	var dold = dateold.getDate();
	var diff = ynew - yold;
	if (mold > mnew) diff--;
	else {
		if (mold == mnew) {
			if (dold > dnew) diff--;
		}
	}
	return diff;
}
const years = dateDiffInYears(myDob, today);
// My age calculation

export default function AboutScreen() {
	console.log('render');
	const dispatch = useDispatch();
	// Redux States
	const payments = useSelector((state) => state.payments.current);
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

	// Functions
	const handleLinkToContactMe = async function (platform) {
		switch (platform) {
			case 'linkedin':
				// alert(platform);
				WebBrowser.openBrowserAsync('https://www.linkedin.com/in/mcatala-dvlpr/');
				break;
			case 'github':
				// alert(platform);
				WebBrowser.openBrowserAsync('https://github.com/martinc1991');
				break;
			case 'mail':
				// alert(platform);
				// This verification is because mailcomposer cant be used on iOS simulator (it will return 'true' in bluestacks thoug you cant use the mail app there)
				if (MailComposer.isAvailableAsync()) {
					MailComposer.composeAsync({
						ecipients: ['martincatala14@gmail.com'],
						// ccRecipients: ['martincatala14@gmail.com'],
						// bccRecipients: ['martincatala14@gmail.com'],
						subject: 'Me contacto desde la DiviApp',
						body: 'Hola, vi tu aplicación y me gustaría que estemos en contacto!',
						isHtml: false,
						// attachments: [],
					});
				} else {
					alert('No se pueden enviar emails desde esta plataforma.');
				}
				break;

			default:
				break;
		}
	};

	// Styles
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.background,
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		titleContainer: {
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		bodyContainer: {
			alignItems: 'center',
			justifyContent: 'flex-start',
			maxWidth: windowWidth * 0.85,
			width: 400,
			marginVertical: 10,
		},
		listElementContainer: {
			// borderWidth: 1,
			// borderColor: 'red',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			maxWidth: windowWidth * 0.85,
			width: 400,
			marginVertical: 20,
		},
		listTextContainer: {
			// flex: 8,
			// flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginLeft: 35,
			maxWidth: 300,
			// width: windowWidth * 0.85,
			// marginVertical: 40,
		},
		listNumberContainer: {
			// flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: theme.primary,
			width: 50,
			height: 50,
			borderRadius: 50,
		},
		imageContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			// maxWidth: 400,
			// width: windowWidth * 0.85,
			marginVertical: 20,
			// borderColor: 'red',
			// borderWidth: 1,
		},
		lastImageContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			// maxWidth: 400,
			// width: windowWidth * 0.85,
			marginVertical: 20,
			left: '2%',
			// borderColor: 'red',
			// borderWidth: 1,
		},
		contactIconsContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			maxWidth: windowWidth * 0.85,
			width: 400,
			marginVertical: 26,
		},
		footerContainer: {
			borderColor: theme.text.disabled,
			borderTopWidth: 1,
			maxWidth: windowWidth * 0.85,
			width: 400,
			paddingVertical: 10,
		},
		textTitle: {
			fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.title,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			marginBottom: 5,
		},
		textBody: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.body || 'lightgrey',
			// fontWeight: 'bold',
			lineHeight: 26,
			textAlign: 'center',
		},
		textnumberList: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.title,
			color: 'white',
			textAlign: 'center',
			// fontWeight: 'bold',
			// lineHeight: 20,
		},
		textListBody: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.body || 'lightgrey',
			// fontWeight: 'bold',
			lineHeight: 26,
			// textAlign: 'center',
		},
		textBodyItalic: {
			fontFamily: fontsLoaded ? 'ubuntuItalic' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.body,
			// fontWeight: 'bold',
			lineHeight: 26,
			textAlign: 'center',
		},
		textHighlight: {
			fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.primary,
			// fontWeight: 'bold',
			lineHeight: 26,
			textAlign: 'center',
		},
		textHyperlink: {
			fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.primary || 'teal',
			// fontWeight: 'bold',
			lineHeight: 26,
			textAlign: 'center',
			textDecorationLine: 'underline',
		},
		separator: {
			alignSelf: 'center',
			borderColor: theme.secondary,
			borderTopWidth: 2,
			maxWidth: windowWidth * 0.85,
			width: 400,
			// paddingVertical: 10,
			marginVertical: 20,
		},
	});
	// Styles

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ width: windowWidth, alignItems: 'center', padding: 15 }}>
				<View style={styles.titleContainer}>
					<Text style={styles.textTitle}>Acerca de DiviApp</Text>
				</View>

				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>
						Esta app nace como un proyecto de práctica para asentar los conocimientos adquiridos durante mi entrenamiento en{' '}
						<Text
							style={styles.textHyperlink}
							onPress={() => {
								alert('link');
								WebBrowser.openBrowserAsync('https://www.soyhenry.com/');
							}}
						>
							HENRY
						</Text>
						, donde aprendí un montón. Sin embargo, al terminar sentí dos cosas: primero, que no todo lo aprendido estaba 100% afirmado en mi cabeza, y segundo, que había compañeros que sabían muchas cosas que yo no. Entonces decidí crear una aplicación para asentar/adquirir dichos conocimientos, pero con una restricción: <Text style={styles.textHighlight}>no podía ser una aplicación que careciera de utilidad.</Text>
					</Text>
				</View>
				<View style={styles.imageContainer}>
					<StarryWindowImageComponent size={16} planetColor={theme.secondary} shirtColor={theme.primary} leafColor={theme.primary} pantsColor={theme.text.disabled} windowColor={theme.background} backgroundColor={theme.elevation.medium} hairColor='#121212' />
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>
						¿Cuál podría ser esa necesidad del común de las personas que no haga que sea una aplicación extremadamente compleja (y por la tanto costosa en tiempo)? Ahí se me ocurrió que una situación muy común entre amigos es la de <Text style={styles.textHighlight}>dividir gastos después de un asado o un día en el río.</Text> Inmediatamente después, se me comenzaron a ocurrir distintas características adicionales que podría meterle para tacklear distintos escenarios (el Modo Vacaciones, por ejemplo). Ya no era simplemente una aplicación de práctica, se había convertido en un <Text style={styles.textHighlight}>pet project.</Text>
					</Text>
				</View>
				<View style={styles.imageContainer}>
					<VoidImageComponent size={16} bigCircleColor={theme.secondary} ballsColor={theme.secondary} pantsColor={theme.text.disabled} floorColor={theme.elevation.low} shirtColor={theme.primary} hairColor='#121212' shoesColor='#121212' />
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>
						“Vestime despacio que estoy apurado” me decía siempre mi papá cuando venia a vestirme para irme al jardín. Y como tengo muchas ideas que implementar, decidí
						<Text style={styles.textHighlight}> organizar el proyecto etapas:</Text>
					</Text>
				</View>
				{/* First List Element */}
				<View style={styles.listElementContainer}>
					<View style={styles.listNumberContainer}>
						<Text style={styles.textnumberList}>1</Text>
					</View>
					<View style={styles.listTextContainer}>
						<Text style={styles.textListBody}>
							La primera (la actual) se llama <Text style={styles.textHighlight}>“moonlanding”</Text> y consiste en setear las bases del proyecto para acelerar el crecimiento futuro (que sea escalable) además de brindar un mínimo de utilidad.
						</Text>
					</View>
				</View>
				{/* First List Element */}
				<View style={styles.imageContainer}>
					<ToTheMoonImageComponent size={16} planetColor={theme.secondary} windowColor={theme.primary} moonColor={theme.text.disabled} backgroundColor={theme.elevation.medium} helmetColor={theme.primary} wavesColor={theme.primary} />
				</View>

				{/* Second List Element */}
				<View style={styles.listElementContainer}>
					<View style={styles.listNumberContainer}>
						<Text style={styles.textnumberList}>2</Text>
					</View>
					<View style={styles.listTextContainer}>
						<Text style={styles.textListBody}>
							La segunda etapa se llama <Text style={styles.textHighlight}>“moonbasing”</Text> y en ella se implementarán características más avanzadas. Si bien se sumarán nuevos modos de uso, el objetivo es hacerla <Text style={styles.textBodyItalic}>más amigable para el usuario.</Text>
						</Text>
					</View>
				</View>
				{/* Second List Element */}

				<View style={styles.imageContainer}>
					<MakerLaunchImageComponent size={16} windowColor={theme.primary} pantsColor={theme.text.disabled} backgroundColor={theme.elevation.medium} hairColor='#121212' />
				</View>
				{/* Third List Element */}
				<View style={styles.listElementContainer}>
					<View style={styles.listNumberContainer}>
						<Text style={styles.textnumberList}>3</Text>
					</View>
					<View style={styles.listTextContainer}>
						{/* <Text style={styles.textTitle}>Moongrowing</Text> */}
						<Text style={styles.textListBody}>
							La tercera y última (por ahora) se llama <Text style={styles.textHighlight}>“moongrowing”</Text> y, si bien aún está poco definida, aquí las funcionalidades de las fases anteriores estarán completas y nuevas características más innovadoras estarían en construcción.
						</Text>
					</View>
				</View>
				{/* Third List Element */}
				<View style={styles.imageContainer}>
					<OuterSpaceImageComponent size={16} backgroundColor={theme.elevation.medium} fireColor={theme.primary} windowsColor={theme.primary} />
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>
						Así en la conquista del espacio como en el desarrollo de aplicaciones, no hay certezas y todo puede suceder. Pero algo es seguro,
						<Text style={styles.textHighlight}> el camino será emocionante!</Text>
					</Text>
				</View>
				<View style={styles.separator}></View>
				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>
						Mi nombre es Martín Catalá, tengo {years} años, soy <Text style={styles.textHighlight}>Desarrollador Web Full Stack</Text> (aunque me gusta más el front-end), amante de la buena música 🎵 y entusiasta de todo lo relacionado al espacio exterior 🚀.
					</Text>
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>Si te gustó esta app y/o tenés alguna sugerencia o idea, no dudes en contactarme:</Text>
				</View>
				<View style={styles.contactIconsContainer}>
					<TouchableOpacity onPress={() => handleLinkToContactMe('linkedin')}>
						<LinkedinIconComponent size={18} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleLinkToContactMe('github')}>
						<GitHubIconComponent size={18} color={theme.text.body} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleLinkToContactMe('mail')}>
						<EmailIconComponent size={9} topColor={theme.primary} bottomColor={theme.primary} />
					</TouchableOpacity>
				</View>
				<View style={styles.bodyContainer}>
					<Text style={styles.textBody}>( También podes buscarme en PokemonShowdown como bit90 😉 )</Text>
				</View>

				{/* <LaunchingImageComponent size={18} /> */}
				<View style={styles.lastImageContainer}>
					<PlanetIconComponent size={15} planetColor={theme.secondary} carColor={theme.primary} circlesColor={theme.primary} starsColor={theme.primary} />
				</View>
				<View style={styles.footerContainer}>
					<Text style={styles.textBody}>DiviApp - 2021</Text>
				</View>
			</ScrollView>
		</View>
	);
}
