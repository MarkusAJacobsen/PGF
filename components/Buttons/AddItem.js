import React, { Compontent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '../../styles/global';

const AddItem = ({ size, bgColor }) => {
  let width;
  let height;
  let backgroundColor;
  if (size === 'small') {
    width = 30;
    height = 30;
  } else if (size == 'medium') {
    width = 60;
    height = 60;
  } else {
    width = 90;
    height = 90;
  }

  backgroundColor = bgColor || globalVars.white;

  return (
    <View style={{
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 23,
      marginRight: 23,
    }}>
      <Image source={require('../../assets/icons/plus.png')} />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  
});