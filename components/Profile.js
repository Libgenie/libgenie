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
import { clearIssues } from '../store/actions/issue';
import { logoutUser } from '../store/actions/auth';
import { removeUser } from '../store/actions/user';
import { withNavigation } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';

const Profile = props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      await dispatch(removeUser());
      await dispatch(clearIssues());
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
      <Text style={profilestyle.subHeader}>{`ID : ${user.college_id}`}</Text>
    </View>
  );
};

export default withNavigation(Profile);
