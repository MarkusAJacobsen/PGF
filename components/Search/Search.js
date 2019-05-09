import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Keyboard  } from "react-native";
import { vars as globalVars } from "@utils/global"; 
import { Icon, SearchInput } from "@components";  

// @flow 
class Search extends Component {  

  constructor(props) {
    super(props);  

    this.searchVal = this.searchVal.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  
    this.state = {
       search: "",
       style: ""
    }
  }  
  
  searchVal(e){    
    if(e && e.nativeEvent) this.setState({ "search": e.nativeEvent.text }); 
  }

  submitSearch(e){
    if(this.props.getResult && this.state.search.length > 0) this.props.getResult(this.state.search);
    this.setState({ "search": "" });  
    Keyboard.dismiss(); 
  }
  
  render() {
    return (
      <View style={ styles.searchSection }>  
        <SearchInput 
          style={ styles.input }
          text={ this.state.search }
          value={ this.state.search }
          placeholder={ "Search ...".toUpperCase()} 
          autoFocus={ false }
          placeholderTextColor={ globalVars.searchText }
          onChange={ this.searchVal }
          onSubmitEditing={ this.submitSearch }
          // placeholderStyle={{ paddingLeft: 50 }}
        />

        <TouchableOpacity
          onPress={ this.submitSearch } 
        >
          <Icon
            name="rightarrow"
            size={20}
            color="black"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
    </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff" 
  },
  searchIcon: { 
  },
  searchIconLine: { 
  },
  input: { 
    width: 300,
    height: 60,
    fontFamily: globalVars.bold,
    backgroundColor: "#fff",
    color: globalVars.black
  }
});