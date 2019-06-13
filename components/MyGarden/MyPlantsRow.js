import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '@utils/global';
import { AddItem, MyPlantsItem } from '@components'; 

export default class MyPlantsRow extends Component {

  render() {
    console.log(this.props.projects);
    return (
      <View style={styles.container}>
          {this.props.projects.map((p) => (
            <MyPlantsItem image={p.image} key={p.id} data={p} navigation={this.props.navigation}/>
          ))}   
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowHeading: {
    marginBottom: 5,
    marginLeft: 20,
  },
  rowHeadingText: {
    flex: 1,
    color: '#164450',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: globalVars.normal,
  },
  myPlantsItem: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 20,
  },
});