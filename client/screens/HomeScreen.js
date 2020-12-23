import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
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
		peopleInputContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			borderWidth: 2,
			borderColor: 'red',
		},
		inputContainer: {
			backgroundColor: 'white',
			borderColor: 'grey',
			borderWidth: 1,
			marginVertical: 2,
			width: '40%',
		},
		text: {
			fontSize: 44,
			color: theme.font || 'gold',
			fontWeight: 'bold',
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home</Text>
			<MainHomeButton navigation={navigation} backgroundColor={theme.font} fontColor={theme.background} buttonText={'Calculo Basico'} linkTo='BasicCalculation' />
			<MainHomeButton navigation={navigation} buttonText={'About'} linkTo='About' disabled={true} />
			{/* <Button title='Calculo Basico' onPress={() => navigation.navigate('BasicCalculation')} /> */}
			{/* <Button title='Acerca de' onPress={() => navigation.navigate('About')} /> */}
			{/* <Button title='Cambiar Tema' onPress={() => dispatch(changeTheme)} /> */}
			<Switch
				trackColor={{ false: theme.font, true: theme.font }}
				thumbColor={!isEnabled ? 'orange' : 'darkorange'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={() => {
					setIsEnabled((previousState) => !previousState);
					dispatch(changeTheme);
				}}
				value={theme.isDark}
			></Switch>
		</View>
	);
}
