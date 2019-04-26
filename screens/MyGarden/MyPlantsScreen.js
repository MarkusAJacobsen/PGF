/* Not in use ATM?*/

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';

export default class MyPlantsScreen extends Component {
  render() {
    return (
      <View style={globalStyles.screenContainer}>
        <Text style={styles.heading}>Mine Planter</Text>
        {plants.map((p) => {
          return (
            <View key={p.id} style={styles.listItem}>
              <Text key={p.id} style={styles.itemText}>
                {p.name}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: globalVars.lightGreen,
  },
  listContainer: {
    padding: 15,
  },
  listItem: {
    padding: 10,
  },
  itemText: {
    color: '#222222',
  }
});