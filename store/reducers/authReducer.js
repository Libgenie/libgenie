import {LOGIN_USER, LOGOUT_USER} from '../constants';
const initialState = {
	email: null,
	token: null,
	expirationTime: null,
	uid: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			const {email, token, expirationTime, uid} = action.payload;
			return {...state, email, token, expirationTime, uid};

		case LOGOUT_USER:
			return {...state, token: null, expirationTime: null, uid: null};

		default:
			return state;
	}
};

export default authReducer;
