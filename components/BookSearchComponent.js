import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';
import searchstyles from '../screens/searchStyles';
import axios from 'axios';
import { useSelector } from 'react-redux';
const BookSearchComponent = ({ book }) => {
  const [error, setError] = useState({ message: null, state: false });
  const user = useSelector(state => state.auth);
  const issueBook = async () => {
    try {
      setError({ message: null, state: false });
      const response = await axios.post('https://libgenie.netlify.app/.netlify/functions/issue', {
        uuid: book.uuid.toString(),
        student_uid: user.uid.toString(),
      });
      console.log('THIS IS MY DATA RESPONSE', response.data);
    } catch (err) {
      setError({ state: true, message: err.response.data.body });
      console.log(err.response.data.body);
    }
  };

  useEffect(() => {
    if (error.state) {
      Alert.alert('Error!', error.message, [{ text: 'Ok', onPress: () => console.log('error') }]);
    }
  }, [error]);

  const handleIssue = () => {
    Alert.alert('Confirmation!', 'Are you sure you want to issue this book ?', [
      { text: 'Yes', onPress: issueBook },
      { text: 'No', onPress: () => console.log('Issue op cancelled') },
    ]);
  };
  //   console.log(book);
  return (
    // <View style={searchstyles.searchItem}>
    //   <View style={{ flexDirection: 'row', width: '70%', alignItems: 'center' }}>
    //     <Image
    //       style={{ width: 50, height: 70 }}
    //       source={{ uri: book.imageURL }}
    //       resizeMode='contain'
    //     />
    //     <Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 20 }}>
    //       {book.name}
    //     </Text>
    //   </View>

    //   <Button title='Issue me' onPress={handleIssue} />
    // </View>

    <View style={searchstyles.searchItem}>
      <View
        style={{
          width: '40%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E6E6E6',
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <Image
          style={{ width: 100, height: 200 }}
          source={{ uri: book.imageURL }}
          resizeMode='contain'
        />
      </View>
      <View
        style={{
          width: '60%',
          justifyContent: 'center',
          paddingLeft: 5,
          borderWidth: 2,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text
          ellipsizeMode='tail'
          numberOfLines={2}
          style={{ fontSize: 20, fontFamily: 'Barlow_500Medium' }}>
          {book.name.charAt(0).toUpperCase() + book.name.substring(1)}
        </Text>
        <Text>{'by ' + book.author}</Text>
        <Button title='Issue me' onPress={handleIssue} />
      </View>
    </View>
  );
};
export default BookSearchComponent;
