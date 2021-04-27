import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import profilestyle from '../screens/dashboardstyles';
import { AntDesign } from '@expo/vector-icons';
import { logoutUser } from '../store/actions/auth';
import { removeUser } from '../store/actions/user';
import { withNavigation } from 'react-navigation';
import { useDispatch } from 'react-redux';

const Profile = props => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      dispatch(removeUser());
      dispatch(clearIssues());
    } catch (err) {
      console.log('Error while logging out', err);
      console.log(err);
    } finally {
      props.navigation.navigate('SignInScreen');
    }
  };

  const promptLogout = () => {
    Alert.alert('Warning!', 'Are you sure you want to logout?', [
      {
        text: 'Yes',
        onPress: handleLogout,
      },
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Logout Op Cancelled');
        },
      },
    ]);
  };

  return (
    <View style={profilestyle.bgContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={profilestyle.header}>Your Profile</Text>
        <AntDesign name='logout' size={25} color='white' onPress={promptLogout} />
      </View>
      <Text style={profilestyle.subHeader}>ID : 31001219052</Text>
    </View>
  );
};

export default withNavigation(Profile);
