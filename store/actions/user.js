import * as firebase from 'firebase';
import 'firebase/firestore';
import {STORE_USER, CLEAR_USER} from '../constants';

export const storeUser = (email, password) => {
	return async (dispatch, state) => {
		try {
			const db = firebase.firestore();
			const snapshot = await db.collection('users').doc(state().auth.uid).get();
			console.log('Details', snapshot.data());
			dispatch({
				type: STORE_USER,
				payload: snapshot.data(),
			});
		} catch (error) {
			throw error;
		}
	};
};
