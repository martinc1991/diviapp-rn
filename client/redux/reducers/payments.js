const inicialState = {};

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = inicialState, action) => {
	switch (action.type) {
		case 'CALCULATE_PAYMENT':
			// console.log('estoy en el reducer');
			return { ...state, payments: action.payload };
		default:
			return state;
	}
};

export default reducer;
