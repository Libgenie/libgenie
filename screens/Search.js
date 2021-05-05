import React, {useEffect} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	StatusBar,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, Hits} from 'react-instantsearch-dom';
import {appId, apiKey, index} from '../secrets/algoliaConfig';
import {AntDesign} from '@expo/vector-icons';
import SearchBox from '../components/SearchBox';
import Results from '../components/Results';
import searchStyles from './searchStyles';

const Search = props => {
	const searchClient = algoliasearch(appId, apiKey);
	// let [fontsLoaded, err] = useFonts({
	//   Lato_400Regular,
	//   Lato_300Light,
	//   Barlow_500Medium,
	//   Barlow_600SemiBold,
	// });

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

	// if (!fontsLoaded) {
	//   return <AppLoading />;
	// }
	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			style={{flex: 1, borderColor: 'red', borderWidth: 5}}>
			<View
				style={{
					paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
					// borderWidth: 3,
					// borderColor: 'red',
					paddingHorizontal: 15,
					backgroundColor: '#f3f8fe',
					flex: 1,
				}}>
				<InstantSearch searchClient={searchClient} indexName={index}>
					<View style={searchStyles.headingContainer}>
						<View>
							<Text style={searchStyles.heading}>Search</Text>
							<Text style={searchStyles.subHeading}>your book</Text>
						</View>
						<View>
							<AntDesign name='book' size={50} color='#33af85' />
						</View>
					</View>
					<View style={searchStyles.searchBox}>
						<AntDesign
							name='search1'
							size={24}
							color='#808C92'
							style={{marginRight: 10}}
						/>
						<SearchBox />
					</View>

					<Results />
				</InstantSearch>
			</View>
		</TouchableWithoutFeedback>
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
