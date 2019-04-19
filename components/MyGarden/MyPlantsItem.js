import React, { Compontent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '../../styles/global';
import Images from '../../assets/plants/index';

const MyPlantsItem = ({ plant }) => {
  return (
    <View style={styles.container}>
      <Image source={Images[plant.type][plant.name]} style={styles.image} />
    </View>
  );
};

export default MyPlantsItem;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 23,
    marginRight: 23,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  }
});