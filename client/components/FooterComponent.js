import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
// Ubuntu Font
import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
// Expo MailComposer (manage mailing)
import * as MailComposer from 'expo-mail-composer';
// Expo WebBrowser (manage links to the web)
import * as WebBrowser from 'expo-web-browser';
// Icon Components
import LinkedinIconComponent from '../components/icons/LinkedinIconComponent';
import EmailIconComponent from '../components/icons/EmailIconComponent';
import GitHubIconComponent from '../components/icons/GitHubIconComponent';

// Platform
const platform = Platform.OS;

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FooterComponent = () => {
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
						recipients: ['martincatala14@gmail.com'],
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

	const styles = StyleSheet.create({
		footerContainer: {
			alignSelf: 'center',
			borderColor: theme.text.disabled,
			borderTopWidth: 1,
			maxWidth: windowWidth * 0.85,
			width: 400,
			paddingVertical: 10,
			marginTop: 40,
		},
		contactIconsContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			maxWidth: windowWidth * 0.85,
			width: 400,
			marginVertical: 10,
		},
		lastLineContainer: {
			alignSelf: 'center',
			maxWidth: windowWidth * 0.5,
			width: 200,
			marginTop: 15,
			paddingVertical: 5,
		},
		textBody: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.disabled || 'lightgrey',
			// fontWeight: 'bold',
			lineHeight: 30,
			textAlign: 'center',
		},
		lastLineText: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.disabled || 'lightgrey',
			// fontWeight: 'bold',
			lineHeight: 30,
			textAlign: 'center',
		},
	});
	return (
		<View style={styles.footerContainer}>
			<View>
				<Text style={styles.textBody}>Contacto</Text>
				<View style={styles.contactIconsContainer}>
					<TouchableOpacity onPress={() => handleLinkToContactMe('linkedin')}>
						<LinkedinIconComponent size={1} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleLinkToContactMe('github')}>
						<GitHubIconComponent size={1} color={theme.text.body} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleLinkToContactMe('mail')}>
						<EmailIconComponent size={4} topColor={theme.primary} bottomColor={theme.primary} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.lastLineContainer}>
				<Text style={styles.lastLineText}>DiviApp - 2021</Text>
			</View>
		</View>
	);
};

export default FooterComponent;
