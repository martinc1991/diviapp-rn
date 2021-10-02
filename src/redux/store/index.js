import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';

export const store = createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(
			thunk, // With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Thunk lets you write async logic that interacts with the store.
			logger
		)
	)
);
