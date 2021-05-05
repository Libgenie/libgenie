import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './secrets/firebaseConfig';
import AuthNavigator from './navigation/AuthNavigator';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Lato_400Regular, Lato_300Light, useFonts } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux';
import store from './store';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  console.log('Initialized Firebase...');
}

export default function App() {
  LogBox.ignoreLogs(['Setting a timer for a long period of time']);
  let [fontsLoaded, err] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Barlow_500Medium,
    Barlow_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AuthNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
