import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { vars as globalVars } from '@utils/global';
// import Icons from '../../assets/icons/index';
// Icons set
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// @flow 
export default class AddItem extends Component {

  constructor(props) {
    super(props); 
    this.state = {
       
    }
  }

  render() {
    let { size, bgColor, added } = this.props;
    
    let width;
    let height;
    let backgroundColor;
    if (size === 'small' || size === 'smallRight') {
      width = 30;
      height = 30;
    } else if (size == 'medium') {
      width = 60;
      height = 60;
    } else {
      width = 90;
      height = 90;
    }

    backgroundColor = bgColor || globalVars.white;

    return (
      <View style={{
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: (size !== "smallRight") ? 23 : "auto",
      marginRight: (size !== "smallRight") ?  10 : 26,
      marginTop: (size !== "smallRight") ?  0 : 10,  
    }}>
      {/* <Image source={added ? Icons.checked : Icons.plus} width={29} height={29} /> */}
     <FontAwesome5 name={added ? `check` : `plus`} size={29} color="#000" />
    </View>
    )
  }
  
}

// const styles = StyleSheet.create({
  
// });

// const AddItem = ({ size, bgColor, added }) => {
//   let width;
//   let height;
//   let backgroundColor;
//   if (size === 'small' || size === 'smallRight') {
//     width = 30;
//     height = 30;
//   } else if (size == 'medium') {
//     width = 60;
//     height = 60;
//   } else {
//     width = 90;
//     height = 90;
//   }

//   backgroundColor = bgColor || globalVars.white;

//   return (
//     <View style={{
//       width: width,
//       height: height,
//       backgroundColor: backgroundColor,
//       justifyContent: "center",
//       alignItems: "center",
//       marginLeft: (size !== "smallRight") ? 23 : "auto",
//       marginRight: (size !== "smallRight") ?  10 : 26,
//       marginTop: (size !== "smallRight") ?  0 : 10,  
//     }}>
//       {/* <Image source={added ? Icons.checked : Icons.plus} width={29} height={29} /> */}
//      <FontAwesome5 name={added ? `check` : `plus`} size={29} color="#000" />
//     </View>
//   );
// };

// export default AddItem;

