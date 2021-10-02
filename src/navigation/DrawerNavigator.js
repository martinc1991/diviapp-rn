import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { createDrawerNavigator } from '@react-navigation/drawer'; // React drawer-navigator
import { NavigationContainer } from '@react-navigation/native'; // React navigation container
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import AboutScreen from '../screens/AboutScreen';
import BasicCalculationScreen from '../screens/BasicCalculationScreen';
import CustomDrawerContent from '../screens/Drawer/CustomDrawerContent';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

// Platform
const platform = Platform.OS;

export default function DrawerNavigator() {
	// Theme
	const theme = useSelector((state) => state.theme);
	// Font Size
	const fontSize = useSelector((state) => state.fontSize);
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
				// openByDefault={true} // Only for testing
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
