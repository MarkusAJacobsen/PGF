import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FastImage from "react-native-fast-image";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Touchable from 'react-native-platform-touchable';

export default class GuidesItemScreen extends Component { 

    // TODO: refactor style to stylesheet
    constructor(props) {
        super(props);

        this.testData = {
            chapterTitles: ["Preparation"],
            stages: [
                {
                    pageNr: 1,
                    chapterNr: 1,
                    pageTitle: "Growing pot",
                    filter: "small",
                    images: ["https://i.imgur.com/WpsnGdF.jpg"],
                    text: "This is a small growing pot.",
                },
                {
                    pageNr: 2,
                    chapterNr: 1,
                    pageTitle: "Test 2",
                    filter: "medium",
                    images: ["https://i.imgur.com/qNlPZwb.jpg"],
                    text: "This is a medium growing pot.",
                }
            ]
        }
        this.tomatoImage = "https://i.imgur.com/qNlPZwb.jpg";
    } 
    
    render() {   
        let { navigation } = this.props;
        let data = navigation.getParam('screenProps', null)
 
        return (
         <View style={styles.container}>
            <TitleBar heading={uppercaseFirstLetter(data.name)}  />
            <View style={styles.imageContainer}>
                <FastImage source={{ uri: this.tomatoImage }} style={styles.image} /> 
                {/* TODO: add to user array */}
            </View> 
            <Text style={globalStyles.topLabel}>{(data.name != null) ? ("How to grow "+data.name+": ").toUpperCase() : "" }</Text> 
            <ScrollView showsVerticalScrollIndicator={false} >
            {(this.testData.chapterTitles.length > 0) ? this.testData.chapterTitles.map((title) => {
              const added = false;
              return (
                <View style={styles.row} key={title}>
                  <Touchable  
                    onPress={() => { 
                        this.props.navigation.navigate("GuidesSteps", {data: this.testData, chapter: (this.testData.chapterTitles.findIndex(x => x == title)+1) } );   
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
        )
    }
}  

const styles = StyleSheet.create({ 
  container:  {
      backgroundColor: globalVars.yellow, 
      flex: 1,
      flexDirection: "column",
  },
  imageContainer: { 
      flex: 1,
  },
  image: {
    flex: 1,
    height: 230,
  },
  noresults: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
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