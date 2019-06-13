import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import { styles as globalStyles, vars as globalVars, setUpUserData } from '@utils/global';
import { Header, TitleBar, MyPlantsRow } from "@components";
import { getMyPlants } from "@utils/api";
import Tabs from "react-native-tabs";
import PGCRequest from "../../network/PGCRequest";
import {PGCRequestList} from "../../network/PGCRequestList";

// @flow
export default class MyGardenHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlants: {},
      title: ""
    };

    this.state = {
      projects: [],
      userData: {
        uid: "",
        name: "",
        origin: "",
        area: "",
      },
    }
    setUpUserData().then((data) => {
      console.log(data.uid);
      Promise.all([
        PGCRequest(PGCRequestList.PROJECT_GET_ALL, [], [data.uid])
      ]).then((result) => {
          console.log(result);
          if (result[0] != null) {
            this.setState({
              projects: result[0],
            });
          }
      });
      this.setState({
      userData: data,
      });
      this.props.userData = data;
    });
  }
   
  componentWillMount() {
    const myPlants = getMyPlants();
    
    this.setState({
      myPlants: myPlants,
      search: "",
    });
  }

  // https://stackoverflow.com/questions/8495687/split-array-into-chunks
  array_chunks = (array, chunk_size) => {
    return Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size))
  };
  
  render() {
    const plants = getMyPlants();
    const { navigation } = this.props;

    const projectList = this.array_chunks(this.state.projects, 4);
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading="My Garden" isVisibleSearch={false} />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {projectList.map(c => (
              <MyPlantsRow
                navigation={navigation}
                projects={c}
                key={c}
              />
            ))}
          </ScrollView>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
