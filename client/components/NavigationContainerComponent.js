import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// Navigation
import { NavigationContainer } from '@react-navigation/native'; // React navigation container
import { createStackNavigator } from '@react-navigation/stack'; // React stack-navigator
import { createDrawerNavigator } from '@react-navigation/drawer'; // React drawer-navigator
// Screens
import HomeScreen from '../screens/HomeScreen';
import BasicCalculationScreen from '../screens/BasicCalculationScreen';
import AboutScreen from '../screens/AboutScreen';
import CustomDrawerContent from '../screens/Drawer/CustomDrawerContent';

// Ubuntu Font
import { useFonts, Ubuntu_300Light, Ubuntu_300Light_Italic, Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_500Medium, Ubuntu_500Medium_Italic, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from '@expo-google-fonts/ubuntu';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Platform
const platform = Platform.OS;

export default function NavigationContainerComponent() {
	// Theme
	const theme = useSelector((state) => state.theme);
	// Font Size
	const fontSize = useSelector((state) => state.fontSize);
	const [isEnabled, setIsEnabled] = useState(false);
	// Font
	const [fontsLoaded, error] = useFonts({
		ubuntu: Ubuntu_400Regular,
		ubuntuBold: Ubuntu_700Bold,
		ubuntuItalic: Ubuntu_400Regular_Italic,
	});
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={theme.isDark ? theme.elevation.low : theme.primary} barStyle={theme.isDark ? 'light-content' : 'dark-content'} />
			<Drawer.Navigator
				// openByDefault={true} // Solo para probar el drawer
				initialRouteName='Home'
				backBehavior='initialRoute'
				drawerContent={(props) => <CustomDrawerContent {...props} />}
				screenOptions={{
					headerShown: true,
					headerTitleAlign: 'center',
					headerStyle: {
						backgroundColor: theme.isDark ? theme.elevation.low : theme.primary,
						shadowColor: theme.isDark ? theme.elevation.high : theme.primary,
						elevation: 0,
					},
					headerTitleStyle: {
						color: 'white',
						fontSize: fontSize.body,
						fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
					},
					// headerRight: () => <Ionicons name='ios-log-out' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
					// headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }} onPress={() => console.log('props')}></Ionicons>,
				}}>
				<Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'Inicio' }} />
				<Drawer.Screen name='BasicCalculation' component={BasicCalculationScreen} options={{ title: 'Cálculo Básico' }} />
				<Drawer.Screen name='About' component={AboutScreen} options={{ title: 'Acerca' }} />
			</Drawer.Navigator>
		</NavigationContainer>
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
