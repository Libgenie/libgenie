import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import BottomMenuTabNavigator from './BottomMenuNavigator';
import SignInScreen from '../screens/Auth';

const AuthNavigator = createSwitchNavigator({
	SignInScreen,
	BottomMenuTabNavigator,
});
// export default createAppContainer(
// 	createSwitchNavigator(
// 		{
// 			AuthLoading: AuthLoadingScreen,
// 			App: BottomMenuTabNavigator,
// 			Auth: AuthStack,
// 		},
// 		{
// 			initialRouteName: 'AuthLoading',
// 		}
// 	)
// );

export default createAppContainer(AuthNavigator);
