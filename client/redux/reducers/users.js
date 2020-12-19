const inicialState = {
	users: ['No users Yet'],
};

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = inicialState, action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return { ...state, users: action.payload };
		case 'CREATE':
			var newUsersArray = state.users.concat([action.payload]);
			return { ...state, users: newUsersArray };
		default:
			return state;
	}
};

export default reducer;
