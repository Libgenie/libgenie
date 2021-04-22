import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';

import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import Logout from '../screens/Logout';

const BottomMenuNavigator = createBottomTabNavigator({
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			tabBarIcon: tabinfo => {
				return <MaterialIcons name='dashboard' size={24} color='orange' />;
			},
		},
	},
	Search: {
		screen: Search,
		navigationOptions: {
			tabBarIcon: tabinfo => {
				return <MaterialIcons name='search' size={24} color='orange' />;
			},
		},
	},
	Logout: {
		screen: Logout,
		navigationOptions: {
			tabBarIcon: tabinfo => {
				return <MaterialIcons name='logout' size={24} color='orange' />;
			},
		},
	},
});

export default BottomMenuNavigator;
