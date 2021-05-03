import { STORE_HISTORY, CLEAR_HISTORY } from '../constants';

const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_HISTORY:
      console.log('from reducer', action.payload);
      return action.payload;
    case CLEAR_HISTORY:
      return initialState;

    default:
      return state;
  }
};

export default historyReducer;
