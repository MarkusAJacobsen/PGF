import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const heading = 'My Garden';

class Header extends Component {
  render() {
    return(
        <View style={styles.container}>          
          <Text style={styles.heading}>{heading}</Text>  
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71E671',
    height: 10,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
