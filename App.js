import React from 'react';
import {StyleSheet, Text, View, LogBox} from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './secrets/firebaseConfig';
import AuthNavigator from './navigation/AuthNavigator';

import {Provider} from 'react-redux';
import store from './store';

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
	console.log('Initialized Firebase...');
}

export default function App() {
	LogBox.ignoreLogs(['Setting a timer for a long period of time']);
	return (
		<Provider store={store}>
			<AuthNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
