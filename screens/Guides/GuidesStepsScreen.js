import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import FastImage from 'react-native-fast-image';
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";

// TODO: step-by-step
export default class GuidesStepsScreen extends Component {

  constructor(props) {
    super(props);

    this.config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    
    let data = this.props.navigation.getParam('data', null);

    this.state = {
      "curStep": 0,
      "totalStep": data.length,
    }
  }    


  increaseStep(){
    let { curStep } = this.state;

    this.setState({
      "curStep": ++curStep,
    });
  }

  decreaseStep(){
    let { curStep } = this.state;
    this.setState({
      "curStep": --curStep,
    });
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        if (!(this.state.curStep + 1 >= this.state.totalStep)) this.increaseStep();
        break;
      case SWIPE_RIGHT:
        if (!(this.state.curStep <= 0)) this.decreaseStep();
        break;
    }
  }

  render() { 
    let { navigation } = this.props;
    let { curStep } = this.state;

    let data = navigation.getParam('data', null);
    let title = navigation.getParam('chapterTitle', null);

    let totalStep = data.length;
    // let curStep = (totalStep > 0) ? 1 : 0;

    let step = (data.steps != null) ? data.steps[curStep] : {}; 

    let isLast = (curStep+1 === totalStep) ? true : false;
    let isFirst = (curStep+1 === 1) ? true : false;
 
    return (
      <View style={styles.container}>
        <TitleBar heading={title + " (" + (curStep+1) + "/" + totalStep + ")"}  />
        <View style={styles.imageContainer}>
            <FastImage source={{uri: data[curStep].images[0]}} style={styles.image} /> 
        </View> 
        <Text style={globalStyles.topLabel}>{data[curStep].pageTitle}</Text> 
        {/* Steps info */}
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={this.config}
        style={styles.imageContainer}
      >
        <ScrollView style={{ flex: .5, paddingLeft: 30, paddingRight: 25, backgroundColor: globalVars.white }}>
          <Text style={{ color: globalVars.black, fontFamily: globalVars.semiBold }}>
              {data[curStep].text}
          </Text>
        </ScrollView> 
      </GestureRecognizer>
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
    height: 300,
  },
});
