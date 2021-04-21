import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Dashboard = () => {
	return (
		<View style={styles.screen}>
			<Text>Dashboard UI</Text>
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

export default Dashboard;
