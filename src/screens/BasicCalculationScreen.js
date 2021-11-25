import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextButton from '../components/atoms/TextButton';
import PeopleInputRow from '../components/molecules/PeopleInputRow';
import CustomModal from '../components/organisms/CustomModal';
import SnackBar from '../components/organisms/SnackBar';
import { getPayments, resetCurrentPayment } from '../redux/actions/paymentActions';
import { paymentsObjectToString } from '../utils/paymentsObjectToString';

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Platform
const platform = Platform.OS;

export default function BasicCalculationScreen() {
  const dispatch = useDispatch();
  // Redux States
  const payments = useSelector((state) => {
    return state.payments.current;
  });
  // Theme
  const theme = useSelector((state) => {
    return state.theme;
  });
  // Font Size
  const fontSize = useSelector((state) => {
    return state.fontSize;
  });
  // Font
  const [fontsLoaded] = useFonts({
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

  // Handle functions
  const handleChange = function (name, value, i) {
    const newPeopleForCalcs = [...peopleForCalcs];
    newPeopleForCalcs[i][name] = value;
    setPepopleForCalcs(newPeopleForCalcs);
  };
  // Add and remove people
  const handleAddPeople = function () {
    setPepopleForCalcs([...peopleForCalcs, { name: '', spent: '' }]);
  };
  const handleRemove = function (i) {
    console.log('remove single people');
    const newPeopleForCalcs = [...peopleForCalcs];
    newPeopleForCalcs.splice(i, 1);
    setPepopleForCalcs(newPeopleForCalcs);
  };

  // Submit
  const handleSubmit = function () {
    const filteredPeopleForCalcs = peopleForCalcs.filter((people) => {
      if (people.spent.trim() === '' || people.name.trim() === '') {
        return false;
      }
      return true;
    });

    dispatch(getPayments(filteredPeopleForCalcs));
  };

  // Copy to clipboard
  const handleCopy = function () {
    const textForClipboard = paymentsObjectToString(payments);
    Clipboard.setString(textForClipboard);
    setShowFeedbackModal(true);
    setTimeout(() => {
      setShowFeedbackModal(false);
    }, 2000);
  };

  // Reset inputs and results
  const handleReset = function () {
    const numImputFields = [];
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
      maxWidth: 520,
      margin: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: theme.text.body,
      borderRadius: 5,
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
      marginBottom: 5,
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
      marginTop: 5,
    },
    textBodyBold: {
      fontFamily: fontsLoaded ? 'ubuntuBold' : platform === 'ios' ? 'Futura' : 'sans-serif',
      fontSize: fontSize.body,
      color: theme.primary || 'red',
      textAlign: 'center',
      marginBottom: 10,
    },
    copyButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: windowWidth * 0.8,
      maxWidth: 300,
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
    },
    modalBodyContainer: {
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
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ width: windowWidth, alignItems: 'center' }}>
        {/* Paso 1 */}
        <View style={styles.stepContainer}>
          <Text style={styles.textTitle}>Paso 1: registrá los gastos</Text>

          {peopleForCalcs.map((person, i, arr) => {
            return <PeopleInputRow key={i} num={i} name={person.name} spent={person.spent} onChange={handleChange} onRemove={handleRemove} />;
          })}

          <View style={styles.addPeopleButtonContainer}>
            <TextButton label='Agregar persona' textColor={theme.text.contrary.caption} backgroundColor={theme.primary} onPress={handleAddPeople} />
          </View>
        </View>
        {/* Paso 1 */}

        {/* Paso 2 */}
        <View style={styles.stepContainer}>
          <Text style={styles.textTitle}>Paso 2: calculá y obtené los resultados</Text>

          {/* Results */}
          <View style={styles.resultsContainer}>
            {payments && payments.length > 0 ? (
              <Text style={styles.textTitleResults}>Los siguientes pagos dejarán las cuentas equilibradas:</Text>
            ) : (
              <Text style={styles.textTitleResults}>Los resultados aparecerán aquí</Text>
            )}
            <View>
              {payments && payments.length > 0 ? (
                payments.map((payment, i) => {
                  return (
                    <Text style={styles.textResults} key={i}>
                      <Text style={styles.textBodyBold}>{payment.from}</Text> le debe a <Text style={styles.textBodyBold}>{payment.to}</Text>: ${payment.amount}
                    </Text>
                  );
                })
              ) : (
                <Text style={styles.textResults}>No hay resultados aún</Text>
              )}
            </View>
          </View>
          {/* Results */}

          {/* Calculate and Copy buttons */}
          <View>
            {payments && payments.length > 0 ? (
              <View style={styles.copyButtonContainer}>
                <TextButton label='Calcular' textColor={theme.text.contrary.caption} backgroundColor={theme.secondary} onPress={handleSubmit} />
                <TextButton label='Copiar' textColor={theme.text.contrary.title} backgroundColor={theme.secondary} onPress={handleCopy} />
              </View>
            ) : (
              <View style={styles.copyButtonContainer}>
                <TextButton label='Calcular' textColor={theme.text.contrary.caption} backgroundColor={theme.secondary} onPress={handleSubmit} />
              </View>
            )}
          </View>
          {/* Calculate and Copy buttons */}
        </View>
        {/* Paso 2 */}

        {/* Reset Button */}
        <View style={styles.resetButtonContainer}>
          <TextButton
            label='Empezar de nuevo'
            textColor={theme.text.contrary.caption}
            backgroundColor={theme.primary}
            onLongPress={() => {
              return handleReset();
            }}
            onPress={() => {
              setShowResetModal(true);
            }}
          />
        </View>
        {/* Reset Button */}

        {/* <---------- CONFIRM RESET MODAL ----------> */}
        <CustomModal
          visible={showResetModal}
          primaryButton
          primaryButtonLabel='Confirmar'
          primaryButtonAction={() => {
            handleReset();
            setShowResetModal(false);
          }}
          secondaryButton
          secondaryButtonLabel='Cancelar'
          secondaryButtonAction={() => {
            return setShowResetModal(false);
          }}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.textTitle}>Quieres resetear todos los campos?</Text>
          </View>
          <View style={styles.modalBodyContainer}>
            <Text style={styles.textResults}>Se borrarán todos los campos y los resultados del último cálculo que hayas realizado.</Text>
          </View>
        </CustomModal>

        {/* <---------- COPIED TO CLIPBOARD SNACKBAR ----------> */}
        <SnackBar visible={showFeedbackModal} text='Copiado al portapapeles  📎' />
      </ScrollView>
    </View>
  );
}
