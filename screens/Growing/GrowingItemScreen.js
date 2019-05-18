import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FastImage from "react-native-fast-image";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 

export default class  GrowingItemScreen extends Component { 

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
            <View style={{flex: 1, flexDirection: "row", backgroundColor: globalVars.white, height: 160,}}>
                <View style={{flex: 1, flexDirection: "column", paddingTop: 40, paddingLeft: 30 }}>
                    <Text style={{ color: globalVars.black, fontFamily: globalVars.regular, fontSize: 20 }}>GROWING GUIDE</Text>
                    <Text style={{ color: globalVars.black, fontFamily: globalVars.regular, fontSize: 35}}>Step-by-step!</Text>
                </View>
                {/* TODO: steps process, fix navigation (no arrow back)  */}
                <TouchableOpacity onPress={() => {  navigation.navigate('GuidesSteps', {data: this.testData.stages, chapterTitle: this.testData.chapterTitles}); }} style={{flex: .3, backgroundColor: globalVars.lightGreen}}>
                    <View>
                        <FontAwesome5 name="chevron-right" size={60} color="#000" style={{ paddingTop: 50, paddingLeft: 20 }} />
                    </View>
                </TouchableOpacity>
            </View> 
            
            {/* {plants.map((p) => {
                return (
                    <View key={p.id} style={styles.listItem}>
                        <Text key={p.id} style={styles.itemText}>
                            {p.name}
                        </Text>
                    </View>
                );
            })} */}
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
    // justifyContent: 'center',
    // alignItems: 'center', 
    //flexWrap: 'wrap', 
  },
  image: {
    flex: 1,
    height: 230,
  },
});