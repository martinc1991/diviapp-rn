import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import React from 'react';
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import fontSize from '../../theme/fontSize';

// Platform
const platform = Platform.OS;

export default function TextButton({
  label = 'Insert Text',
  textColor = 'white',
  backgroundColor = 'firebrick',
  onPress = () => {},
  onLongPress = () => {},
  loading = false,
  disabled = false,
}) {
  // Font
  const [fontsLoaded] = useFonts({
    ubuntu: Ubuntu_400Regular,
    ubuntuBold: Ubuntu_700Bold,
    ubuntuItalic: Ubuntu_400Regular_Italic,
  });
  // Styles
  const styles = StyleSheet.create({
    button: {
      maxWidth: label.length * 10 + 60, // So the buttons dont take all the width available (Pretty exprimental)
      margin: 0,
      backgroundColor: disabled ? 'grey' : backgroundColor,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 3,
      flexDirection: 'row',
      // iOS shadow
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      // Android shadow
      elevation: 3,
    },
    text: {
      fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
      color: textColor,
      fontSize: fontSize.body,
    },
  });

  return (
    <Pressable style={styles.button} onPress={!disabled && onPress} onLongPress={!disabled && onLongPress} delayLongPress={1000}>
      {loading && (
        <View style={{ marginRight: 10 }}>
          <ActivityIndicator size={16} color={textColor} />
        </View>
      )}
      <View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
}
