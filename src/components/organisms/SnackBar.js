import { Ubuntu_400Regular, useFonts } from '@expo-google-fonts/ubuntu';
import React from 'react';
import { Dimensions, Modal, Platform, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

// Dimensions
const { width } = Dimensions.get('window');

// Platform
const platform = Platform.OS;

export default function SnackBar({ visible = false, text = '' }) {
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
  });

  // Styles
  const styles = StyleSheet.create({
    feedbackModalBackScreen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding: 10,
    },
    feedbackModalContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
      backgroundColor: theme.isDark ? 'rgba(255,255,255, 0.9)' : 'rgba(0,0,0, 0.85)',
      borderRadius: 4,
      maxWidth: 0.8 * width,
    },
    feedbackText: {
      fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
      fontSize: fontSize.caption.verySmall,
      color: theme.text.contrary.title || 'red',
      textAlign: 'center',
    },
  });

  return (
    <Modal visible={visible} transparent={true} animationType='fade'>
      <View style={styles.feedbackModalBackScreen}>
        <View style={styles.feedbackModalContainer}>
          <Text style={styles.feedbackText}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
}
