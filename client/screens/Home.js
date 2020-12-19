import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments } from '../redux/actions/paymentActions';

const TextInputComponent = ({ value, onChangeText, name, i }) => (
	<TextInput
		style={styles.inputContainer}
		value={value}
		onChangeText={(value) => onChangeText(name, value, i)} //... Bind the name here
	/>
);

export default function Home() {
	console.log('render');
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const payments = useSelector((state) => state.payments.payments);
	// console.log(payments);
	const [peopleForCalcs, setPepopleForCalcs] = useState([
		{ name: '', spent: '' },
		{ name: '', spent: '' },
		{ name: '', spent: '' },
	]);

	// useEffect(() => {
	// 	dispatch(getUsers());
	// 	dispatch(getPayments(peopleForCalcs));
	// }, []);

	const handleChange = function (name, value, i) {
		var newPeopleForCalcs = [...peopleForCalcs];
		if (name === 'spent') {
			newPeopleForCalcs[i][name] = Number.parseInt(value);
		}
		newPeopleForCalcs[i][name] = value;
		setPepopleForCalcs(newPeopleForCalcs);
		// console.log(peopleForCalcs);
	};

	// Submit
	const handleSubmit = function () {
		// console.table(peopleForCalcs);
		var infoToBeSent = [];
		peopleForCalcs.map((person) => {
			infoToBeSent.push({ name: person.name, spent: parseInt(person.spent) });
		});
		// console.table(infoToBeSent);
		dispatch(getPayments(infoToBeSent));
	};

	const handleAddPeople = function () {
		setPepopleForCalcs([...peopleForCalcs, { name: '', spent: '' }]);
	};

	return (
		<View style={styles.container}>
			<Text>Quienes y cuanto gastaron?</Text>
			{peopleForCalcs.map((person, i, arr) => {
				return (
					<View style={styles.peopleInputContainer} key={i}>
						<Text>Persona {i + 1}</Text>
						{/* Nombres */}
						<TextInputComponent value={peopleForCalcs[i].name} onChangeText={handleChange} name={'name'} i={i} />
						{/* Montos */}
						<TextInputComponent value={peopleForCalcs[i].spent} onChangeText={handleChange} name={'spent'} i={i} />
					</View>
				);
			})}
			<Button title='Agregar persona' onPress={handleAddPeople} />
			<View>
				{payments && payments.length > 0 ? (
					payments.map((payment, i) => {
						return <Text key={i}>{payment.pago}</Text>;
					})
				) : (
					<Text>No payments yet</Text>
				)}
			</View>

			<Button title='Enviar' onPress={handleSubmit} />
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
