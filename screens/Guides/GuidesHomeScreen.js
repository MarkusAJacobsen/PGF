import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { vars as globalVars } from '@utils/global';

export default class GuidesHomeScreen extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: globalVars.header,
    },
    headerTintColor: globalVars.ligthGrey,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Guides</Text>
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
