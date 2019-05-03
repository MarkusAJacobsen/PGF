import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { vars as globalVars } from '@utils/global';

// TODO: step-by-step
export default class GuidesHomeScreen extends Component {

  constructor(props) {
    super(props); 
  }  
  
  //  componentWillMount() {
  //       let args = this.props.navigation.getParam('data', '<data missing>');
  //       // const myPlants = getMyPlants()[category];
  //       // const allPlants = getAllPlants()[category]; 
  //       if(args != null) this.setState({
  //           data: args 
  //       }); else this.setState({
  //           data: {
  //               category: "",
  //               namePlural: ""    
  //           } 
  //       });

        
  // } 
 

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);

    if(data != null) console.log(data);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Guides</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
