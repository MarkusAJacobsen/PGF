import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars, prepareGuidePages } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; 
import FastImage from 'react-native-fast-image';
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";

// TODO: step-by-step
export default class GuidePage extends Component {

  constructor(props) {
    super(props);

    this.config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    
    let data = this.props.data;
    console.log(this.props);
    data = prepareGuidePages(data.stages, this.props.chapter, this.props.filterPages);

    this.state = {
      "curStep": 0,
      "totalStep": data.length,
      "data": data,
      "title": this.props.data.chapterTitles[this.props.chapter-1],
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

    let data = this.state.data;
    let title = this.state.title;

    let totalStep = data.length;
 
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
        <ScrollView style={{ flex: 1, paddingLeft: 30, paddingRight: 25, backgroundColor: globalVars.white }}>
          <Text style={{ color: globalVars.black, fontFamily: globalVars.semiBold }}>
              {data[curStep].text}
          </Text>
          
        </ScrollView>
        
      </GestureRecognizer>
      <View style={styles.lastPage}>
        {(this.state.curStep + 1 >= this.state.totalStep) ? this.props.lastPageAction : null}
      </View>
      
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
  lastPage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
