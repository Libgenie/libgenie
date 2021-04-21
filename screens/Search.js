import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Search = () => {
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
