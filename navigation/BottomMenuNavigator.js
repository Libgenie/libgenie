import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import History from '../screens/History';

const BottomMenuNavigator = createMaterialBottomTabNavigator(
	{
		Dashboard: {
			screen: Dashboard,
			navigationOptions: {
				tabBarLabel: 'Dashboard',
				tabBarIcon: ({tintColor}) => {
					return <MaterialIcons name='dashboard' size={22} color={tintColor} />;
				},
			},
		},
		Search: {
			screen: Search,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => {
					return <MaterialIcons name='search' size={22} color={tintColor} />;
				},
			},
		},
		History: {
			screen: History,
			navigationOptions: {
				tabBarIcon: ({tintColor}) => {
					return <MaterialIcons name='history' size={22} color={tintColor} />;
				},
			},
		},
	},
	{
		initialRouteName: 'Dashboard',
		activeColor: '#33af85',
		inactiveColor: '#969799',
		barStyle: {backgroundColor: '#ffffff'},
	}
);

export default BottomMenuNavigator;
