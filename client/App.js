import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.js';
// Navigation
import { NavigationContainer } from '@react-navigation/native'; // React navigation container
import { createStackNavigator } from '@react-navigation/stack'; // React stack-navigator
import { createDrawerNavigator } from '@react-navigation/drawer'; // React drawer-navigator
// Screens
import HomeScreen from './screens/HomeScreen';
import BasicCalculationScreen from './screens/BasicCalculationScreen';
import AboutScreen from './screens/AboutScreen';
import CustomDrawerContent from './screens/Drawer/CustomDrawerContent';
// Basic Font
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Drawer.Navigator
					openByDefault={true} // Solo para probar el drawer
					initialRouteName='Home'
					backBehavior='history'
					drawerContent={(props) => <CustomDrawerContent {...props} />}
					drawerContentOptions={{
						labelStyle: {
							// Styles for the elements on the drawer
							fontSize: 16,
							fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
							// color: 'red',
						},
						activeTintColor: 'darkgreen',
					}}
					screenOptions={{
						headerShown: true,
						headerTitleAlign: 'center',
						headerStyle: { backgroundColor: 'darkgreen', shadowColor: 'darkgreen', elevation: 0 },
						headerTitleStyle: { color: 'white', fontSize: 16 },
						// headerRight: () => <Ionicons name='ios-log-out' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
						// headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }} onPress={() => props.navigation.openDrawer()}></Ionicons>,
					}}
				>
					<Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'Inicio' }} />
					<Drawer.Screen name='BasicCalculation' component={BasicCalculationScreen} options={{ title: 'Calculo Basico' }} />
					<Drawer.Screen name='About' component={AboutScreen} options={{ title: 'Acerca de' }} />
				</Drawer.Navigator>
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
