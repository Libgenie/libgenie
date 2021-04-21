import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BottomMenuNavigator from './navigation/BottomMenuNavigator';

export default function App() {
	return <BottomMenuNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
