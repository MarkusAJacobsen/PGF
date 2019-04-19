import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { styles as globalStyles } from '../../styles/global';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';
import MyPlantsRow from '../../components/MyGarden/MyPlantsRow';
import { getMyPlants } from '../../utils/api';

export default class MyGardenHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlants: {},
    };
  }

  componentWillMount() {
    const myPlants = getMyPlants();
    this.setState({
      myPlants: myPlants,
    });
  }

  render() {
    const plants = getMyPlants();
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading='My Garden' />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <MyPlantsRow name='vegetables' plants={this.state.myPlants.vegetables} />
            <MyPlantsRow name='herbs' plants={this.state.myPlants.herbs} />
            <MyPlantsRow name='fruits' plants={this.state.myPlants.fruits} />
            <MyPlantsRow name='flowers' plants={this.state.myPlants.flowers} />

            {
              /*<Button
                title="Mine planter"
                onPress={() => this.props.navigation.navigate('MyPlants')}
              />*/
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 6,
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
