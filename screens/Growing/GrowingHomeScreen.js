import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { TitleBar, PlantCategoryCard } from '@components';
import BarcodeSearchStartButton from '../../components/BarcodeSearchStart/BarcodeSearchStartButton';

// @flow 
export default class GrowingHomeScreen extends Component {

  constructor(props) {
    super(props); 
    this.categories = ['herbs', 'vegetables', 'flowers', 'fruits']; 
    this.handleResult = this.handleResult.bind(this); 
  }  

  handleResult(search){  
    const { navigation } = this.props;  

    if(search.length > 0){
      navigation.push('GuidesHome', {search: search});
    }
  }

  render() { 
    const { navigation } = this.props;   

    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading='What can I grow?' handleResult={this.handleResult} isVisibleSearch={true} /> 
        <BarcodeSearchStartButton
          navigation={navigation}
        />
        <Text style={styles.topLabel}>{"All types in your zone".toUpperCase()}</Text> 
        <ScrollView showsVerticalScrollIndicator={false} >
        <View style={globalStyles.contentContainer}>
          <View style={styles.cardContainer}>
            {this.categories.map((c) =>
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