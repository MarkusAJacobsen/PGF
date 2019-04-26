import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";
import { vars as globalVars } from "@utils/global"; 

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: props.placeholder.value == 0 } 
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({ placeholder: ev.nativeEvent.text.length == 0 }); 
    this.props.onChange && this.props.onChange(ev);    
  }
  render() {
    const { placeholderStyle, style, onChange, ...rest } = this.props;

    return <TextInput 
      {...rest} 
      onChange={this.handleChange}
      style={this.state.placeholder ? [style, placeholderStyle] : style}
      />
  }
}


export default SearchInput;