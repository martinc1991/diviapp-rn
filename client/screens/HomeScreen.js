import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { changeTheme } from '../redux/actions/themeActions';
import Clipboard from 'expo-clipboard';
import { Appearance } from 'react-native';
import MainHomeButton from '../components/MainHomeButton';

export default function Home({ navigation }) {
	console.log('render');
	console.log(Appearance.getColorScheme());
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const payments = useSelector((state) => state.payments.current);
	const theme = useSelector((state) => state.theme);
	const [isEnabled, setIsEnabled] = useState(false);
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
			fontSize: 18,
			textAlign: 'center',
			color: theme.text.title || 'gold',
			fontWeight: 'bold',
			marginBottom: 5,
			maxWidth: '70%',
		},
		textBody: {
			fontSize: 24,
			color: theme.text.body || 'gold',
			fontWeight: 'bold',
		},
	});

	return (
		<View style={styles.container}>
			<ScrollView>
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
