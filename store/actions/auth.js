import * as firebase from 'firebase';
import {LOGIN_USER, LOGOUT_USER} from '../constants';

export const loginUser = (email, password) => {
	return async dispatch => {
		try {
			await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
			const response = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			console.log('Logged In : ', response.user.email);
			dispatch({
				type: LOGIN_USER,
				payload: {
					email: response.user.email,
					token: response.user.toJSON().stsTokenManager.accessToken,
					expirationTime: response.user
						.toJSON()
						.stsTokenManager.expirationTime.toString(),
					uid: response.user.uid.toString(),
				},
			});
		} catch (error) {
			throw error;
		}
	};
};

export const logoutUser = () => {
	return async (dispatch, state) => {
		try {
			await firebase.auth().signOut();
			console.log('Logged Out : ', state().auth.email);
			dispatch({
				type: LOGOUT_USER,
			});
		} catch (error) {
			throw error;
		}
	};
};
