import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {logoutUser} from '../store/actions/auth';
import {removeUser} from '../store/actions/user';
import {storeIssues, clearIssues} from '../store/actions/issue';
import {useDispatch, useSelector} from 'react-redux';

const Dashboard = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	const issues = useSelector(state => state.issues);
	console.log('Issues Array', issues);

	useEffect(() => {
		const unsubscribe = dispatch(storeIssues());

		return unsubscribe;
	}, [dispatch]);

	// UseEffect for first focus
	useEffect(() => {
		console.log('First Focus on Dashboard');
	});

	// UseEffect to run upon subsequent focuses
	useEffect(() => {
		const unsubscribe = props.navigation.addListener('willFocus', payload => {
			console.log('Focued on Dashboard');
		});

		return () => {
			console.log('Removing Dashboard Listener');
			unsubscribe.remove();
		};
	}, [props.navigation]);

	const handleLogout = async () => {
		try {
			await dispatch(logoutUser());
			dispatch(removeUser());
			dispatch(clearIssues());
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
			<Text>{user.college_id}</Text>
			<Text>{user.display_name}</Text>
			<Text>{user.gender}</Text>
			<Text>{user.semester}</Text>
			<Text>{user.stream}</Text>
			<Text>{user.total_issues}</Text>
			{issues.map(issue => {
				return (
					<View>
						<Text>{issue.name}</Text>
						<Text>{issue.status}</Text>
						<Text>{issue.author}</Text>
						<Text>{issue.edition}</Text>
					</View>
				);
			})}
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
