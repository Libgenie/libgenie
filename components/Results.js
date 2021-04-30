import { connectInfiniteHits } from 'react-instantsearch-dom';
import React from 'react';
import { FlatList } from 'react-native';
import BookSearchComponent from '../components/BookSearchComponent';
const Results = connectInfiniteHits(({ hits, hasMore, refine }) => {
  const onEndReached = () => {
    if (hasMore) {
      refine();
    }
  };
  console.log(hits);
  return (
    <FlatList
      data={hits}
      columnWrapperStyle={{ justifyContent: 'space-evenly' }}
      onEndReached={onEndReached}
      numColumns={2}
      keyExtractor={repo => repo.objectID}
      renderItem={({ item }) => <BookSearchComponent book={item} />}
    />
  );
});
export default Results;
