import React, { Compontent } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { vars as globalvars } from '@utils/global';

// @flow 
const WelcomeScreen = ({ navigation }) => {
  return (
      <ImageBackground style={styles.backgroundImage}
        source={require('@assets/welcome-bg.png')}
      >
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.createProfileButton]}>
            <Text style={[styles.buttonText, styles.createProfileButtonText]}>Create profile</Text>
          </View>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.buttonText, styles.loginButtonText]}>Log in</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: globalvars.yellow,
    width: '100%', 
    height: '100%'
  },
  buttonContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    width: '100%',
  },
  button: {
    // width: 130,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createProfileButton: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  loginButton: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: globalvars.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  createProfileButtonText: {
    marginRight: 25,
  },
  loginButtonText: {
    marginLeft: 25,
  },
});