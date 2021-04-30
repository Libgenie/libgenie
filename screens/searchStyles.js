import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import colors from '../config/pallette';

const search_styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  heading: {
    fontFamily: 'Barlow_500Medium',
    fontSize: 50,
    opacity: 0.3,
    letterSpacing: 1.5,
    lineHeight: 50,
  },

  subHeading: {
    fontFamily: 'Barlow_600SemiBold',
    fontSize: 45,
    lineHeight: 45,
    color: colors.seaGreen,
  },

  searchBox: {
    width: '100%',
    height: 50,
    // borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D6EFE7',
    paddingHorizontal: 15,

    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },

  searchItem: {
    // flex: 1,
    // borderWidth: 1,
    borderRadius: 20,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    // height: 'auto',
    padding: 10,
    marginBottom: 20,
    // elevation: 0.5,
  },
});

export default search_styles;
