import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {logoutUser} from '../store/actions/auth';
import {useDispatch} from 'react-redux';

const Dashboard = props => {
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await dispatch(logoutUser());
		} catch (err) {
			console.log('Error while logging out', err);
			console.log(err);
		} finally {
			props.navigation.navigate('SignInScreen');
		}
	};

	const prompLogout = () => {
		Alert.alert('Warning!', 'Are you sure you want to logout?', [
			{
				text: 'Yes',
				onPress: handleLogout,
			},
			{
				text: 'Cancel',
				onPress: () => {
					console.log('Logout Op Cancelled');
				},
			},
		]);
	};

	return (
		<View style={styles.screen}>
			<Text>Dashboard UI</Text>
			<Button title='Logout' onPress={prompLogout} />
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
