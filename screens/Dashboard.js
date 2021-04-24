import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {logoutUser} from '../store/actions/auth';
import {useDispatch} from 'react-redux';

const Dashboard = props => {
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await dispatch(logoutUser());
			props.navigation.navigate('SignInScreen');
		} catch (err) {
			console.log('Error while logging out', err);
			console.log(err);
			props.navigation.navigate('SignInScreen');
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
