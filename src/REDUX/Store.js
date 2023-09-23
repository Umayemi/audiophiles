import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import cartReducer from './CartReducer';

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware),
//       // other store enhancers if any
//     ),
//   );
export const Store = createStore(cartReducer,composeWithDevTools(applyMiddleware(logger)));