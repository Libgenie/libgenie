import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';
import homestyles from './dashboardstyles';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Lato_400Regular, Lato_300Light, useFonts } from '@expo-google-fonts/lato';
import Profile from '../components/Profile';
import Card from '../components/Card';
import { storeIssues, clearIssues } from '../store/actions/issue';

const Dashboard = props => {
  const dispatch = useDispatch();
  let [fontsLoaded, err] = useFonts({
    Lato_400Regular,
    Lato_300Light,
    Barlow_500Medium,
    Barlow_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  useEffect(() => {
    const unsubscribe = dispatch(storeIssues());
    return unsubscribe;
  }, [dispatch]);

  // UseEffect for first focus
  useEffect(() => {
    console.log('First Focus on Dashboard');
  });

  // UseEffect to run upon subsequent focuses
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('willFocus', payload => {
      console.log('Focued on Dashboard');
    });

    return () => {
      console.log('Removing Dashboard Listener');
      unsubscribe.remove();
    };
  }, [props.navigation]);

  return (
    <ImageBackground source={require('../assets/background.png')} style={homestyles.screen}>
      <Profile />
      <Card />
    </ImageBackground>
  );
};

export default Dashboard;
