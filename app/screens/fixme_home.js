// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
// import {Search, Icon} from "@up-shared/components";
// import { Home } from "./screens";
// import { createStackNavigator } from "react-navigation";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const textStyle = ({fontsize = 14, margintop = 0, marginbottom, fontstyle = "Regular", color = "#FFFFFF", textalign = "center", h, paddingleft, paddingright, paddingbottom, paddingtop} = {}) => ({
//   fontFamily: 'TitilliumWeb-'+fontstyle,
//   fontSize: fontsize,
//   marginTop: margintop,
//   marginBottom: marginbottom,
//   textAlign: textalign,
//   color: color,
//   height: h,
//   paddingLeft: paddingleft,
//   paddingRight: paddingright,
//   paddingTop: paddingtop,
//   paddingBottom: paddingbottom
// });

// const viewStyles = ({bgcolor, height, pad = 15, paddingtop, paddingbottom, paddingleft, paddingright} = {}) => ({
//   backgroundColor: bgcolor,
//   height: height,
//   padding: pad,
//   paddingLeft: paddingleft,
//   paddingRight: paddingright,
//   paddingTop: paddingtop,
//   paddingbottom: paddingbottom
// });

// type Props = {};

// class Home extends Component<Props> {

//    constructor(props) {
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(val) {
//     this.setState({value: val});
//   }

//   handleSubmit(event) {
//     // alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <View
//         style={styles.container}>
//         <View style={viewStyles({bgcolor: '#164450', height: 50})} >
//           <Text style={textStyle({fontsize: 14, fontweight: 0, fontstyle: "SemiBold"})}>
//           {'my garden: nick name'.toUpperCase()}
//           </Text>
//           <Icon
//             name="smile"
//             size={25}
//             color="white"
//             style={styles.smileIcon}
//             />
//         </View>
//         <View style={viewStyles({bgcolor: '#37C478', height: 78})} >
//           <Text style={textStyle({fontsize: 32, fontweight: 0, margintop: 10})}>
//             My Garden
//           </Text>
//         </View>
//         <View style={viewStyles({bgcolor: '#FFFFFF', height: 55, pad: 3})} >
//             {/* <TextInput
//             style={textStyle({fontsize: 13, fontweight: 0, color: "#164450", fontstyle: "Bold", textalign: "left", h: 50, paddingleft: 20 }) }
//             value={this.state.value}
//             placeholder="SEARCH ..."
//             placeholderTextColor="#164450"
//             onChangeText={(val) => this.handleChange(val)} />   */}
//              <Search style={textStyle({fontsize: 13, fontweight: 0, color: "#164450", fontstyle: "Bold", textalign: "left", h: 50, paddingleft: 20 }) }  />

//         </View>

//         <ScrollView>
//              <View style={viewStyles({bgcolor: '#FFF6D5', height: 640})} >
//                 <Text style={textStyle({fontsize: 13, fontweight: 0, color: "#164450", fontstyle: "Bold", textalign: "left"})}>
//                   {this.state.value}
//                 </Text>
//              </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//       // alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'flex-start',
//   },
//   smileIcon: {
//     // paddingRight: 40,
//     // alignContent: 'flex-end'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default Home;
