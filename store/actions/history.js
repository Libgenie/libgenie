import * as firebase from 'firebase';
import {STORE_HISTORY, CLEAR_HISTORY} from '../constants';

export const storeHistory = () => {
	return async (dispatch, state) => {
		try {
			const hArray = [];
			const db = firebase.firestore();
			const history = await db
				.collection('users')
				.doc(state().auth.uid)
				.collection('history')
				.get();

			history.forEach(item => {
				// console.log(item.data());
				hArray.push(item.data());
			});

			console.log('hArray', hArray);

			dispatch({type: STORE_HISTORY, payload: hArray});
		} catch (error) {
			console.log('Error:', error);
			throw error;
		}
	};
};
export const clearHistory = () => {
	return dispatch => {
		dispatch({type: CLEAR_HISTORY});
	};
};
