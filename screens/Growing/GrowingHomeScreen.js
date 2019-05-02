import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { TitleBar, PlantCategoryCard } from '@components';

export default class GrowingHomeScreen extends Component {

  // static navigationOptions = {
  //   headerStyle: {
  //     backgroundColor: globalVars.header,
  //   },
  //   headerTintColor: globalVars.ligthGrey,
  // };

  render() {
    const { navigation } = this.props;
    const categories = ['herbs', 'vegetables', 'flowers', 'fruits'];
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading='What can I grow?' isVisibleSearch={true} /> 
        <Text style={styles.topLabel}>{"All types in your zone".toUpperCase()}</Text> 
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={globalStyles.contentContainer}>
          <View style={styles.cardContainer}>
            {categories.map((c) =>
              <PlantCategoryCard name={c} navigation={navigation} key={c} />
            )}
          </View> 
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLabel: {
    color: globalVars.searchText,
    backgroundColor: globalVars.ligthYellow,
    paddingLeft: 22,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: globalVars.bold
  }
});

// Det er dessverre ingen urter registrert.  