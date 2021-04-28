import React from 'react';
import {View, Text} from 'react-native';

const BookSearchComponent = ({book}) => {
	console.log(book);
	return (
		<View style={{flex: 1}}>
			<Text ellipsizeMode='tail' numberOfLines={2} style={{fontSize: 20}}>
				{book.name}
			</Text>
		</View>
	);
};
export default BookSearchComponent;
