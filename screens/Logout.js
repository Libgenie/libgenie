import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Logout = props => {
	// UseEffect for first focus
	useEffect(() => {
		console.log('First Focus on History');
	});

	// UseEffect to run upon subsequent focuses
	useEffect(() => {
		const unsubscribe = props.navigation.addListener('willFocus', payload => {
			console.log('Focued on History');
		});

		return () => {
			console.log('Removing History Listener');
			unsubscribe.remove();
		};
	}, [props.navigation]);

	return (
		<View style={styles.screen}>
			<Text>Logout UI</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
});

export default Logout;
