import * as firebase from 'firebase';
import {LOGIN_USER, LOGOUT_USER} from '../constants';

export const loginUser = (email, password) => {
	return async dispatch => {
		try {
			const response = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			console.log(response.user.email);
			dispatch({
				type: LOGIN_USER,
				payload: {
					email: response.user.email,
					token: response.user.toJSON().stsTokenManager.accessToken,
					expirationTime: response.user
						.toJSON()
						.stsTokenManager.expirationTime.toString(),
				},
			});
		} catch (error) {
			throw error;
		}
	};
};

export const logoutUser = () => {
	return async dispatch => {
		try {
			const response = await firebase.auth().signOut();
			console.log('Logged Out', response);
			dispatch({
				type: LOGOUT_USER,
			});
		} catch (error) {
			console.log('Error while loggin out');
			throw error;
		}
	};
};
