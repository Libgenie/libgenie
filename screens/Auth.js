import React, { useState } from 'react';
import {
  Stylesheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import styles from './authstyles';
import AppLoading from 'expo-app-loading';
import { Formik } from 'formik';
import { Barlow_500Medium, Barlow_600SemiBold } from '@expo-google-fonts/barlow';
import { Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';

const handleLoginButton = () => {
  console.log('Login Pressed');
};

const Auth = () => {
  let [fontsLoaded, err] = useFonts({
    Poppins_500Medium,
    Barlow_500Medium,
    Barlow_600SemiBold,
  });

  const [enableShift, setEnableShift] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.screen} enabled={enableShift}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.welcomeImageContainer}>
            <Image
              source={require('../assets/welcome.png')}
              style={styles.welcomeImage}
              resizeMode='contain'
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.subwelcomeText}>Explore the world of books</Text>
          </View>
          <View>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, actions) => {
                actions.resetForm();
                console.log(values);
              }}>
              {props => (
                <View style={styles.formContainer}>
                  <TextInput
                    placeholder='Email'
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    style={styles.formInput}
                    placeholderTextColor='#b3b3b3'
                  />

                  <TextInput
                    placeholder='Password'
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                    style={styles.formInput}
                    secureTextEntry={true}
                    placeholderTextColor='#b3b3b3'
                    onFocus={() => console.log('focused password')}
                  />

                  <TouchableOpacity onPress={props.handleSubmit}>
                    <View style={styles.formButton}>
                      <Text style={styles.formButtonText}>LOGIN</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Auth;
