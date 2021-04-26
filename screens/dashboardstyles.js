import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import colors from '../config/pallette';
const home_styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // borderWidth: 2,

    // alignItems: 'center',
    flex: 1,
    // justifyContent: 'space-between',
  },

  bgContainer: {
    // borderWidth: 2,
    position: 'relative',
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: -10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    height: Dimensions.get('window').height / 2 + 140,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 12,
    paddingTop: 10,
  },

  name: {
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 35,
    color: colors.black,
    marginBottom: 5,
  },

  detail: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    color: colors.black,
    opacity: 0.5,
    marginBottom: 20,
  },

  subCardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  subCardContainer: {
    width: Dimensions.get('window').width / 2.25,
    height: Dimensions.get('window').height / 7,
    // borderWidth: 2,
    borderRadius: 10,
    marginBottom: 17,
    backgroundColor: colors.cardPink,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  subCardIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  subCardHeading: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    letterSpacing: 2,
    opacity: 0.5,
  },

  subCardNumber: {
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 20,
    letterSpacing: 2,
    opacity: 0.7,
  },

  pendingListWrapper: {
    // borderWidth: 2,
    height: Dimensions.get('window').height / 4.5,
  },
  pendingListHeader: {
    fontFamily: 'Lato_400Regular',
    fontSize: 20,
    color: colors.black,
    letterSpacing: 1.5,
    opacity: 0.7,
    marginBottom: 15,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  listIcon: {
    backgroundColor: '#a2f8f8',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    padding: 10,
    // marginRight: 10,
  },

  bookName: {
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 16,
    opacity: 0.7,
  },

  lastDate: {
    opacity: 0.5,
  },

  bookStatus: {
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 16,
    color: colors.seaGreen,
  },
});

export default home_styles;
