import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Appearance, StyleSheet, Switch, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions/themeActions';
import { Dimensions } from 'react-native';
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic';
import { NavigationContainer } from '@react-navigation/native';
import SideBarLinks from './SideBarLinks';
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CustomDrawerContent(props) {
	console.log('render');
	console.log(Appearance.getColorScheme());
	const dispatch = useDispatch();

	const [fontsLoaded, error] = useFonts({
		basic: Basic_400Regular,
	});

	const theme = useSelector((state) => state.theme);
	const [isEnabled, setIsEnabled] = useState(false);
	console.log(theme);

	const DarkModeDrawerItem = function () {
		return (
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 0, marginRight: -35 }}>
				<Text style={styles.text}>Modo Oscuro</Text>
				<Switch
					// style={{ marginLeft: 140 }}
					trackColor={{ false: 'lightgrey', true: 'lightgrey' }}
					thumbColor={'orange'}
					ios_backgroundColor='#3e3e3e'
					onValueChange={() => {
						setIsEnabled((previousState) => !previousState);
						dispatch(changeTheme);
					}}
					value={theme.isDark}
				></Switch>
			</View>
		);
	};

	// <--------------------- ESTILOS --------------------->
	const styles = StyleSheet.create({
		mainDrawerContainer: {
			backgroundColor: theme.background,
		},
		titleContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: 10,
		},
		title: {
			fontSize: 18,
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			color: theme.font,
		},
		text: {
			fontSize: 16,
			fontFamily: fontsLoaded ? 'basic' : '', // Pretty experimental
			color: theme.font,
		},
		hrElement: {
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderColor: theme.font,
		},
		sectionTitlesContainer: {
			margin: 10,
		},
		sectionTitle: {
			fontSize: 20,
		},
	});

	return (
		<DrawerContentScrollView {...props} style={styles.mainDrawerContainer}>
			{/* {console.log(props)} */}
			<View style={styles.titleContainer}>
				<Text style={styles.title}>DiviApp</Text>
			</View>
			<View style={styles.hrElement}></View>
			{/* .map de las secciones */}
			{SideBarLinks ? (
				SideBarLinks.map((seccion, key) => (
					<View style={styles.sectionTitlesContainer} key={key}>
						<Text style={styles.title}>{seccion.sectionTitle}</Text>
						{seccion.links.map((enlace, key) => (
							<DrawerItem
								key={key}
								icon={() => <Ionicons name={enlace.icon} color={theme.primary} size={20} style={{ marginHorizontal: 0, justifyContent: 'center', alignItems: 'center' }}></Ionicons>}
								label={enlace.label}
								labelStyle={styles.text}
								onPress={() => {
									// console.log(props);
									props.navigation.navigate(enlace.screen);
								}}
							/>
						))}
					</View>
				))
			) : (
				<Text>Hubo algun problema (probablemente en EnalcesMenu.js)</Text>
			)}
			{/* <DrawerItemList {...props} style={{ color: 'purple' }} />
			
			<View style={styles.hrElement}></View> */}
			<DrawerItem label={DarkModeDrawerItem} icon={() => <Ionicons name={theme.isDark ? 'ios-moon' : 'ios-sunny'} size={20} color={theme.font}></Ionicons>} onPress={() => {}} />
		</DrawerContentScrollView>
	);
}
