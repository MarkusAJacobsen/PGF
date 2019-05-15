import React, { Compontent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '@utils/global';
import { AddItem, PlantsItem } from '@components'; 

// @flow 
const PlantsRow = ({ navigation, category, plants }) => {

  onAddPress = (type) => {
    navigation.navigate(
      'GrowingCategory',
      { plantType: type }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowHeading}>
        { (plants.length > 0) ? <Text style={styles.rowHeadingText}>{category.toUpperCase()}:</Text> : null }
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.myPlantsRow}
      >  
        {plants.map((p) => (
          <TouchableOpacity key={p.id} onPress={() => {  navigation.navigate('GuidesSteps', {data: p}); }} >
            <PlantsItem plant={p} />
          </TouchableOpacity>
        ))}   
      </ScrollView> 
    </View>
  );
};

export default PlantsRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  rowHeading: {
    marginBottom: 5,
    marginLeft: 23,
  },
  rowHeadingText: {
    flex: 1,
    color: '#164450',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: globalVars.normal,
  },
  myPlantsRow: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around', 
        // flexWrap: 'wrap',
    marginLeft: 12
  },
  PlantsItem: {
    height: 90,
    width: 90,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 23,
    marginRight: 23,
  },
});