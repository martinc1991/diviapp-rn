const initialState = {
	current: [],
	history: [], // This is gonna be useful when the users CRUD comes in action because you can populate it with the last payment calculations from the DB
};

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CALCULATE_PAYMENT':
			var historyOfPayments = state.history.concat([action.payload]); // returns a new array (.push return de new array's length)
			// console.log(historyOfPayments);
			return { ...state, current: action.payload, history: historyOfPayments };
		case 'RESET_PAYMENT':
			return { ...state, current: [] };
		default:
			return state;
	}
};

export default reducer;
