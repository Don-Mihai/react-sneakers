import { combineReducers } from 'redux';
import cart from './cart';
import product from './product';

const rootReducer = combineReducers({
  cart,
  product,
});

export default rootReducer;
