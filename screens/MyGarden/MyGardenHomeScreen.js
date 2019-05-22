import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import {
  styles as globalStyles,
  vars as globalVars
} from "@utils/global";
import { Header, TitleBar, MyPlantsRow } from "@components";
import { getMyPlants } from "@utils/api";
import Tabs from "react-native-tabs";

export default class MyGardenHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlants: {}
    };
    this.categories = ["vegetables", "herbs", "fruits", "flowers"];
    this.testData = [
      {
        id: 1,
        name: "Test",
        climate: "Indoor",
        status: 1,
        image: "https://i.imgur.com/WpsnGdF.jpg",        
      },
      {
        id: 2,
        name: "Test",
        climate: "Indoor",
        status: 1,
        image: "https://i.imgur.com/WpsnGdF.jpg",        
      },
      {
        id: 3,
        name: "Test",
        climate: "Indoor",
        status: 1,
        image: "https://i.imgur.com/WpsnGdF.jpg",        
      },
      {
        id: 4,
        name: "Test",
        climate: "Indoor",
        status: 1,
        image: "https://i.imgur.com/WpsnGdF.jpg",        
      },
      {
        id: 5,
        name: "Test",
        climate: "Indoor",
        status: 1,
        image: "https://i.imgur.com/WpsnGdF.jpg",        
      },
      {
        id: 6,
        name: "Test",
        climate: "Indoor",
        status: 1,
        image: "https://i.imgur.com/WpsnGdF.jpg",        
      },
    ]
  }

  componentWillMount() {
    const myPlants = getMyPlants();
    this.setState({
      myPlants: myPlants
    });
  }

  // https://stackoverflow.com/questions/8495687/split-array-into-chunks
  array_chunks = (array, chunk_size) => {
    return Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size))
  };
  
  render() {
    const plants = getMyPlants();
    const { navigation } = this.props;

    const projectList = this.array_chunks(this.testData, 4);
    console.log(this.array_chunks(this.testData, 4));
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
