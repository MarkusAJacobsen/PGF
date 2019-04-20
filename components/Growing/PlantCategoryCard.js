import React, { Compontent } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { uppercaseFirstLetter } from '../../utils/functions';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '../../styles/global';
import Icons from '../../assets/icons/index';

const PlantCategoryCard = ({ navigation, name }) => {

  onCardPress = (type) => {
    navigation.navigate(
      'GrowingCategory',
      { plantType: type }
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => this.onCardPress(name)}>
      <Image source={Icons[name]} />
      <Text style={styles.plantNameText}>{uppercaseFirstLetter(name)}</Text>
    </TouchableOpacity>
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