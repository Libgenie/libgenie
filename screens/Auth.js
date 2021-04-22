import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const handleLoginButton = () => {
	console.log('Login Pressed');
};

const Auth = () => {
	return (
		<View style={styles.screen}>
			<Button title='Login' onPress={handleLoginButton} />
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

export default Auth;
