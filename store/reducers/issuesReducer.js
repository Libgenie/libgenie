import {STORE_ISSUES, CLEAR_ISSUES} from '../constants';
const initialState = [];

const issueReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_ISSUES:
			return action.payload;

		case CLEAR_ISSUES:
			return initialState;

		default:
			return state;
	}
};

export default issueReducer;
