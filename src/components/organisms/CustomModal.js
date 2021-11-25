import React from 'react';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import TextButton from '../atoms/TextButton';

// Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CustomModal({
  children,
  visible = false,
  primaryButton = false,
  primaryButtonLabel = 'primary',
  primaryButtonAction = () => {},
  secondaryButton = false,
  secondaryButtonLabel = 'secondary',
  secondaryButtonAction = () => {},
}) {
  // Theme
  const theme = useSelector((state) => {
    return state.theme;
  });

  // Styles
  const styles = StyleSheet.create({
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
    childrenContainer: {
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
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalBackScreen}>
        <View style={styles.modalContainer}>
          <View style={styles.childrenContainer}>{children}</View>

          {(primaryButton || secondaryButton) && (
            <View style={styles.modalButtonContainer}>
              {/* Secondary Button */}
              {secondaryButton && (
                <TextButton label={secondaryButtonLabel} textColor={theme.text.contrary.title} backgroundColor={theme.primary} onPress={secondaryButtonAction} />
              )}
              {/* Primary Button */}
              {primaryButton && (
                <TextButton label={primaryButtonLabel} textColor={theme.text.contrary.title} backgroundColor={theme.secondary} onPress={primaryButtonAction} />
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
