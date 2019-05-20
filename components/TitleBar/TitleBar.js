import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { vars as globalVars } from "@utils/global";
import { Search } from "@components";

class TitleBar extends Component {


  constructor(props) {
    super(props); 
    this.state = {
      search: ""
    };
    
    this.handleResult = this.handleResult.bind(this);

  }   

  handleResult(search){
    if(this.props.handleResult && search.length > 0) this.props.handleResult(search);
     this.setState({
      "search": search
    }); 
  }
 
  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.text}>{this.props.heading}</Text>
        </View>
        {(this.props.isVisibleSearch) ? <View style={styles.searchBar}>
         <Search getResult={this.handleResult} /> 
        </View> : null}
      </View>
    );
  }
}

export default TitleBar;

const styles = StyleSheet.create({
  container: { 
      flexDirection: 'column',
      // justifyContent: 'center',
      // alignItems: 'center', 
      
  },
  titleBar: {  
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalVars.green 
  },
  searchBar: {  
    height: 60,  
    backgroundColor: globalVars.white 
  },  
  text: {
    fontSize: 32,
    textAlign: "center",
    color: globalVars.ligthGrey,
    fontFamily: globalVars.regular 
  }
});
