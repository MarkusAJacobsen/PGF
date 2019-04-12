import React from 'react';
import type {
  Element as ReactElement,
} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity  } from 'react-native'; 
import { Icon } from "@up-shared/components";
 
const Search = (props: any) => {
 
   state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  const { search } = this.state;

    return ( 
      <View style={styles.searchSection}>
          {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
           
           {/* <Icon 
            name="line"
            size={50}
            color="black"
            style={styles.searchIconLine}
            /> */}
          <TextInput
              style={props.style}
              placeholder="Search ..."
              // onChangeText={(searchString) => {this.setState({searchString})}}
              underlineColorAndroid="transparent"
          />
          <TouchableOpacity 
          onPress={() => {}} 
          // color="#841584"
          // accessibilityLabel="Learn more about this purple button"
          >
           <Icon 
            name="rightarrow"
            size={20}
            color="black"
            style={styles.searchIcon}
            />  
          </TouchableOpacity >
      </View>
    )
}

 
const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 20,
  },
  searchIcon: {
      // paddingRight: 40,
      alignContent: 'flex-start',
  },
  searchIconLine: { 
     paddingLeft: 40,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
  },
});


export default Search;