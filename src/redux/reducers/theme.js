import { Appearance } from 'react-native';
import { darkColors, lightColors } from '../../theme/colors';

const userPreferredTheme = Appearance.getColorScheme();
const initialState = userPreferredTheme === 'dark' ? darkColors : lightColors;

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			if (state.isDark === false) return { ...darkColors };
			if (state.isDark === true) return { ...lightColors };
		default:
			return state;
	}
};

export default reducer;
