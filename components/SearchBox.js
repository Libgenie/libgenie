import { connectSearchBox } from 'react-instantsearch-dom';
import React from 'react';
import { TextInput, Dimensions } from 'react-native';
import searchstyle from '../screens/searchStyles';
const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
  console.log('Searchbox');
  return (
    <TextInput
      style={{ width: '90%', fontSize: 15 }}
      onChangeText={text => refine(text)}
      value={currentRefinement}
      placeholder='Search Something'
      placeholderTextColor='#b3b3b3'
      clearButtonMode='always'
      spellCheck={false}
      autoCorrect={false}
      autoCapitalize='none'
    />
  );
});

export default SearchBox;
