import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';
import colors from '../config/pallette';

const history_styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		// borderWidth: 2,

		// alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between',
	},

	headerContainer: {
		// borderWidth: 2,
		width: '100%',
		height: '15%',
		justifyContent: 'center',
		paddingHorizontal: 15,
	},

	header: {
		fontFamily: 'Barlow_600SemiBold',
		fontSize: 40,
		color: 'white',
	},

	subHeader: {
		fontSize: 'Lato_400Regular',
		fontSize: 18,
		color: 'white',
	},

	cardContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height > 700 ? '85%' : '82%',
		backgroundColor: '#f3f8fe',
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		// paddingHorizontal: 12,
		paddingTop: 30,
	},

	subCardContainer: {
		width: '100%',
		// height: Dimensions.get('window').height / 7,
		// borderWidth: 2,
		// borderRadius: 20,
		marginBottom: 17,
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 10,
		elevation: 2,
		flexDirection: 'row',
		alignItems: 'center',
	},

	bookName: {
		fontFamily: 'Barlow_600SemiBold',
		fontSize: 20,
		marginBottom: 10,
		marginLeft: 5,
		opacity: 0.8,
		width: '80%',
	},

	dateContainer: {
		// borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
		// marginLeft: 5,
	},

	date: {
		fontFamily: 'Barlow_500Medium',
		fontSize: 15,
		opacity: 0.8,
	},
});

export default history_styles;
