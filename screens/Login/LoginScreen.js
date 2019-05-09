import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {sendLoginDataToPGC} from "../../network/PGCLogin";

// @flow
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
    
    //Create response callback.
    _responseInfoCallback = (error: ?Object, result: ?Object) => {
      if (error) {
        console.log('Error fetching data: ' + error.toString());
      } else { 
        const { id, name } = result;
        AsyncStorage.setItem('@PGF_userid', id.toString());
        AsyncStorage.setItem('@PGF_username', name.toString());
      }
    } 

    signInFacebook = (error, result) => {
            // Create a graph request asking for user information with a callback to handle the response.
          if (error) {
              console.log("login has error: " + result.error);
              console.log(error);
              console.log(result);
          } else if (result.isCancelled) {
              console.log("login is cancelled.");
          } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => { 
                  this.storeDataInAsync(data, "FB"); 
                }
              );
          }
    }

    storeDataInAsync = async (data, authMethod) => {
        try {

            let userid = data.userID.toString();

            let infoRequest = new GraphRequest(
              '/me',
              null,
              this._responseInfoCallback,
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start(); 
            // set in _responseInfoCallback()
            // AsyncStorage.setItem('@PGF_userid', userid);
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
            const userName = await AsyncStorage.getItem('@PGF_username');
            if (value !== null) {
                this.props.navigation.navigate('Main', {name: userName});
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
        <GoogleSigninButton
          style={{ width: 192, height: 60 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signInGoogle} 
        />
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
