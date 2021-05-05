import * as firebase from 'firebase';
import {STORE_ISSUES, CLEAR_ISSUES} from '../constants';

const checkIssue = (issues)=>{
	const update = issues.map((issue)=>{
		console.log('updating')
		if(new Date() > new Date(issue.return_date))
			return {...issue,status:-1}
		return issue
	})
	return update;
}

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
					const updateIssueStatus=checkIssue(newIssues)
					dispatch({
						type: STORE_ISSUES,
						payload: updateIssueStatus,
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

