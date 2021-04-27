import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import cardstyles from '../screens/dashboardstyles';
import Issue from './Issue';
import { useSelector } from 'react-redux';

const Card = () => {
  const user = useSelector(state => state.user);
  const issues = useSelector(state => state.issues);
  console.log('Issues Array', issues);
  return (
    <View style={cardstyles.cardContainer}>
      <ScrollView>
        <Text numberOfLines={1} style={cardstyles.name}>
          {user.display_name}
        </Text>
        <Text style={cardstyles.detail}>{`${user.stream.toUpperCase()}, SEMESTER : ${
          user.semester
        }`}</Text>

        <View style={cardstyles.subCardWrapper}>
          {cards.map(card => {
            return (
              <View style={cardstyles.subCardContainer} key={card.key}>
                <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                  <Image source={card.icon} style={cardstyles.subCardIcon} />
                  <Text style={cardstyles.subCardHeading}>{card.heading}</Text>
                </View>
                <Text style={cardstyles.subCardNumber}>{card.count} BOOKS</Text>
              </View>
            );
          })}
        </View>

        <View style={cardstyles.pendingListWrapper}>
          <Text style={cardstyles.pendingListHeader}>Issue Status</Text>
          {issues.map(issue => {
            return <Issue key={issue.uuid} issue={issue} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;
