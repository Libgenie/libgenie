import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import profilestyle from '../screens/dashboardstyles';
import { AntDesign } from '@expo/vector-icons';

const handleLogout = () => {
  console.log('logout pressed');
};
const Profile = () => {
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
        <AntDesign name='logout' size={25} color='white' onPress={handleLogout} />
      </View>
      <Text style={profilestyle.subHeader}>ID : 31001219052</Text>
    </View>
  );
};

export default Profile;
