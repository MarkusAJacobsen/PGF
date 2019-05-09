import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { vars as globalVars } from '@utils/global';

// TODO: step-by-step
/* 
  1. All garden items
  2. Click on item and do step-by-step 
*/
// @flow 
export default class GuidesHomeScreen extends Component {

  constructor(props) {
    super(props); 
  }   

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);

    if(data != null) console.log(data);

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
