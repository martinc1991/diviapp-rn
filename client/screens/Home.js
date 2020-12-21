import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments } from '../redux/actions/paymentActions';

const TextInputComponent = ({ value, onChangeCallback, name, i }) => (
	<TextInput
		style={styles.inputContainer}
		value={value}
		onChange={(e) => {
			console.log(name, e.target.value, i, e);
			onChangeCallback(name, e.target.value, i); //... Bind the name here
		}}
	/>
);

const iteratorFunction = function (n, element) {
	let result = [];
	for (let i = 0; i < n; i++) {
		result.push(element);
	}
	return result;
};

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
		if (name === 'spent' && Number.parseInt(value)) {
			newPeopleForCalcs[i][name] = Number.parseInt(value);
			// console.log('dentro del if', newPeopleForCalcs[i][name]);
		} else {
			// Si un valor con name === spent entra aca es porque esta pasando letras (o algo que no son numeros al input)
			newPeopleForCalcs[i][name] = value;
		}
		setPepopleForCalcs(newPeopleForCalcs);
		// console.log(peopleForCalcs);
	};

	// Add and remove people
	const handleAddPeople = function () {
		setPepopleForCalcs([...peopleForCalcs, { name: '', spent: '' }]);
	};

	const handleRemovePeople = function (i) {
		console.log('remove single people');
		var newPeopleForCalcs = [...peopleForCalcs];
		newPeopleForCalcs.splice(i, 1);
		setPepopleForCalcs(newPeopleForCalcs);
	};

	// Submit
	const handleSubmit = function () {
		console.table(peopleForCalcs);
		dispatch(getPayments(peopleForCalcs));
	};

	return (
		<View style={styles.container}>
			<Text>Quienes y cuanto gastaron?</Text>
			{peopleForCalcs.map((person, i, arr) => {
				return (
					<View key={i}>
						<View style={{ flexDirection: 'column' }}>
							<View>
								<Text>Persona {i + 1}</Text>
							</View>
							<View style={styles.peopleInputContainer}>
								{/* Nombres */}
								<TextInputComponent value={peopleForCalcs[i].name} onChangeCallback={handleChange} name={'name'} i={i} />
								{/* Montos */}
								<TextInputComponent value={peopleForCalcs[i].spent} onChangeCallback={handleChange} name={'spent'} i={i} />
								<Button
									title='X'
									onPress={() => {
										// console.log(e);
										console.log(i);
										handleRemovePeople(i);
									}}
								/>
							</View>
						</View>
					</View>
				);
			})}
			<Button title='Agregar persona' onPress={handleAddPeople} />
			{/* <Button title='Sacar persona' onPress={handleRemovePeople} /> */}
			<View>
				{payments && payments.length > 0 ? (
					payments.map((payment, i) => {
						return (
							<Text key={i}>
								{payment.from} le debe a {payment.to} ==== ${payment.amount}
							</Text>
						);
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
