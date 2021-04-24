import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import { logoutUser } from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import Girl from '../assets/profile-female';
import homestyles from './dashboardstyles';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato';

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
    Barlow_500Medium,
    Barlow_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={homestyles.screen}>
      <View style={homestyles.imageContainer}>
        <Girl style={homestyles.image} />
      </View>

      <View style={homestyles.cardContainer}>
        <View style={homestyles.cardHeaderContainer}>
          <Text style={homestyles.cardHeader}>Ishika</Text>
          <Text style={homestyles.cardHeader}>Mukherjee</Text>
        </View>
        <Text style={homestyles.cardSubHeader}>BCA,4th SEMESTER☀</Text>
        <View style={homestyles.infoContainer}>
          <View style={homestyles.aSubCard}>
            <Text>Past Issue</Text>
            <Text>15</Text>
          </View>
          <View style={homestyles.bSubCard}>
            <Text>Current Issue</Text>
            <Text>15</Text>
          </View>
          <View style={homestyles.cSubCard}>
            <Text>Running late</Text>
            <Text>15</Text>
          </View>
        </View>
        {/* <Button title='Logout' onPress={handleLogout} /> */}
      </View>
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

export default Dashboard;
