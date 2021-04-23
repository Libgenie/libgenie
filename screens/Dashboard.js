import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {logoutUser} from '../store/actions/auth';
import {useDispatch} from 'react-redux';

const Dashboard = () => {
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await dispatch(logoutUser());
			props.navigation.navigate('AuthNavigator');
			console.log('Logged Out');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<View style={styles.screen}>
			<Text>Dashboard UI</Text>
			<Button title='Logout' onPress={handleLogout} />
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
