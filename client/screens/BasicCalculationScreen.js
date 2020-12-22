import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments } from '../redux/actions/paymentActions';
import Clipboard from 'expo-clipboard';

const TextInputComponent = ({ value, onChangeCallback, name, i }) => (
	<TextInput
		style={styles.inputContainer}
		value={value}
		onChange={(e) => {
			// console.log(name, e.nativeEvent.text, i, e);
			onChangeCallback(name, e.nativeEvent.text, i); //... Bind the name here
		}}
	/>
);

const paymentsObjectToResultsString = function (paymentObject) {
	if (!paymentObject) return false;
	var date = paymentObject.date;
	var stringResult =
		'Para equilibrar gastos, hacer los siguientes pagos:' +
		'\n' + // En este caso va un solo salto porque el .map devuelve elementos con saltos adelante
		`${paymentObject.payments.map((payment, i) => {
			return '\n' + `${payment.from} -----> $ ${payment.amount} -----> ${payment.to}`;
		})}` +
		'\n\n' +
		`Fecha: ${date}` +
		'\n\n' +
		'Facilitado por diviapp';
	return stringResult;
};

export default function BasicDivision() {
	console.log('render');
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const payments = useSelector((state) => state.payments.current);
	// console.log(payments);
	const [peopleForCalcs, setPepopleForCalcs] = useState([
		{ name: '', spent: '' },
		{ name: '', spent: '' },
		{ name: '', spent: '' },
	]);

	const [text, setText] = useState('');

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
	const handleChangeTest = function (name, value, i) {
		var newPeopleForCalcs = [...peopleForCalcs];

		newPeopleForCalcs[i][name] = value;

		setPepopleForCalcs(newPeopleForCalcs);
		// console.log(peopleForCalcs);
	};

	const test_handleChange = function (e) {
		setText(e.nativeEvent.text);
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
		// alert(JSON.stringify(peopleForCalcs));
	};

	const handleCopy = function () {
		console.log('Copied to clipboard');
		var textForClipboard = paymentsObjectToResultsString(payments);
		Clipboard.setString(textForClipboard);
	};

	return (
		<View style={styles.container}>
			<Text>Quienes y cuanto gastaron?</Text>
			{/* <TextInput style={styles.inputContainer} value={text} onChange={test_handleChange} /> */}
			{/* <Text>{paymentsObjectToResultsString(fnTester)}</Text> */}
			{peopleForCalcs.map((person, i, arr) => {
				return (
					<View key={i}>
						<View style={{ flexDirection: 'column' }}>
							<View>
								<Text>Persona {i + 1}</Text>
							</View>
							<View style={styles.peopleInputContainer}>
								{/* Nombres */}
								<TextInputComponent value={peopleForCalcs[i].name} onChangeCallback={handleChangeTest} name={'name'} i={i} />
								{/* Montos */}
								<TextInputComponent value={peopleForCalcs[i].spent} onChangeCallback={handleChangeTest} name={'spent'} i={i} />
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
			{payments.payments && payments.payments.length > 0 ? <Text>Los siguientes pagos dejaran las cuentas equilibradas:</Text> : <Text>Tus resultados apareceran aqui abajo</Text>}

			<View>
				{payments.payments && payments.payments.length > 0 ? (
					payments.payments.map((payment, i) => {
						return (
							<Text key={i}>
								{payment.from} le debe a {payment.to} ______ ${payment.amount}
							</Text>
						);
					})
				) : (
					<Text>No hay resultados aun</Text>
				)}
				{payments.payments && payments.payments.length > 0 ? <Button title='Copiar' onPress={handleCopy} /> : <View></View>}
			</View>

			<Button title='Calcular' onPress={handleSubmit} />
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
