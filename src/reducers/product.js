import {PRODUCTS_DETAILS} from '../actions/types';
import {appDefaultReducer} from './defaultReducer';
const INITIAL_STATE = appDefaultReducer.product;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_DETAILS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};
