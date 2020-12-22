import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.js';
// Navigation
import { NavigationContainer } from '@react-navigation/native'; // React navigation container
import { createStackNavigator } from '@react-navigation/stack'; // React stack-navigator
// Screens
import HomeScreen from './screens/HomeScreen';
import BasicCalculationScreen from './screens/BasicCalculationScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Inicio' }} />
					<Stack.Screen name='BasicCalculation' component={BasicCalculationScreen} options={{ title: 'Calculo Basico' }} />
					<Stack.Screen name='About' component={AboutScreen} options={{ title: 'Acerca de' }} />
				</Stack.Navigator>
			</NavigationContainer>
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
