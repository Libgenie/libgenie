import * as firebase from 'firebase';
import {STORE_ISSUES, CLEAR_ISSUES} from '../constants';

export const storeIssues = () => {
	return (dispatch, state) => {
		try {
			// Listen for any changes in the issues subcollection of the user
			const db = firebase.firestore();
			const unsubscribe = db
				.collection('users')
				.doc(state().auth.uid)
				.collection('issues')
				.onSnapshot(querySnapshot => {
					const newIssues = [];
					querySnapshot.forEach(snapshot => {
						newIssues.push(snapshot.data());
					});
					dispatch({
						type: STORE_ISSUES,
						payload: newIssues,
					});
				});
			return unsubscribe;
		} catch (error) {
			console.log('Error:', error);
			throw error;
		}
	};
};

export const clearIssues = () => {
	return dispatch => {
		dispatch({
			type: CLEAR_ISSUES,
		});
	};
};
