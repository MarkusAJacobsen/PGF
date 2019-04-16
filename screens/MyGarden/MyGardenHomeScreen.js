import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Header from '../../components/Header/Header';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MyGardenHomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.welcome}>Velkommen til din Gartner i Lomma!</Text>
        <Text style={styles.instructions}>For å starte din reise, har du kommet på riktig sted :)</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
