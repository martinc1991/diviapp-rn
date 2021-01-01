import fontSize from '../../theme/fontSize.js';

const initialState = fontSize;

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			// console.log('theme reducer');
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
