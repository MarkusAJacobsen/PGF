import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {sendLoginDataToPGC} from "../../network/PGCLogin";

class LoginScreen extends Component {
    signInGoogle = async () => {
        try {
          GoogleSignin.configure();
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signInSilently();
          
          this.storeDataInAsync(userInfo.user.id, "GG");
        } catch (error) {
          console.log(error);
          console.log("google error");
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (f.e. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
    };
      
    signInFacebook = (error, result) => {
          if (error) {
              console.log("login has error: " + result.error);
              console.log(error);
              console.log(result);
          } else if (result.isCancelled) {
              console.log("login is cancelled.");
          } else {
              AccessToken.getCurrentAccessToken().then(
              (data) => {
                //console.log(data.accessToken.toString())
                this.storeDataInAsync(data.userID.toString(), "FB");
                
              }
              );
          }
    }

    storeDataInAsync = async (userid, authMethod) => {
        try {
            AsyncStorage.setItem('@PGF_userid', userid);
            AsyncStorage.setItem('@PGF_authMethod', authMethod);
            Promise.all([sendLoginDataToPGC(userid, authMethod)]).then((result) => {
                console.log(result);
            });
            this.props.navigation.navigate('Main');
        } catch (error) {
            console.log(error);
        } 
    }

    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@PGF_userid');
            const value2 = await AsyncStorage.getItem('@PGF_authMethod');
            if (value !== null) {
                this.props.navigation.navigate('Main');
            } else {
                LoginManager.logOut();
            }
        } catch (error) {
            console.log(error);
        }
    }


  render() {

    //this.retrieveData();

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Velkommen til din Gartner i Lomma!</Text>
        <Text style={styles.instructions}>For å starte din reise, har du kommet på riktig sted.</Text>
        <GoogleSigninButton
    style={{ width: 192, height: 60 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.signInGoogle} />
    <LoginButton
          onLoginFinished={this.signInFacebook}
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

export default LoginScreen;
