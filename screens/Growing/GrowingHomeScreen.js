import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class GrowingHomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Growing Home Screen</Text>
        <Button
          title="Mine planter"
          onPress={() => this.props.navigation.navigate('MyPlants')}
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
