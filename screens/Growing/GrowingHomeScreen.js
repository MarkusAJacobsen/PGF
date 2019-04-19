import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { styles as globalStyles } from '../../styles/global';
import TitleBar from '../../components/TitleBar/TitleBar';
import PlantCategoryCard from '../../components/Growing/PlantCategoryCard';

export default class GrowingHomeScreen extends Component {
  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading='What can I grow?' />
        <View style={globalStyles.contentContainer}>
          <View style={styles.cardContainer}>
            <PlantCategoryCard name='herbs' />
            <PlantCategoryCard name='vegetables' />
            <PlantCategoryCard name='flowers' />
            <PlantCategoryCard name='fruits' />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
