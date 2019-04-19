import React, { Compontent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '../../styles/global';
import Icons from '../../assets/icons/index';

const PlantCategoryCard = ({ name }) => {
  const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <View style={styles.container}>
      <Image source={Icons[name]} />
      <Text style={styles.plantNameText}>{nameFormatted}</Text>
    </View>
  );
};

export default PlantCategoryCard;

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
  }
});