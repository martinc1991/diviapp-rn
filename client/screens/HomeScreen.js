import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments } from '../redux/actions/paymentActions';
import Clipboard from 'expo-clipboard';

export default function Home({ navigation }) {
	console.log('render');
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const payments = useSelector((state) => state.payments.current);
	// console.log(payments);

	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Button title='Calculo Basico' onPress={() => navigation.navigate('BasicCalculation')} />
			<Button title='Acerca de' onPress={() => navigation.navigate('About')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightblue',
		alignItems: 'center',
		justifyContent: 'space-evenly',
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
});
