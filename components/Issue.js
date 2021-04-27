import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import issuestyles from '../screens/dashboardstyles';
import { FontAwesome5 } from '@expo/vector-icons';

const Issue = issue => {
  const checkStatus = status => {
    switch (status) {
      case 1:
        return 'Issued';
      case 2:
        return 'Confirmed';
      case 3:
        return 'Pending';
    }
  };
  return (
    <View>
      <View style={issuestyles.listItem}>
        <View style={issuestyles.listIcon}>
          <FontAwesome5 name='clock' size={24} color='#33af85' />
        </View>
        <View style={{ width: '60%', marginLeft: -15 }}>
          <Text style={issuestyles.bookName} numberOfLines={1}>
            {issue.name}
          </Text>
          <Text style={issuestyles.lastDate}>{`Last date : 14.03.2001`}</Text>
        </View>
        <Text style={issuestyles.bookStatus}>{checkStatus(issue.status)}</Text>
      </View>
    </View>
  );
};

export default Issue;
