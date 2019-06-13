import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FastImage from "react-native-fast-image";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Touchable from 'react-native-platform-touchable';
import PGCRequest from "../../network/PGCRequest";
import {PGCRequestList} from "../../network/PGCRequestList";

export default class GuidesItemScreen extends Component { 

    // TODO: refactor style to stylesheet
    constructor(props) {
        super(props);

        let propsData = this.props.navigation.getParam('screenProps', null);
        this.state = {
          guideData: {
            chapterTitles: [],
          },
          plantData: propsData,
        }

        Promise.all([
          PGCRequest(PGCRequestList.GUIDE_GET, [this.state.plantData.guideID])
        ]).then((result) => {
            console.log(result);
            this.setState({
              guideData: result[0][0],
            });
        });
    } 
    
    render() {   
        let { navigation } = this.props;
        let { plantData, guideData } = this.state;
 
        return (
         <View style={styles.container}>
            <TitleBar heading={uppercaseFirstLetter(plantData.name)}  />
            <View style={styles.imageContainer}>
                <FastImage source={{ uri: plantData.image }} style={styles.image} /> 
                {/* TODO: add to user array */}
            </View> 
            <Text style={globalStyles.topLabel}>{(plantData.name != null) ? ("How to grow "+plantData.name+": ").toUpperCase() : "" }</Text> 
            <ScrollView showsVerticalScrollIndicator={false} >
            {(guideData.chapterTitles.length > 0) ? guideData.chapterTitles.map((title) => {
              const added = false;
              return (
                <View style={styles.row} key={title}>
                  <Touchable  
                    onPress={() => { 
                        this.props.navigation.navigate("GuidesSteps", {data: guideData, chapter: (guideData.chapterTitles.findIndex(x => x == title)+1) } );   
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