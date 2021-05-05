import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	ScrollView,
} from 'react-native';
import {storeHistory} from '../store/actions/history';
import historyStyle from './historystyles';
import Subcard from '../components/HCard';
import NoHistory from '../assets/NoHistory';

const History = props => {
	const dispatch = useDispatch();
	const history = useSelector(state => state.history);
	// UseEffect for first focus
	useEffect(() => {
		console.log('First Focus on History');
		const handleDispatch = async () => {
			await dispatch(storeHistory());
		};
		handleDispatch();
	}, [dispatch]);

	// UseEffect to run upon subsequent focuses
	useEffect(() => {
		const unsubscribe = props.navigation.addListener('willFocus', payload => {
			console.log('Focued on History');
			const handleDispatch = async () => {
				await dispatch(storeHistory());
			};
			handleDispatch();
		});

		return () => {
			console.log('Removing History Listener');
			unsubscribe.remove();
		};
	}, [props.navigation]);
	console.log('History from screen', history);
	return (
		<ImageBackground
			source={require('../assets/historybg.png')}
			style={historyStyle.screen}>
			<View style={historyStyle.headerContainer}>
				<Text style={historyStyle.header}>Issue History</Text>
				<Text
					style={historyStyle.subHeader}>{`Total : ${history.length}`}</Text>
			</View>

			<View style={historyStyle.cardContainer}>
				{/* Book Details */}
				{}
				<ScrollView>
					{history.length > 0 ? (
						history.map((item, index) => {
							return <Subcard item={item} key={index} />;
						})
					) : (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
								marginTop: 100,
							}}>
							<NoHistory />
							<Text
								style={{
									marginTop: 20,
									fontSize: 15,
									fontFamily: 'Lato_400Regular',
									opacity: 0.5,
								}}>
								You have not returned any books yet!
							</Text>
						</View>
					)}
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default History;
