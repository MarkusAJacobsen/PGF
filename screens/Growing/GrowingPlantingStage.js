import React, { Component } from "react";
import { GuidePage } from "@components";
import { prepareGuidePages } from "@utils/global";
import Touchable from "react-native-platform-touchable";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity
} from "react-native";
import { styles as globalStyles, vars as globalVars } from "@utils/global";
import { PGCRequestList, PGCRequest } from "@network";

export default class GrowingPlantingStage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    let settings = navigation.getParam("projectSettings", null);
    let testData = navigation.getParam("data");

    return (
      <GuidePage
        navigation={navigation}
        filterPages={settings}
        chapter={2}
        data={testData}
        lastPageAction={
          <View style={styles.row}>
            <Touchable
              onPress={() => {
                let project = {
                  name: settings[2],
                  climate: settings[1],
                  status: 1,
                  image: settings[5]
                };

                Promise.all([
                  PGCRequest(PGCRequestList.PROJECT_ADD, [
                    project,
                    settings[4],
                    settings[3]
                  ])
                ])
                  .then(result => {
                    // If the user was created/exists in PGC, navigate to Main
                    if (result[0].ok) {
                      this.props.navigation.navigate("AuthLoading");
                    }
                  })
                  .catch(() => {});
              }}
              onLongPress={null}
              style={styles.plantContainer}
            >
              <View style={styles.plantTitle}>
                <Text style={styles.plantTitleText}>Register project!</Text>
              </View>
            </Touchable>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  plantContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: globalVars.lightGreen,
    paddingVertical: 10
  },
  plantTitle: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10
  },
  plantTitleText: {
    color: globalVars.black,
    fontSize: 24
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
