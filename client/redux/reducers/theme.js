import { Appearance } from 'react-native';
import { lightColors, darkColors } from '../../theme/colors.js';

const userPreferredTheme = Appearance.getColorScheme();
const inicialState = userPreferredTheme === 'dark' ? darkColors : lightColors;

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = inicialState, action) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			console.log('theme reducer');
			// console.log(state);
			// console.log({ ...darkColors });
			// console.log({ ...lightColors });
			if (state.isDark === false) return { ...darkColors };
			if (state.isDark === true) return { ...lightColors };
		default:
			return state;
	}
};

export default reducer;
