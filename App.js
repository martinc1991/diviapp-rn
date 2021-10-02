// Ubuntu Font
import React from 'react';
import { Provider } from 'react-redux';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { store } from './src/redux/store/index.js';

export default function App() {
	return (
		<Provider store={store}>
			<DrawerNavigator />
		</Provider>
	);
}
