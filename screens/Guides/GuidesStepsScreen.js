import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 

// TODO: step-by-step
export default class GuidesStepsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "curStep": 0,
      "totalStep": 0
    } 
  }    


  increaseStep(){
    let { curStep } = this.state;
    this.setState({
      "curStep": ++curStep
    });
  }

  decreaseStep(){
    let { curStep } = this.state;
    this.setState({
      "curStep": --curStep
    });
  }

  render() { 
    let { navigation } = this.props;
    let { curStep } = this.state;

    let data = navigation.getParam('data', null);

    let totalStep = 0;
    // let curStep = (totalStep > 0) ? 1 : 0;

    let step = (data.steps != null) ? data.steps[curStep] : {}; 
   
    (data.steps).map(e => {  
      if(Object.keys(e).length !== 0){
        ++totalStep;
      }  
    });

    let isLast = (curStep+1 === totalStep) ? true : false;
    let isFirst = (curStep+1 === 1) ? true : false;
 
    return (
      <View style={styles.container}>
        <TitleBar heading={"How to grow "+ uppercaseFirstLetter(data.name)}  />
        <View style={styles.imageContainer}>
            <Image source={Images[data.type][data.name]} style={styles.image} /> 
            {/* TODO: add to user array */}
            { (!isLast) ? (
            <TouchableOpacity onPress={() => {   }}
                style={{ width: 30, height: 30, backgroundColor: "#fff", flex: 1, position: 'absolute', right: 15, bottom: 15,}}
              > 
            <View>
                <FontAwesome5 name={"plus"} size={20} color="#000" style={{ margin: 5 }}  />
            </View>
            </TouchableOpacity>
             ) : (<View></View>)
            }

        </View> 
        <Text style={globalStyles.topLabel}>{(data.name != null) ? ("How to grow "+data.name+": ").toUpperCase() : "" }</Text> 
        <View style={{ flexDirection: "row", backgroundColor: globalVars.white, flex: .6}}>

            {/* Left */}
            { (!isFirst) ? 
            (<TouchableOpacity onPress={() => this.decreaseStep()} style={{flex: .3, backgroundColor: globalVars.lightGreen}} disabled={isFirst}>
                <View>
                    <FontAwesome5 name={"chevron-left"} size={35} color="#000" style={{ paddingTop: 20, paddingLeft: 16 }} />
                </View>
            </TouchableOpacity>) : 
            (<View></View>) }
            
            <View style={{flex: 1, flexDirection: "column", paddingTop: 5, paddingLeft: 30, }}>
                <Text style={{ color: globalVars.black, fontFamily: globalVars.regular, fontSize: 20,  textAlign: (!isFirst) ? "center" : "left", }}>GROWING GUIDE</Text>
                <Text style={{ color: globalVars.black, fontFamily: globalVars.regular, fontSize: 35,  textAlign: (!isFirst) ? "center" : "left", }}>Step: {curStep+1} / {totalStep} </Text>
            </View>

            {/* Right */}
            {/* TODO: steps process, fix navigation (no arrow back)  */}
            <TouchableOpacity onPress={() => this.increaseStep()} style={{flex: .3, backgroundColor: globalVars.lightGreen}} disabled={isLast}>
                <View>
                    <FontAwesome5 name={(isLast) ? "plus": "chevron-right"} size={35} color="#000" style={{ paddingTop: 20, paddingLeft: 16 }} />
                </View>
            </TouchableOpacity>
        </View> 
        {/* Steps info */}
        <ScrollView style={{ flex: .5, paddingLeft: 30, paddingRight: 25, backgroundColor: globalVars.white }}>
          {
            (step != null && step.title != null && step.desc != null) ? (<View><Text style={{ color: globalVars.black, fontFamily: globalVars.semiBold }}>
              {step.title.toUpperCase()}
          </Text>
          <Text style={{ color: globalVars.black, fontFamily: globalVars.semiBold }}>
              {step.desc}
          </Text></View>)
          : <View></View>
          }
        </ScrollView>
        
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
    flex: .8,
    // justifyContent: 'center',
    // alignItems: 'center', 
    // flexWrap: 'wrap', 
  },
  image: {
    resizeMode: 'cover',
    width: 360,
    height: 109,
  },
});
