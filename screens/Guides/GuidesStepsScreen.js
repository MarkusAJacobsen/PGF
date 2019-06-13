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
    let chapter = navigation.getParam('chapter', 1);
    let testData = navigation.getParam('data');
    let lastPage = navigation.getParam('lastPage', null);

    return (
      <GuidePage
        navigation={navigation}
        filterPages={null}
        chapter={chapter}
        data={testData}
        lastPageAction={lastPage}
      />
    );
  }
}

