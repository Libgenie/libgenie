import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { logoutUser } from '../store/actions/auth';
import { useDispatch } from 'react-redux';
import homestyles from './dashboardstyles';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Lato_400Regular, Lato_300Light, useFonts } from '@expo-google-fonts/lato';
import { FontAwesome5 } from '@expo/vector-icons';

const cards = [
  {
    key: 1,
    icon: require('../assets/past.png'),
    heading: 'Current',
    count: 15,
  },
  {
    key: 2,
    icon: require('../assets/past.png'),
    heading: 'Pending',
    count: 15,
  },
  {
    key: 3,
    icon: require('../assets/past.png'),
    heading: 'Late',
    count: 15,
  },
  {
    key: 4,
    icon: require('../assets/past.png'),
    heading: 'Past',
    count: 15,
  },
];

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
      <View style={homestyles.bgContainer}>
        <Text style={homestyles.header}>Your Profile</Text>
        <Text style={homestyles.subHeader}>ID : 31001219052</Text>
      </View>

      <View style={homestyles.cardContainer}>
        <ScrollView style={{ flex: 1 }}>
          <Text numberOfLines={1} style={homestyles.name}>
            Ishika Mukherjee
          </Text>
          <Text style={homestyles.detail}>BCA,4TH SEMESTER</Text>

          <View style={homestyles.subCardWrapper}>
            {cards.map(card => {
              return (
                <View style={homestyles.subCardContainer} key={card.key}>
                  <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                    <Image source={card.icon} style={homestyles.subCardIcon} />
                    <Text style={homestyles.subCardHeading}>{card.heading}</Text>
                  </View>
                  <Text style={homestyles.subCardNumber}>{card.count} BOOKS</Text>
                </View>
              );
            })}
          </View>

          <View style={homestyles.pendingListWrapper}>
            <Text style={homestyles.pendingListHeader}>Issue Status</Text>

            <View>
              <View style={homestyles.listItem}>
                <View style={homestyles.listIcon}>
                  <FontAwesome5 name='clock' size={24} color='#33af85' />
                </View>
                <View style={{ width: '60%', marginLeft: -15 }}>
                  <Text style={homestyles.bookName} numberOfLines={1}>
                    Direful tasteful cakes blah blah blah blah blah
                  </Text>
                  <Text style={homestyles.lastDate}>Last date : 12.03.21</Text>
                </View>
                <Text style={homestyles.bookStatus}>Pending</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Dashboard;
