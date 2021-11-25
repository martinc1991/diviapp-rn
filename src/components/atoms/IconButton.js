import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

export function IconButton({ size = 16, color = 'white', backgroundColor, onPress = () => {}, disabled = false, iconName = 'ios-close' }) {
  // Theme
  const theme = useSelector((state) => {
    return state.theme;
  });

  return (
    <Pressable style={[styles.button, { backgroundColor: disabled ? 'grey' : backgroundColor || theme.primary, width: size + 10, height: size + 10 }]} onPress={onPress}>
      <Ionicons name={iconName} color={color} size={size}></Ionicons>
    </Pressable>
  );
}

// Styles
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
});
