import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Search = props => {
	// UseEffect for first focus
	useEffect(() => {
		console.log('First Focus on Search');
	});

	// UseEffect to run upon subsequent focuses
	useEffect(() => {
		const unsubscribe = props.navigation.addListener('willFocus', payload => {
			console.log('Focued on Search');
		});

		return () => {
			console.log('Removing Search Listener');
			unsubscribe.remove();
		};
	}, [props.navigation]);

	return (
		<View style={styles.screen}>
			<Text>Search UI</Text>
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

export default Search;
