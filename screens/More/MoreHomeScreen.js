import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginManager } from 'react-native-fbsdk';
import { vars as globalVars, setUpUserData } from '@utils/global';

class MoreHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.exampleText = "Meny";

    // Common block that should be included in all constructors
    // to ensure userData is included properly.
    this.state = {
      userData: {
        uid: "",
        name: "",
        origin: "",
        area: "",
      }
    }
    setUpUserData().then((data) => {
      this.setState({
        userData: data,
      });
      this.props.userData = data;
    });
    // End of common block
  }
 
  // Wipes AsyncStorage, logs out Facebook users and navigates to the Auth screen
  signOut = async () => {
    await AsyncStorage.clear();
    LoginManager.logOut();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You are logged in as {this.state.userData.name} using auth method {this.state.userData.origin}.</Text>
        <Button
          title="Log out"
          onPress={this.signOut}
        />
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
export default MoreHomeScreen;
