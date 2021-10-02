import fontSize from '../../theme/fontSize';

const initialState = fontSize;

// ALWAYS RETURN A NEW OBJECT OR REACT WONT RE-RENDER
const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default reducer;
