import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import issuestyles from '../screens/dashboardstyles';
import { FontAwesome5 } from '@expo/vector-icons';

const Issue = () => {
  return (
    <View>
      <View style={issuestyles.listItem}>
        <View style={issuestyles.listIcon}>
          <FontAwesome5 name='clock' size={24} color='#33af85' />
        </View>
        <View style={{ width: '60%', marginLeft: -15 }}>
          <Text style={issuestyles.bookName} numberOfLines={1}>
            Direful tasteful cakes blah blah blah blah blah
          </Text>
          <Text style={issuestyles.lastDate}>Last date : 12.03.21</Text>
        </View>
        <Text style={issuestyles.bookStatus}>Issued</Text>
      </View>
    </View>
  );
};

export default Issue;
