import React, { Compontent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MyPlantsRow = ({ name, plants }) => {
  const missingItems = plants.length > 2 ? 0 : 3 - plants.length;
  
  return (
    <View style={styles.container}>
      <View style={styles.rowHeading}>
        <Text>My {name}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {plants.map((p) => (
            <View style={styles.myPlantsItem} key={p.id}>
              <Text>{p.name}</Text>
            </View>
          ))}

          {/* Fill row with add buttons if less than 3 items */}
          {[...Array(missingItems)].map((e, i) => (
              <View style={styles.myPlantsItem} key={i}>
                <Text>NEW</Text>
              </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default MyPlantsRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
  },
  rowHeading: {
    flex: 1,
  },
  myPlantsRow: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'red',
  },
  myPlantsItem: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
  }
});