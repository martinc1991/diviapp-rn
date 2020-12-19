import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Permite metodos asincronos en redux
import logger from 'redux-logger'; // Muestra mensajes en la consola acerca del estado y las acciones

import reducers from '../reducers/index.js';

// With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Thunk lets you write async logic that interacts with the store.
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
