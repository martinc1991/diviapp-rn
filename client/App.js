import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.js';
import Home from './screens/Home';

export default function App() {
	return (
		<Provider store={store}>
			<Home />
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
