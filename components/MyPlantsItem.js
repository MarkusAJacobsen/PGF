import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '@utils/global';
import Images from '@assets/plants';
import Touchable from "react-native-platform-touchable";
import FastImage from "react-native-fast-image";

export default class MyPlantsItem extends Component {
  render() {
    const { image } = this.props;
    return (
      <Touchable 
      onPress={() => { 
        this.props.navigation.navigate("ProjectScreen", { data: this.props.data });   
          } 
      }
      style={styles.container}>
        <FastImage source={{ uri: this.props.image }} style={styles.image} resizeMode={FastImage.resizeMode.stretch}/>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    marginLeft: 10,
    backgroundColor: globalVars.white,
  },
  image: {
    flex: 1,
  }
});