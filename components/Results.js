import {connectInfiniteHits} from 'react-instantsearch-dom';
import React from 'react';
import {FlatList} from 'react-native';
import BookSearchComponent from '../components/BookSearchComponent';
const Results = connectInfiniteHits(({hits, hasMore, refineNext}) => {
	const onEndReached = () => {
		if (hasMore) {
			refineNext();
		}
	};
	console.log(hits);
	return (
		<FlatList
			data={hits}
			columnWrapperStyle={{justifyContent: 'space-evenly'}}
			onEndReached={onEndReached}
			numColumns={2}
			keyExtractor={repo => repo.objectID}
			renderItem={({item}) => <BookSearchComponent book={item} />}
		/>
	);
});
export default Results;
