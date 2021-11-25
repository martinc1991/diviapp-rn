import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IconButton } from '../atoms/IconButton';
import TextInput from '../atoms/TextInput';

// Platform
const platform = Platform.OS;

export default function PeopleInputRow({ num = 999, name = '', spent = '', onChange = () => {}, onRemove = () => {} }) {
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

  // Styles
  const styles = StyleSheet.create({
    singlePeopleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      width: '100%',
    },
    inputContainer: {
      flex: 8,
      marginHorizontal: 5,
    },
    textBodyPeople: {
      fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
      fontSize: fontSize.body,
      color: theme.text.body || 'lightgrey',
    },
  });

  return (
    <View style={styles.singlePeopleContainer}>
      <View style={{ ...styles.inputContainer, flex: 1 }}>
        <Text style={{ ...styles.textBodyPeople }}>{num + 1}</Text>
      </View>
      <View style={{ ...styles.inputContainer, flex: 8 }}>
        {/* Nombres */}
        <TextInput placeholder={`Persona ${num + 1}...`} value={name} onChangeCallback={onChange} name={'name'} i={num} />
      </View>
      <View style={{ ...styles.inputContainer, flex: 4 }}>
        {/* Montos */}
        <TextInput placeholder={`Monto`} value={spent} onChangeCallback={onChange} name={'spent'} keyboardType='number-pad' i={num} />
      </View>
      <View style={{ ...styles.inputContainer, flex: 1 }}>
        <IconButton
          onPress={() => {
            onRemove(num);
          }}></IconButton>
      </View>
    </View>
  );
}
