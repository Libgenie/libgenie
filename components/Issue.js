import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import issuestyles from '../screens/dashboardstyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { BookStatus, ListIcon } from './status.styled';

const Issue = ({ issue }) => {
  const checkStatus = status => {
    switch (status) {
      case 1:
        return 'Issued';
      case 2:
        return 'Ready';
      case 3:
        return 'Pending';
      default:
        return 'Late';
    }
  };

  const checkIcon = status => {
    switch (status) {
      case 1:
        return 'check-circle';
      case 2:
        return 'thumbs-up';
      case 3:
        return 'clock';
      default:
        return 'bomb';
    }
  };

  const iconColor = status => {
    switch (status) {
      case 1:
        return '#32a842';
      case 2:
        return '#078de0';
      case 3:
        return '#ecbe05';
      default:
        return '#c90411';
    }
  };
  const date = new Date(issue.return_date);
  console.log(issue);
  return (
    <View>
      <View style={issuestyles.listItem}>
        <ListIcon status={issue.status}>
          <FontAwesome5 name={checkIcon(issue.status)} size={24} color={iconColor(issue.status)} />
        </ListIcon>
        <View style={{ width: '47%', marginLeft: -13 }}>
          <Text style={issuestyles.bookName} numberOfLines={1}>
            {issue.name}
          </Text>
          <Text style={issuestyles.lastDate}>
            {!issue.return_date ? 'Last date : N.A' : `Last date : ${date.toDateString()}`}
          </Text>
        </View>
        <BookStatus status={issue.status}>{checkStatus(issue.status)}</BookStatus>
      </View>
    </View>
  );
};

export default Issue;
