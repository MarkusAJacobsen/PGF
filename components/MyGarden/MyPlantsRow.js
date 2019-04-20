import React, { Compontent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '../../styles/global';
import AddItem from '../../components/Buttons/AddItem';
import MyPlantsItem from './MyPlantsItem';

const MyPlantsRow = ({ navigation, category, plants }) => {

  onAddPress = (type) => {
    navigation.navigate(
      'GrowingCategory',
      { plantType: type }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowHeading}>
        <Text style={styles.rowHeadingText}>My {category}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      // contentContainerStyle={styles.myPlantsRow}
      >
        {plants.map((p) => (
          <MyPlantsItem plant={p} key={p.id} />
        ))}
        <TouchableOpacity onPress={() => this.onAddPress(category)}>
          <AddItem size='large' bgColor='white' />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default MyPlantsRow;

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
  },
  myPlantsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myPlantsItem: {
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