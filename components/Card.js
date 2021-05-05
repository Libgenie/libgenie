import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import cardstyles from '../screens/dashboardstyles';
import Issue from './Issue';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const Card = () => {
  const user = useSelector(state => state.user);
  const issues = useSelector(state => state.issues);
  let countArr = [0, 0, 0, 0];
  // console.log('Issues Array', issues);

  issues.forEach(issue => {
    if (issue.status != -1) {
      countArr[issue.status] += 1;
    } else {
      countArr[0] += 1;
    }
  });

  console.log('count', countArr);

  const cards = [
    {
      key: 1,
      icon: (
        <MaterialCommunityIcons
          name='bookmark-check-outline'
          size={24}
          color='black'
          style={cardstyles.subCardIcon}
        />
      ),
      heading: 'Issued',
      count: countArr[1],
    },
    {
      key: 2,
      icon: (
        <AntDesign name='clockcircleo' size={20} color='black' style={cardstyles.subCardIcon} />
      ),
      heading: 'Pending',
      count: countArr[3],
    },
    {
      key: 3,
      icon: (
        <FontAwesome name='thumbs-o-up' size={21.5} color='black' style={cardstyles.subCardIcon} />
      ),
      heading: 'Ready',
      count: countArr[2],
    },
    {
      key: 4,
      icon: <FontAwesome name='bomb' size={20} color='black' style={cardstyles.subCardIcon} />,
      heading: 'Late',
      count: countArr[0],
    },
  ];
  return (
    <View style={cardstyles.cardContainer}>
      <ScrollView>
        <Text numberOfLines={1} style={cardstyles.name}>
          {user.display_name}
        </Text>
        <Text style={cardstyles.detail}>{`${user.stream}, SEMESTER : ${user.semester}`}</Text>

        <View style={cardstyles.subCardWrapper}>
          {cards.map(card => {
            return (
              <View style={cardstyles.subCardContainer} key={card.key}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    alignItems: 'baseline',
                    // borderWidth: 1,
                  }}>
                  {card.icon}
                  <Text style={cardstyles.subCardHeading}>{card.heading}</Text>
                </View>
                <Text style={cardstyles.subCardNumber}>
                  {card.count === 1 ? `${card.count} BOOK` : `${card.count} BOOKS`}
                </Text>
              </View>
            );
          })}
        </View>

        <View style={cardstyles.pendingListWrapper}>
          <Text style={cardstyles.pendingListHeader}>Issue Status</Text>
          {issues.length === 0 ? (
            <View style={{ alignItems: 'center', marginTop: 20, opacity: 0.6 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Barlow_500Medium',

                  marginBottom: 20,
                }}>
                No Books Issued, why not issue some?
              </Text>
              <AntDesign name='book' size={50} color='#ecbe05' />
            </View>
          ) : (
            issues.map(issue => {
              return <Issue key={issue.uuid} issue={issue} />;
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Card;
