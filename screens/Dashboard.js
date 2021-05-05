import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import homestyles from './dashboardstyles';
import Profile from '../components/Profile';
import Card from '../components/Card';
import {storeIssues} from '../store/actions/issue';

const Dashboard = props => {
	const dispatch = useDispatch();
	// const issues = useSelector(state => state.issues);
	// let [fontsLoaded, err] = useFonts({
	// 	Lato_400Regular,
	// 	Lato_300Light,
	// 	Barlow_500Medium,
	// 	Barlow_600SemiBold,
	// });

	useEffect(() => {
		const unsubscribe = dispatch(storeIssues());
		return unsubscribe;
	}, [dispatch]);

	//   UseEffect for first focus
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

	// if (!fontsLoaded) {
	// 	return <AppLoading />;
	// }

	return (
		<ImageBackground
			source={require('../assets/background.png')}
			style={homestyles.screen}>
			<Profile />
			<Card />
		</ImageBackground>
	);
};

export default Dashboard;
