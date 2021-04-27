import React from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { logoutUser } from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import homestyles from './dashboardstyles';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Lato_400Regular, Lato_300Light, useFonts } from '@expo-google-fonts/lato';
import Profile from '../components/Profile';
import Card from '../components/Card';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      props.navigation.navigate('AuthNavigator');
      console.log('Logged Out');
    } catch (err) {
      console.log(err);
    }
  };
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
    <ImageBackground source={require('../assets/background.png')} style={homestyles.screen}>
      <Profile />
      <Card />
    </ImageBackground>
  );
};

export default Dashboard;
