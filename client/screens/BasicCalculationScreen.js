import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, Platform, View, ScrollView, Dimensions, Pressable, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/usersActions';
import { getPayments, resetCurrentPayment } from '../redux/actions/paymentActions';
import Clipboard from 'expo-clipboard';
// Text input component
import TextInputComponent from '../components/TextInputComponent';
// Text input component
import TextButtonComponent from '../components/TextButtonComponent';

// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';
import FooterComponent from '../components/FooterComponent';

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Platform
const platform = Platform.OS;

// Auxiliar function to make the results into a string
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
		'Facilitado por DiviApp';
	return stringResult;
};

export default function BasicDivision() {
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

	// Local states
	const [peopleForCalcs, setPepopleForCalcs] = useState([
		{ name: '', spent: '' },
		{ name: '', spent: '' },
		{ name: '', spent: '' },
	]);
	const [showResetModal, setShowResetModal] = useState(false);
	const [showFeedbackModal, setShowFeedbackModal] = useState(false);
	// Local states

	const handleChange = function (name, value, i) {
		var newPeopleForCalcs = [...peopleForCalcs];

		newPeopleForCalcs[i][name] = value;

		setPepopleForCalcs(newPeopleForCalcs);
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
		let filteredPeopleForCalcs = peopleForCalcs.filter((people) => {
			console.log(people.spent == '');
			if (people.spent == '') return false;
			if (people.name == '') return false;
			return true;
		});
		console.table(filteredPeopleForCalcs);

		dispatch(getPayments(filteredPeopleForCalcs));
	};
	// Copy to clipboard
	const handleCopy = function () {
		console.log('Copied to clipboard');
		var textForClipboard = paymentsObjectToResultsString(payments);
		Clipboard.setString(textForClipboard);
		setShowFeedbackModal(true);
		setTimeout(() => {
			setShowFeedbackModal(false);
		}, 2000);
	};
	// Reset inputs and results
	const handleReset = function () {
		var numImputFields = [];
		for (let i = 0; i < peopleForCalcs.length; i++) {
			numImputFields.push({ name: '', spent: '' });
		}
		dispatch(resetCurrentPayment());
		setPepopleForCalcs(numImputFields);
	};

	// Styles
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.background,
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		stepContainer: {
			alignItems: 'center',
			justifyContent: 'flex-start',
			backgroundColor: theme.elevation.low,
			width: 0.9 * windowWidth,
			maxWidth: 520, // Test on iPad
			margin: 15,
			padding: 10,
			borderWidth: 1,
			borderColor: theme.text.body,
			borderRadius: 5,
		},
		singlePeopleContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginVertical: 5,
			width: '100%',
			// borderWidth: 1,
			// borderColor: 'red',
		},
		peopleInputContainer: {
			marginVertical: 3,
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		inputContainer: {
			flex: 8,
			// backgroundColor: 'white',
			marginVertical: 0,
			width: '40%',
			// borderColor: 'purple',
			// borderWidth: 1,
		},
		removePeopleButtonContainer: {
			flex: 2,
			marginVertical: 3,
			paddingTop: 15,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			// borderWidth: 1,
			// borderColor: 'red',
		},
		removePeopleButton: {
			backgroundColor: theme.primary,
			width: 25,
			height: 25,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 2,
		},
		addPeopleButtonContainer: {
			marginTop: 20,
			marginBottom: 10,
		},
		textTitle: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.caption.regular,
			textAlign: 'center',
			color: theme.text.title || 'lightgrey',
			// fontWeight: 'bold',
			marginBottom: 5,
			// maxWidth: '70%',
		},
		textBody: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.body || 'lightgrey',
			// fontWeight: 'bold',
		},
		textBodyPeople: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.caption.verySmall,
			color: theme.text.body || 'lightgrey',
			// fontWeight: 'bold',
		},
		resultsContainer: {
			backgroundColor: theme.elevation.medium,
			alignItems: 'center',
			justifyContent: 'flex-start',
			width: '90%',
			margin: 15,
			padding: 10,
			borderWidth: 1,
			borderColor: theme.isDark ? 'lightgrey' : '#121212',
			borderRadius: 5,
		},
		calculateButtonContainer: {
			marginTop: 20,
			marginBottom: 10,
		},
		textTitleResults: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.caption.small,
			color: theme.text.caption || 'red',
			textAlign: 'center',
			marginBottom: 10,
		},
		textResults: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.body,
			color: theme.text.body || 'red',
			textAlign: 'center',
			marginBottom: 10,
		},
		copyButtonContainer: {
			marginTop: 0,
			marginBottom: 10,
		},
		resetButtonContainer: {
			marginTop: 10,
			marginBottom: 30,
		},
		modalBackScreen: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 22,
			backgroundColor: theme.modalBackScreen,
		},
		modalContainer: {
			justifyContent: 'flex-start',
			alignItems: 'center',
			padding: 10,
			backgroundColor: theme.elevation.low,
			maxWidth: 400,
			width: windowWidth * 0.85,
			minHeight: windowHeight * 0.2,
			borderRadius: 4,
		},
		modalTitleContainer: {
			marginVertical: 10,
			// backgroundColor: 'red',
		},
		modalBodyContainer: {
			// flex: 2,
			// backgroundColor: 'firebrick',
			maxWidth: 380,
			width: windowWidth * 0.75,
			justifyContent: 'center',
			alignItems: 'center',
		},
		modalButtonContainer: {
			maxWidth: 400,
			width: windowWidth * 0.85,
			flexDirection: 'row',
			marginVertical: 10,
			justifyContent: 'space-evenly',
			// backgroundColor: 'pink',
		},
		feedbackModalBackScreen: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			// marginTop: 22,
			// backgroundColor: theme.modalBackScreen,
		},
		feedbackModalContainer: {
			justifyContent: 'flex-start',
			alignItems: 'center',
			padding: 10,
			backgroundColor: theme.isDark ? 'rgba(255,255,255, 0.7)' : 'rgba(0,0,0, 0.6)',
			// minWidth: windowWidth * 0.6,
			// maxHeight: windowHeight * 0.4,
			borderRadius: 4,
		},
		feedbackText: {
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			fontSize: fontSize.caption.verySmall,
			color: theme.text.contrary.title || 'red',
			textAlign: 'center',
			// marginBottom: 10,
		},
	});
	// Styles

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ width: windowWidth, alignItems: 'center' }}>
				<View style={styles.stepContainer}>
					<Text style={styles.textTitle}>Paso 1: introduce los gastos</Text>

					{peopleForCalcs.map((person, i, arr) => {
						return (
							<View key={i} style={styles.singlePeopleContainer}>
								<View style={styles.inputContainer}>
									<Text style={styles.textBodyPeople}>Persona {i + 1}</Text>
									{/* Nombres */}
									<TextInputComponent value={peopleForCalcs[i].name} onChangeCallback={handleChange} name={'name'} i={i} />
								</View>
								<View style={styles.inputContainer}>
									<Text style={styles.textBodyPeople}>Gastos</Text>
									{/* Montos */}
									<TextInputComponent value={peopleForCalcs[i].spent} onChangeCallback={handleChange} name={'spent'} keyboardType='number-pad' i={i} />
								</View>
								<View style={styles.removePeopleButtonContainer}>
									<Pressable
										style={styles.removePeopleButton}
										onPress={() => {
											// console.log(e);
											console.log(i);
											handleRemovePeople(i);
										}}
									>
										<Ionicons name='ios-close' color='white' size={16} style={{ marginHorizontal: 0, justifyContent: 'center', alignItems: 'center' }}></Ionicons>
									</Pressable>
								</View>
							</View>
						);
					})}
					<View style={styles.addPeopleButtonContainer}>
						{/* <Button title='Agregar persona' onPress={handleAddPeople} /> */}
						<TextButtonComponent text='Agregar persona' textColor={theme.text.contrary.caption} backgroundColor={theme.primary} onPress={handleAddPeople} />
					</View>
				</View>
				{/* Paso 2 */}
				<View style={styles.stepContainer}>
					<Text style={styles.textTitle}>Paso 2: calcula y obtén los resultados</Text>

					{/* Resultados */}
					<View style={styles.resultsContainer}>
						{payments.payments && payments.payments.length > 0 ? <Text style={styles.textTitleResults}>Los siguientes pagos dejarán las cuentas equilibradas:</Text> : <Text style={styles.textTitleResults}>Los resultados aparecerán aquí</Text>}

						<View>
							{payments.payments && payments.payments.length > 0 ? (
								payments.payments.map((payment, i) => {
									return (
										<Text style={styles.textResults} key={i}>
											{payment.from} le debe a {payment.to}: ${payment.amount}
										</Text>
									);
								})
							) : (
								<Text style={styles.textResults}>No hay resultados aun</Text>
							)}
						</View>
					</View>
					{/* <View style={styles.calculateButtonContainer}>
						
						<TextButtonComponent text='Calcular' textColor={theme.text.contrary.title} backgroundColor={theme.secondary} onPress={handleSubmit} />
					</View> */}
					<View style={styles.copyButtonContainer}>{payments.payments && payments.payments.length > 0 ? <TextButtonComponent text='Copiar' textColor={theme.text.contrary.title} backgroundColor={theme.secondary} onPress={handleCopy} /> : <TextButtonComponent text='Calcular' textColor={theme.text.contrary.caption} backgroundColor={theme.secondary} onPress={handleSubmit} />}</View>
				</View>
				{/* Reset Button */}
				<View style={styles.resetButtonContainer}>
					<TextButtonComponent
						text='Resetear'
						textColor={theme.text.contrary.caption}
						backgroundColor={theme.primary}
						onLongPress={() => handleReset()}
						onPress={() => {
							setShowResetModal(true);
						}}
					/>
				</View>
				{/* Reset Button */}
				<FooterComponent />
				{/* <---------- CONFIRM RESET MODAL ----------> */}
				<Modal visible={showResetModal} transparent={true}>
					<View style={styles.modalBackScreen}>
						<View style={styles.modalContainer}>
							<View style={styles.modalTitleContainer}>
								<Text style={styles.textTitle}>Quieres resetear todos los campos?</Text>
							</View>
							<View style={styles.modalBodyContainer}>
								<Text style={styles.textResults}>Se borraran todos los campos y los resultados del ultimo calculo que hayas realizado.</Text>
								{/* <Text style={styles.textResults}>(Podras consultar los datos de dicho calculo en la seccion Historial (COMING SOON))</Text> */}
							</View>
							<View style={styles.modalButtonContainer}>
								<TextButtonComponent text='Cancelar' textColor={theme.text.contrary.title} backgroundColor={theme.primary} onPress={() => setShowResetModal(false)} />
								<TextButtonComponent
									text='Confirmar'
									textColor={theme.text.contrary.title}
									backgroundColor={theme.secondary}
									onPress={() => {
										handleReset();
										setShowResetModal(false);
									}}
								/>
							</View>
						</View>
					</View>
				</Modal>
				{/* <---------- CONFIRM RESET MODAL ----------> */}
				{/* <---------- COPIED TO CLIPBOARD FEEDBACK MODAL ----------> */}
				<Modal visible={showFeedbackModal} transparent={true} animationType='fade'>
					<View style={styles.feedbackModalBackScreen}>
						<View style={styles.feedbackModalContainer}>
							<Text style={styles.feedbackText}>Copiado al portapapeles</Text>
						</View>
					</View>
				</Modal>
				{/* <---------- COPIED TO CLIPBOARD FEEDBACK MODAL ----------> */}
			</ScrollView>
		</View>
	);
}
