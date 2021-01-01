// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';

import { createDrawerNavigator } from '@react-navigation/drawer'; // React drawer-navigator
import { createStackNavigator } from '@react-navigation/stack'; // React stack-navigator
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import NavigationContainerComponent from './components/NavigationContainerComponent';
import { store } from './redux/store/index.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	// Font
	const [fontsLoaded, error] = useFonts({
		ubuntu: Ubuntu_400Regular,
		ubuntuBold: Ubuntu_700Bold,
		ubuntuItalic: Ubuntu_400Regular_Italic,
	});
	return (
		<Provider store={store}>
			<NavigationContainerComponent></NavigationContainerComponent>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
