import React, { Component } from 'react';
import GuidePage from "../../components/Guides/GuidePage";
import { prepareGuidePages } from "../../utils/global";
import Touchable from "react-native-platform-touchable";
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';

export default class GrowingPreparationStage extends Component {

  constructor(props) {
    super(props); 
  }   

  render() {
    const { navigation } = this.props;
    let settings = navigation.getParam('projectSettings', null);
    let testData = navigation.getParam('data');

    return (
      <GuidePage
        navigation={navigation}
        filterPages={settings}
        chapter={1}
        data={testData}
        lastPageAction={
        <View style={styles.row}>
        <Touchable  
        onPress={() => { 
            this.props.navigation.navigate("GrowingPlanting", {data: testData, projectSettings: [this.props.projectSettings] } );   
            } 
        }
        onLongPress={null}
        style={styles.plantContainer}
        > 
        <View style={styles.plantTitle}>
            <Text style={styles.plantTitleText}>Accessories you will need</Text>
        </View>
        </Touchable> 
    </View>}
      />
    );
  }
}

const styles = StyleSheet.create({ 
  plantContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalVars.lightGreen,
    paddingVertical: 10,
  },
  plantTitle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  plantTitleText: {
    color: globalVars.black,
    fontSize: 24,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

