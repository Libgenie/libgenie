import {connectSearchBox} from 'react-instantsearch-dom';
import React from 'react';
import {TextInput, Dimensions} from 'react-native';
const SearchBox = connectSearchBox(({refine, currentRefinement}) => {
	console.log('Searchbox');
	return (
		<TextInput
			style={{
				width: Dimensions.get('window').width,
				height: Dimensions.get('window').height / 15,
				borderWidth: 1,
			}}
			onChangeText={text => refine(text)}
			value={currentRefinement}
			placeholder='Search Something'
			clearButtonMode='always'
			spellCheck={false}
			autoCorrect={false}
			autoCapitalize='none'
		/>
	);
});

export default SearchBox;
