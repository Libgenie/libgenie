import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, Hits} from 'react-instantsearch-dom';
import {appId, apiKey, index} from '../secrets/alogoliaConfig';
import SearchBox from '../components/SearchBox';
import Results from '../components/Results';

const Search = props => {
	const searchClient = algoliasearch(appId, apiKey);

	// UseEffect for first focus
	useEffect(() => {
		console.log('First Focus on Search');
	});

	// UseEffect to run upon subsequent focuses
	useEffect(() => {
		const unsubscribe = props.navigation.addListener('willFocus', payload => {
			console.log('Focued on Search');
		});

		return () => {
			console.log('Removing Search Listener');
			unsubscribe.remove();
		};
	}, [props.navigation]);

	return (
		<View
			style={{
				paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
				borderWidth: 3,
				borderColor: 'red',

				// alignItems: 'center',
				flex: 1,
			}}>
			<InstantSearch searchClient={searchClient} indexName={index}>
				<View style={{alignItems: 'center'}}>
					<SearchBox />
				</View>

				<Results />
			</InstantSearch>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
});

export default Search;
