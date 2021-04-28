import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';

import Dashboard from '../screens/Dashboard';
import Search from '../screens/Search';
import History from '../screens/History';

const BottomMenuNavigator = createBottomTabNavigator({
	Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			tabBarIcon: tabinfo => {
				return <MaterialIcons name='dashboard' size={24} color='#33af85' />;
			},
		},
	},
	Search: {
		screen: Search,
		navigationOptions: {
			tabBarIcon: tabinfo => {
				return <MaterialIcons name='search' size={24} color='#33af85' />;
			},
		},
	},
	History: {
		screen: History,
		navigationOptions: {
			tabBarIcon: tabinfo => {
				return <MaterialIcons name='history' size={24} color='#33af85' />;
			},
		},
	},
});

export default BottomMenuNavigator;
