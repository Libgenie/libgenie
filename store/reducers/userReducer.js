import {STORE_USER, CLEAR_USER} from '../constants';
const initialState = {
	college_id: null,
	display_name: null,
	gender: null,
	semester: 0,
	stream: null,
	total_issues: 0,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_USER:
			return {...action.payload};

		default:
			return state;
	}
};

export default userReducer;
