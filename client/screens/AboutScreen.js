import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Dimensions, Pressable, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments, resetCurrentPayment } from '../redux/actions/paymentActions';
import Clipboard from 'expo-clipboard';
// image Components
import PlanetIconComponent from '../components/icons/PlanetIconComponent';
import LaunchingImageComponent from '../components/icons/LaunchingImageComponent';
import MakerLaunchImageComponent from '../components/icons/MakerLaunchImageComponent';
import OuterSpaceImageComponent from '../components/icons/OuterSpaceImageComponent';
import StarryWindowImageComponent from '../components/icons/StarryWindowImageComponent';
import ToTheMoonImageComponent from '../components/icons/ToTheMoonImageComponent';
import VoidImageComponent from '../components/icons/VoidImageComponent';
// Text input component
import TextButtonComponent from '../components/TextButtonComponent';

// Basic Font
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AboutScreen() {
	console.log('render');
	const dispatch = useDispatch();
	// Redux States
	const payments = useSelector((state) => state.payments.current);
	const theme = useSelector((state) => state.theme);
	// Font
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});

	// Styles
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.background,
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		textTitle: {
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			fontSize: 20,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			marginBottom: 5,
		},
		textBody: {
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			fontSize: 14,
			color: theme.text.body || 'lightgrey',
			// fontWeight: 'bold',
		},
		textTitleResults: {
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			fontSize: 16,
			color: theme.text.caption || 'red',
			textAlign: 'center',
			marginBottom: 10,
		},
		textResults: {
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			fontSize: 14,
			color: theme.text.body || 'red',
			textAlign: 'center',
			marginBottom: 10,
		},
	});
	// Styles

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ width: windowWidth, alignItems: 'center' }}>
				<View>
					<Text style={styles.textTitle}>Acerca de Diviapp</Text>
				</View>
				{/* <Text>Anianiay</Text> */}
				<PlanetIconComponent size={18} />
				<LaunchingImageComponent size={18} />
				<MakerLaunchImageComponent size={18} />
				<OuterSpaceImageComponent size={17} />
				<StarryWindowImageComponent size={18} />
				<ToTheMoonImageComponent size={11} />
				<VoidImageComponent size={10} />
			</ScrollView>
		</View>
	);
}
