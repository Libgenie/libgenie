import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';
import searchstyles from '../screens/searchStyles';
import axios from 'axios';
import { useSelector } from 'react-redux';
const BookSearchComponent = ({ book }) => {
  const [error, setError] = useState({ message: null, state: false });
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(state => state.auth);
  const issueBook = async () => {
    try {
      setIsLoading(true);
      setError({ message: null, state: false });
      const response = await axios.post('https://libgenie.netlify.app/.netlify/functions/issue', {
        uuid: book.uuid.toString(),
        student_uid: user.uid.toString(),
      });
      console.log('THIS IS MY DATA RESPONSE', response.data);
      Alert.alert('Confirmation', response.data.body + '. Navigate to dashboard for more info.', [
        { text: 'Ok', onPress: () => console.log('successful') },
      ]);
    } catch (err) {
      setError({ state: true, message: err.response.data.body });
      console.log(err.response.data.body);
    } finally {
      setIsLoading(false);
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
    <View style={searchstyles.searchItem}>
      <View style={{ alignItems: 'center', elevation: 1, borderRadius: 15, marginBottom: 10 }}>
        <Image
          style={{ width: 175, height: 200, borderRadius: 15 }}
          source={{ uri: book.imageURL }}
          resizeMode='contain'
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={{ fontSize: 17, fontFamily: 'Barlow_600SemiBold' }}>
          {book.name.charAt(0).toUpperCase() + book.name.substring(1)}
        </Text>
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={{
            fontSize: 12,
            fontFamily: 'Barlow_500Medium',
            opacity: 0.5,
          }}>{`by ${book.author}`}</Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Barlow_500Medium',
            opacity: 0.5,
            marginBottom: 10,
          }}>{`Edition: ${book.edition}`}</Text>
        {/* <Button title='Issue me' onPress={handleIssue} /> */}

        <TouchableOpacity onPress={handleIssue} disabled={isLoading} activeOpacity={0.6}>
          <View
            style={{
              // marginTop: 25,
              backgroundColor: '#33af85',
              borderWidth: 1,
              borderColor: '#33af85',
              borderRadius: 12,
              padding: 12,
              elevation: 6,
            }}>
            {!isLoading ? (
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 17,
                  color: 'white',
                  fontFamily: 'Lato_400Regular',
                  letterSpacing: 2,
                }}>
                Issue Me
              </Text>
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  color: 'white',
                  fontFamily: 'Lato_400Regular',
                  letterSpacing: 2,
                }}>
                Requesting...
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BookSearchComponent;
