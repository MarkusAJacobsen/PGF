import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 

// @flow 
export default class  GrowingItemScreen extends Component { 

    // TODO: refactor style to stylesheet
    constructor(props) {
        super(props);   
    } 
    
    render() {   
        let { navigation } = this.props;
        let data = navigation.getParam('screenProps', null)
 
        return (
         <View style={styles.container}>
            <TitleBar heading={uppercaseFirstLetter(data.name)}  />
            <View style={styles.imageContainer}>
                <Image source={Images[data.type][data.name]} style={styles.image} /> 
                {/* TODO: add to user array */}
                <TouchableOpacity onPress={() => {   }}
                    style={{ width: 30, height: 30, backgroundColor: "#fff", flex: 1, position: 'absolute', right: 15, bottom: 15,}}
                  >
                <View>
                    <FontAwesome5 name={"plus"} size={20} color="#000" style={{ margin: 5 }}  />
                </View>
                </TouchableOpacity>

            </View> 
            <Text style={globalStyles.topLabel}>{(data.name != null) ? ("How to grow "+data.name+": ").toUpperCase() : "" }</Text> 
            <View style={{flex: 1, flexDirection: "row", backgroundColor: globalVars.white, height: 160,}}>
                <View style={{flex: 1, flexDirection: "column", paddingTop: 40, paddingLeft: 30 }}>
                    <Text style={{ color: globalVars.black, fontFamily: globalVars.regular, fontSize: 20 }}>GROWING GUIDE</Text>
                    <Text style={{ color: globalVars.black, fontFamily: globalVars.regular, fontSize: 35}}>Step-by-step!</Text>
                </View>
                {/* TODO: steps process, fix navigation (no arrow back)  */}
                <TouchableOpacity onPress={() => {  navigation.navigate('GuidesSteps', {data}); }} style={{flex: .3, backgroundColor: globalVars.lightGreen}}>
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
    flexWrap: 'wrap', 
  },
  image: {
    resizeMode: 'cover',
    width: 360,
    height: 230,
  },
});