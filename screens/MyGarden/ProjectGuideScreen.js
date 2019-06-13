import React, { Component } from 'react';
import GuidePage from "../../components/Guides/GuidePage";
import { prepareGuidePages } from "../../utils/global";
import Touchable from "react-native-platform-touchable";
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import PGCRequest from "../../network/PGCRequest";
import {PGCRequestList} from "../../network/PGCRequestList";

export default class ProjectGuideScreen extends Component {

  constructor(props) {
    super(props); 
  }

  deleteProject = () => {
    let projectID = this.props.navigation.getParam('projectID', null);
    Promise.all([
      PGCRequest(PGCRequestList.PROJECT_DELETE, [projectID])
    ]).then((result) => {
        if (result[0].ok) {
          this.props.navigation.navigate('AuthLoading');
        }
    });
  }

  render() {
    const { navigation } = this.props;
    let settings = navigation.getParam('projectSettings', null);
    let testData = navigation.getParam('data');
    let chapter = navigation.getParam('chapter', 1);
    console.log(testData);

    return (
      <GuidePage
        navigation={navigation}
        filterPages={settings}
        chapter={chapter}
        data={testData}
        lastPageAction={ (chapter == 4) ? 
        <View style={styles.row}>
        <Touchable  
        onPress={this.deleteProject}
        onLongPress={null}
        style={styles.deleteProjectButton}
        > 
        <View style={styles.plantTitle}>
            <Text style={styles.plantTitleText}>Delete project</Text>
        </View>
        </Touchable> 
    </View> : null}
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
  deleteProjectButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalVars.orange,
    paddingVertical: 10,
  },
});

