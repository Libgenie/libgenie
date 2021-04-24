import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import color from '../config/pallette';
const home_styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // borderWidth: 2,

    // alignItems: 'center',
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: color.screenbg,
  },
  imageContainer: {
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height:
      Dimensions.get('window').height > 600
        ? Dimensions.get('window').height / 3 + 50
        : Dimensions.get('window').height / 3,
    // overflow: 'visible',
    // position: 'relative',
  },

  image: {
    // overflow: 'visible',
    // position: 'absolute',
    width: '100%',
    height: '100%',
  },

  cardContainer: {
    borderWidth: 2,
    borderColor: color.seaGreen,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 15,
    width: Dimensions.get('window').width,
    backgroundColor: color.seaGreen,
    height:
      Dimensions.get('window').height > 600
        ? Dimensions.get('window').height
        : Dimensions.get('window').height / 3,
  },

  cardHeaderContainer: {
    // borderWidth: 2,
    marginBottom: 10,
  },

  cardHeader: {
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 40,
    color: 'white',
    padding: 0,
    lineHeight: 40,
  },

  cardSubHeader: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    color: 'white',
    marginBottom: 15,
  },

  infoContainer: {
    // borderWidth: 2,
    // borderColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: Dimensions.get('window').width,
  },

  aSubCard: {
    borderWidth: 2,
    borderColor: color.cardOrange,
    borderRadius: 20,
    elevation: 5,
    width: Dimensions.get('window').width / 4 + 10,
    height: Dimensions.get('window').height / 5,
    backgroundColor: color.cardOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bSubCard: {
    borderWidth: 2,
    borderColor: color.cardYellow,
    borderRadius: 20,
    elevation: 5,
    width: Dimensions.get('window').width / 4 + 10,
    height: Dimensions.get('window').height / 5,
    backgroundColor: color.cardYellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cSubCard: {
    borderWidth: 2,
    borderColor: color.cardPink,
    borderRadius: 20,
    elevation: 5,
    width: Dimensions.get('window').width / 4 + 10,
    height: Dimensions.get('window').height / 5,
    backgroundColor: color.cardPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default home_styles;
