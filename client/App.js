// Basic Font
import { Basic_400Regular, useFonts } from '@expo-google-fonts/basic';
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
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
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
