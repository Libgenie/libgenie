import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { storeHistory } from '../store/actions/history';
import historyStyle from './historystyles';

const History = props => {
  const dispatch = useDispatch();
  const history = useSelector(state => state.history);
  // UseEffect for first focus
  useEffect(() => {
    console.log('First Focus on History');
    const handleDispatch = async () => {
      await dispatch(storeHistory());
    };
    handleDispatch();
  }, [dispatch]);

  // UseEffect to run upon subsequent focuses
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('willFocus', payload => {
      console.log('Focued on History');
      const handleDispatch = async () => {
        await dispatch(storeHistory());
      };
      handleDispatch();
    });

    return () => {
      console.log('Removing History Listener');
      unsubscribe.remove();
    };
  }, [props.navigation]);
  console.log('History from screen', history);
  return (
    <ImageBackground source={require('../assets/historybg.png')} style={historyStyle.screen}>
      <View style={historyStyle.headerContainer}>
        <Text style={historyStyle.header}>Issue History</Text>
        <Text style={historyStyle.subHeader}>Total : 12</Text>
      </View>
      <View style={historyStyle.cardContainer}>
        {/* Book Details */}
        <View style={historyStyle.subCardContainer}>
          <View style={{ width: '70%' }}>
            <Text style={historyStyle.bookName}>This is my book name</Text>

            <View style={historyStyle.dateContainer}>
              <View style={historyStyle.dateBullete}></View>
              <Text style={historyStyle.date}>Issued on: April 10,2021</Text>
            </View>
            <View style={historyStyle.dateContainer}>
              <View style={historyStyle.dateBullete}></View>
              <Text style={historyStyle.date}>Return Date: April 10,2021</Text>
            </View>
            <View style={historyStyle.dateContainer}>
              <View style={historyStyle.dateBullete}></View>
              <Text style={historyStyle.date}>Returned on: April 10,2021</Text>
            </View>
          </View>
          <View style={{ width: '30%', borderRadius: 5 }}>
            <Image
              style={{ width: 100, height: 110, borderRadius: 5 }}
              source={require('../assets/background.png')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default History;
