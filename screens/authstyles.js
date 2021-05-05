import { StyleSheet, Platform, StatusBar } from 'react-native';
import color from '../config/pallette';
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // borderWidth: 2,

    // alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: color.screenbg,
  },

  textContainer: {
    // borderWidth: 2,
    // marginTop: 75,
    marginBottom: 100,
  },

  welcomeText: {
    color: color.black,
    fontFamily: 'Barlow_500Medium',
    fontSize: 40,
    textAlign: 'center',
  },

  subwelcomeText: {
    marginTop: 5,
    fontFamily: 'Lato_400Regular',
    fontSize: 17,
    textAlign: 'center',
    color: color.lightGray,
  },

  welcomeImageContainer: {
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeImage: {
    width: 200,
    height: 100,
    // borderWidth: 2,
    marginTop: 100,
  },

  formContainer: {
    // borderWidth: 2,
  },

  formInput: {
    padding: 10,
    borderWidth: 2,
    borderColor: color.bg,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 18,
    // fontFamily: 'Poppins_500Medium',
    backgroundColor: color.bg,
  },

  formButton: {
    marginTop: 25,
    backgroundColor: color.seaGreen,
    borderWidth: 1,
    borderColor: color.seaGreen,
    borderRadius: 12,
    padding: 12,
    elevation: 6,
  },

  formButtonText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    fontFamily: 'Lato_400Regular',
    letterSpacing: 2,
  },
});

export default styles;
