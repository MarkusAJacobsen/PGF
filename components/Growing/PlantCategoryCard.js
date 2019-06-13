import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { uppercaseFirstLetter } from '../../utils/functions';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '@utils/global';
import Icons from '@assets/icons/index';

export default class PlantCategoryCard extends Component {

  onCardPress = (type) => {
    console.log(this.props);
    this.props.navigation.navigate(
      this.props.nextScreen,
      { plantType: type }
    );
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onCardPress(this.props.name)}>
        <Image source={Icons[this.props.name]} />
        <Text style={styles.plantNameText}>{uppercaseFirstLetter(this.props.name)}</Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalVars.white,
    flexBasis: '48%',
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  plantNameText: {
    fontSize: 24,
    color: globalVars.black,
    fontFamily: globalVars.regular
  }
});