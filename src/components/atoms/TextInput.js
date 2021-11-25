import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

export default function TextInputComponent({ value, onChangeCallback, name, i, keyboardType = 'default', placeholder = '' }) {
  // Theme
  const theme = useSelector((state) => {
    return state.theme;
  });
  // Font Size
  const fontSize = useSelector((state) => {
    return state.fontSize;
  });

  // Styles
  const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: theme.elevation.medium || 'white',
      borderColor: 'grey',
      borderWidth: 1,
      marginVertical: 2,
      minHeight: fontSize.body + 10,
      width: '100%',
      paddingHorizontal: 10,
      borderRadius: 3,
      color: theme.text.body || 'grey',
    },
  });

  return (
    <TextInput
      style={styles.inputContainer}
      value={value}
      keyboardType={keyboardType}
      placeholder={placeholder}
      onChange={(e) => {
        onChangeCallback(name, e.nativeEvent.text, i); // ... Bind the name here
      }}
    />
  );
}
