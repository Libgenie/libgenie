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
import historyStyle from '../screens/historystyles';
import Returned from '../assets/Returned';

const HCard = ({item}) => {
	const return_date = new Date(item.return_date);
	const pickup_date = new Date(item.pickup_date);
	const actual_return = new Date(item.actual_return_date);
	return (
		<View style={historyStyle.subCardContainer}>
			<View style={{width: '70%'}}>
				<Text style={historyStyle.bookName} numberOfLines={1}>
					{item.name.charAt(0).toUpperCase() + item.name.substring(1)}
				</Text>

				<View style={historyStyle.dateContainer}>
					<View
						style={{
							width: 10,
							height: 10,
							borderRadius: 10,
							marginHorizontal: 5,
							backgroundColor: '#33af85',
							opacity: 0.6,
						}}></View>
					<Text
						style={
							historyStyle.date
						}>{`Picked up on: ${pickup_date.toDateString()}`}</Text>
				</View>
				<View style={historyStyle.dateContainer}>
					<View
						style={{
							width: 10,
							height: 10,
							borderRadius: 10,
							marginHorizontal: 5,
							backgroundColor: 'magenta',
							opacity: 0.6,
						}}></View>
					<Text
						style={
							historyStyle.date
						}>{`Return Date : ${return_date.toDateString()}`}</Text>
				</View>
				<View style={historyStyle.dateContainer}>
					<View
						style={{
							width: 10,
							height: 10,
							borderRadius: 10,
							marginHorizontal: 5,
							backgroundColor: 'orange',
							opacity: 0.6,
						}}></View>
					<Text
						style={
							historyStyle.date
						}>{`Returned on: ${actual_return.toDateString()}`}</Text>
				</View>
			</View>
			<View style={{width: '30%', borderRadius: 5}}>
				<Returned />
			</View>
		</View>
	);
};

export default HCard;
