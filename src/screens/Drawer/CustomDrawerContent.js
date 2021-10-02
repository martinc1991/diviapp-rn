import { Ubuntu_400Regular, Ubuntu_400Regular_Italic, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions/themeActions';
import SideBarLinks from './SideBarLinks';

// Platform
const platform = Platform.OS;

export default function CustomDrawerContent(props) {
	const dispatch = useDispatch();

	// Font
	const [fontsLoaded, error] = useFonts({
		ubuntu: Ubuntu_400Regular,
		ubuntuBold: Ubuntu_700Bold,
		ubuntuItalic: Ubuntu_400Regular_Italic,
	});

	// Theme
	const theme = useSelector((state) => state.theme);
	// Font Size
	const fontSize = useSelector((state) => state.fontSize);
	const [isEnabled, setIsEnabled] = useState(false);

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
					value={theme.isDark}></Switch>
			</View>
		);
	};

	// <--------------------- ESTILOS --------------------->
	const styles = StyleSheet.create({
		mainDrawerContainer: {
			backgroundColor: theme.elevation.low,
		},
		titleContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginVertical: 10,
		},
		title: {
			fontSize: fontSize.caption.regular,
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			color: theme.text.title,
		},
		sectionTitle: {
			fontSize: fontSize.caption.regular,
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			color: theme.text.title || 'grey',
			marginBottom: 5,
		},
		configContainer: {
			marginHorizontal: 8,
			marginTop: 55,
		},
		text: {
			fontSize: fontSize.body,
			fontFamily: fontsLoaded ? 'ubuntu' : platform === 'ios' ? 'Futura' : 'sans-serif',
			color: theme.text.body,
		},
		hrElement: {
			borderBottomWidth: 1,
			borderColor: theme.text.disabled,
		},
		sectionTitlesContainer: {
			marginHorizontal: 8,
			marginVertical: 3,
		},
	});

	return (
		<DrawerContentScrollView {...props} style={styles.mainDrawerContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>DiviApp</Text>
			</View>
			<View style={styles.hrElement}></View>
			<View style={styles.sectionTitlesContainer}>
				<DrawerItem
					icon={() => <Ionicons name='ios-home' color={theme.primary} size={20} style={{ marginHorizontal: 0, justifyContent: 'center', alignItems: 'center' }}></Ionicons>}
					label='Inicio'
					labelStyle={styles.text}
					onPress={() => {
						props.navigation.navigate('Home');
					}}
				/>
			</View>
			{/* .map de las secciones */}
			{SideBarLinks ? (
				SideBarLinks.map((seccion, key) => (
					<View style={styles.sectionTitlesContainer} key={key}>
						<Text style={styles.sectionTitle}>{seccion.sectionTitle}</Text>
						<View style={styles.hrElement}></View>
						{seccion.links.map((enlace, key) => (
							<DrawerItem
								key={key}
								icon={() => <Ionicons name={enlace.icon} color={theme.primary} size={22} style={{ marginHorizontal: 0, justifyContent: 'center', alignItems: 'center' }}></Ionicons>}
								label={enlace.label}
								labelStyle={styles.text}
								activeBackgroundColor={'red'}
								onPress={() => {
									props.navigation.navigate(enlace.screen);
								}}
							/>
						))}
					</View>
				))
			) : (
				<Text>Hubo algun problema (probablemente en EnalcesMenu.js)</Text>
			)}

			<View style={styles.configContainer}>
				<Text style={styles.sectionTitle}>Configuración</Text>
				<View style={styles.hrElement}></View>
				<DrawerItem label={DarkModeDrawerItem} icon={() => <Ionicons name={theme.isDark ? 'ios-moon' : 'ios-sunny'} size={20} color={theme.primary} style={{ marginHorizontal: 0 }}></Ionicons>} onPress={() => {}} />
			</View>
		</DrawerContentScrollView>
	);
}
