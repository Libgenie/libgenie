import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import Welcome from '../assets/Welcome';
import styles from './authstyles';
import AppLoading from 'expo-app-loading';
import { Formik } from 'formik';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato';

import { loginUser } from '../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Auth = props => {
  const [enableShift, setEnableShift] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([false, null]);
  const dispatch = useDispatch();

  let [fontsLoaded, err] = useFonts({
    Lato_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
  });

  useEffect(() => {
    if (error[0]) {
      Alert.alert('Failed', error[1], [
        {
          text: 'Okay',
          onPress: () => {
            console.log('Alerted!');
          },
        },
      ]);
    }
  }, [error]);

  const performLogin = async values => {
    try {
      setIsLoading(true);
      setError([false, null]);
      await dispatch(loginUser(values.email, values.password));
      setIsLoading(false);
      props.navigation.navigate('BottomMenuTabNavigator');
      console.log('Done');
    } catch (err) {
      console.log('Error Code : ', err.code);
      console.log('Error Message : ', err.message);
      if (err.code === 'auth/invalid-email' || err.code === 'auth/wrong-password')
        setError([true, 'Invalid Credentials : Wrong Username or Password']);
      else setError([true, 'Something went wrong!']);
      setIsLoading(false);
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView behavior='height' enabled={true} style={styles.screen}>
      <ScrollView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1, borderColor: 'red', borderWidth: 5 }}>
          <View
            style={{
              flex: 1,
              // justifyContent: 'space-between',
              paddingHorizontal: 30,
              borderWidth: 2,
            }}>
            <View style={styles.welcomeImageContainer}>
              <Welcome />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.subwelcomeText}>Explore the world of books</Text>
            </View>
            <View>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => {
                  // actions.resetForm();
                  performLogin(values);
                }}>
                {props => (
                  <View style={styles.formContainer}>
                    <TextInput
                      placeholder='Email'
                      onChangeText={props.handleChange('email')}
                      value={props.values.email}
                      style={styles.formInput}
                      placeholderTextColor='#b3b3b3'
                      onFocus={() => setEnableShift(true)}
                    />

                    <TextInput
                      placeholder='Password'
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                      style={styles.formInput}
                      secureTextEntry={true}
                      placeholderTextColor='#b3b3b3'
                      onFocus={() => setEnableShift(true)}
                    />

                    <TouchableOpacity onPress={props.handleSubmit}>
                      <View style={styles.formButton}>
                        {!isLoading ? (
                          <Text style={styles.formButtonText}>LOGIN</Text>
                        ) : (
                          <Text style={styles.formButtonText}>Authenticating...</Text>
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Auth;
