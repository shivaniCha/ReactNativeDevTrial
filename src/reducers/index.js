import {combineReducers} from 'redux';
import UserReducer from './user';
import ProductReducer from './product';
import {RESET_STORE} from '../actions/types';
import {appDefaultReducer} from './defaultReducer';

const appReducer = combineReducers({
  user: UserReducer,
  product: ProductReducer,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  if (action.type === RESET_STORE) {
    finalState = appDefaultReducer; //resetReducer(finalState, action);
  }
  return finalState;
}
