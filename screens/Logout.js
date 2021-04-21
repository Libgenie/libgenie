import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Logout = () => {
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
