import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FastImage from "react-native-fast-image";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Touchable from 'react-native-platform-touchable';
import { Dropdown } from 'react-native-material-dropdown';

export default class  GrowingItemScreen extends Component { 

    // TODO: refactor style to stylesheet
    constructor(props) {
        super(props);

        this.testData = {
            chapterTitles: ["Preparation", "Planting"],
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
                    pageNr: 3,
                    chapterNr: 1,
                    pageTitle: "Growing pot",
                    filter: "",
                    images: ["https://i.imgur.com/WpsnGdF.jpg"],
                    text: "This is a small growing pot.",
                },
                {
                    pageNr: 1,
                    chapterNr: 2,
                    pageTitle: "Planting",
                    filter: "",
                    images: ["https://i.imgur.com/WpsnGdF.jpg"],
                    text: "Plant the plant.",
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
        this.projectSize("Small");
    }

    projectSize = (value) => {
        this.size = value.toLowerCase();
    }
    
    render() {   
        let { navigation } = this.props;
        let data = [{
            value: "Small",
        }, {
            value: "Medium",
        }, {
            value: "Large",
        }];
 
        return (
        <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
            <Dropdown
                label="Project size"
                data={data}
                animationDuration={0}
                containerStyle={styles.dropdownStyle}
                value="Small"
                onChangeText={(value) => this.projectSize(value)}
                
                
            />
            <View style={styles.row}>
                <Touchable  
                onPress={() => { 
                    this.props.navigation.navigate("GrowingPreparation", {data: this.testData, projectSettings: [this.size] } );   
                    } 
                }
                onLongPress={null}
                style={styles.plantContainer}
                > 
                <View style={styles.plantTitle}>
                    <Text style={styles.plantTitleText}>Accessories you will need</Text>
                </View>
                </Touchable> 
            </View>
        </ScrollView>
        )
    }
}  

const styles = StyleSheet.create({ 
  container:  {
      backgroundColor: globalVars.ligthYellow, 
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
  dropdownStyle: {
      marginTop: 50,
      marginHorizontal: 10,
      backgroundColor: globalVars.white,
  },
  plantContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalVars.lightGreen,
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
    marginTop: 80,
    marginHorizontal: 10,
  },
});