import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

class AddButton extends Component {
  render() {
    return(
      <View>
        <TouchableOpacity
          style={style.menuItem}          
          hitSlop={{
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
          }}
          onPress={this.handleAddButtonPress}>
          <Text>Custom</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 80,  
    // width: 100,
    padding: 4,
    borderRadius: 2, 
  },
});

export default AddButton;