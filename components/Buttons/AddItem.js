import React, { Compontent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '@utils/global';
// import Icons from '../../assets/icons/index';
// Icons set
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AddItem = ({ size, bgColor, added }) => {
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
      marginRight: 10,
    }}>
      {/* <Image source={added ? Icons.checked : Icons.plus} width={29} height={29} /> */}
     <FontAwesome5 name={added ? `check` : `plus`} size={29} color="#000" />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  
});