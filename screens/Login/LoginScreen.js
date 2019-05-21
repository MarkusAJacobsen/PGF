import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import { LoginButton, AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import PGCRequest from "../../network/PGCRequest";
import {PGCRequestList} from "../../network/PGCRequestList";

class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.storeDataInAsync = this.storeDataInAsync.bind(this);
    }

    // Handles login with Google
    signInGoogle = async () => {
        try {
          // Prepare to sign in
          GoogleSignin.configure();
          await GoogleSignin.hasPlayServices();

          // Try signing in, opens up the prompt for the user to sign in with Google
          const userInfo = await GoogleSignin.signIn();
          
          // Save the data in AsyncStorage
          this.storeDataInAsync(userInfo.user.id, userInfo.user.name, "GG");
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

    // Handles login with Facebook
    signInFacebook = (error, result) => {
          // Code mainly from react-native-fbsdk, error handling is first there.
          if (error) {
              console.log("login has error: " + result.error);
              console.log(error);
              console.log(result);
          } else if (result.isCancelled) {
              console.log("login is cancelled.");
          } else {
              // Start of trying to log in code
              // Create the callback for the Graph API request
              const facebookDataCallback = (error: ?Object, result: ?Object) => {
                if (error) {
                  console.log('Error fetching data: ' + error.toString());
                } else {
                  // Once the name of the user is fetched, store id and name in AsyncStorage
                  this.storeDataInAsync(result.id, result.name, "FB");
                }
              };

              // Get an access token (this logs the user in)
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  // Once the access token is acquired, use the Graph API to get the name
                  const infoRequest = new GraphRequest('/me', null, facebookDataCallback);
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              );
          }
    }

    //Create response callback. - Pulled directly from react-native-fbsdk guide
    storeDataInAsync = async (userid, name, authMethod) => {
        try {
            // Save the data locally in AsyncStorage
            AsyncStorage.setItem('@PGF_userid', userid);
            AsyncStorage.setItem('@PGF_authMethod', authMethod);
            AsyncStorage.setItem('@PGF_name', name);
            AsyncStorage.setItem('@PGF_area', "Gjøvik, Norway");

            // Save the data in PGC
            Promise.all([
              PGCRequest(PGCRequestList.USER_CREATE, [userid, name, authMethod])
            ]).then((result) => {
                // If the user was created/exists in PGC, navigate to Main
                if (result[0].ok) {
                  this.props.navigation.navigate('Main');
                }
            });
        } catch (error) {
            console.log(error);
        } 
    }

  render() {
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
