import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { vars as globalVars, setUpUserData } from '@utils/global';
import { TitleBar } from "@components";
import Touchable from "react-native-platform-touchable";
import ImagePicker from "react-native-image-picker";
import FastImage from "react-native-fast-image";
import { NavigationActions, StackActions } from 'react-navigation';

class MoreHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.exampleText = "Meny";

    let testData = this.props.navigation.getParam('data');
    // Common block that should be included in all constructors
    // to ensure userData is included properly.
    this.state = {
      userData: {
        uid: "",
        name: "",
        origin: "",
        area: "",
      },
      projectData: testData,
    }
    setUpUserData().then((data) => {
      this.setState({
        userData: data,
      });
      this.props.userData = data;
    });
    // End of common block

    this.testData = {
      chapterTitles: ["", "", "Maintenance", "Harvesting"],
      stages: [
          {
              pageNr: 1,
              chapterNr: 3,
              pageTitle: "Growing pot",
              filter: "small",
              images: ["https://i.imgur.com/WpsnGdF.jpg"],
              text: "This is a small growing pot.",
          },
          {
              pageNr: 2,
              chapterNr: 3,
              pageTitle: "Test 2",
              filter: "medium",
              images: ["https://i.imgur.com/qNlPZwb.jpg"],
              text: "This is a medium growing pot.",
          },
          {
            pageNr: 1,
            chapterNr: 4,
            pageTitle: "Growing pot",
            filter: "small",
            images: ["https://i.imgur.com/WpsnGdF.jpg"],
            text: "This is a small growing pot.",
          }
      ]
  }
  }
 
  newImage = () => {
    const options = {
      title: "New project image",
      storageOptions: {
          skipBackup: true,
          path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
          // console.log("User cancelled image picker");
      } else if (response.error) {
          // console.log("ImagePicker Error: ", response.error);
      } else {
          const source = { uri: response.uri };
          this.setState({projectData: {
            ...this.state.projectData,
            image: response.uri,
          }})
      }
    });
  }

  render() {
    console.log(this.state.projectData);
    return (
      <View style={styles.container}>
        <TitleBar heading={this.state.projectData.name} isVisibleSearch={false} />
        <Touchable 
        onPress={this.newImage}
        onLongPress={this.newImage}
        style={styles.imageContainer}>
          <FastImage source={{ uri: this.state.projectData.image }} style={styles.image} resizeMode={FastImage.resizeMode.contain}/> 
        </Touchable>
        <ScrollView showsVerticalScrollIndicator={false} >
            {(this.testData.chapterTitles.length > 0) ? this.testData.chapterTitles.map((title) => {
              const added = false;
              if (title == this.testData.chapterTitles[0] || title == this.testData.chapterTitles[1]) return null;
              return (
                <View style={styles.row} key={title}>
                  <Touchable  
                    onPress={() => { 
                        this.props.navigation.navigate("ProjectGuide", {data: this.testData, chapter: (this.testData.chapterTitles.findIndex(x => x == title)+1)} );   
                      } 
                    }
                    onLongPress={null}
                    style={styles.plantContainer}
                  > 
                    <View style={styles.plantTitle}>
                      <Text style={styles.plantTitleText}>{title}</Text>
                    </View>
                  </Touchable> 
                </View>
              )
            }) : 
            <Text style={styles.noresults}>Unfortunately, there are no guide chapters registered.</Text>
            }
            </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:  {
    backgroundColor: globalVars.yellow, 
    flex: 1,
    flexDirection: "column",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageContainer: { 
    flex: 1,
  },
  image: {
    height: 230,
  },
  noresults: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },
  deleteProjectButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalVars.orange,
  },
  plantContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalVars.white,
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
    justifyContent: 'space-between',
    height: 60,
    marginTop: 8,
  },
});
export default MoreHomeScreen;
