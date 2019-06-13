import React, { Component } from 'react' 
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { styles as globalStyles, vars as globalVars, setUpUserData } from '@utils/global';
import { uppercaseFirstLetter } from '@utils/functions';
import { TitleBar } from "@components";
import Images from '@assets/plants/index';
import FastImage from "react-native-fast-image";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Touchable from 'react-native-platform-touchable';
import { Dropdown } from 'react-native-material-dropdown';
import PGCRequest from "../../network/PGCRequest";
import {PGCRequestList} from "../../network/PGCRequestList";
import { Icon, SearchInput } from "@components";  

// @flow 
export default class  GrowingItemScreen extends Component { 

    // TODO: refactor style to stylesheet
    constructor(props) {
        super(props);

        let propsData = this.props.navigation.getParam('screenProps', null);
        this.state = {
          guideData: {
            chapterTitles: [],
          },
          plantData: propsData,
          projectName: propsData.name,
          userData: {
            uid: "",
            name: "",
            origin: "",
            area: "",
          },
        }
        setUpUserData().then((data) => {
            this.setState({
            userData: data,
            });
            this.props.userData = data;
        });

        Promise.all([
          PGCRequest(PGCRequestList.GUIDE_GET, [this.state.plantData.guideID])
        ]).then((result) => {
            console.log(result);
            this.setState({
              guideData: result[0][0],
            });
        });

        this.projectSize("Small");
        this.projectClimate("Indoor");
        this.searchVal = this.searchVal.bind(this); 
    }

    projectSize = (value) => {
        this.size = value.toLowerCase();
    }

    projectClimate = (value) => {
        this.climate = value;
    }

    searchVal(e){
        if(e && e.nativeEvent) this.setState({ "projectName": e.nativeEvent.text }); 
    }
    
    render() {   
        let { navigation } = this.props;
        let data = [{
            value: "Small",
        }, {
            value: "Medium",
        }, {
            value: "Large",
        }];
        let data2 = [{
            value: "Indoor",
        }, {
            value: "Outdoor",
        }];
 
        return (
        <ScrollView showsVerticalScrollIndicator={false}  style={styles.container}>
            <Text style={styles.plantTitleText}>Project parameters</Text>
            <Dropdown
                label="Project size"
                data={data}
                animationDuration={0}
                containerStyle={styles.dropdownStyle}
                value="Small"
                onChangeText={(value) => this.projectSize(value)}
            />
            <Dropdown
                label="Climate"
                data={data}
                animationDuration={0}
                containerStyle={styles.dropdownStyle}
                value="Indoor"
                onChangeText={(value) => this.projectClimate(value)}
            />
            <Text style={styles.plantTitleText}>Project title</Text>
            <SearchInput 
                style={ styles.input }
                text={ this.state.projectName }
                value={ this.state.projectName }
                placeholder={ "Project name".toUpperCase()} 
                autoFocus={ false }
                placeholderTextColor={ globalVars.searchText }
                onChange={ this.searchVal }
            />
            <View style={styles.row}>
                <Touchable  
                onPress={() => { 
                    this.props.navigation.navigate("GrowingPreparation", {data: this.state.guideData, projectSettings: [this.size, this.climate, this.state.projectName, this.state.plantData.id, this.state.userData.uid, this.state.plantData.image] } );   
                    } 
                }
                onLongPress={null}
                style={styles.plantContainer}
                > 
                <View style={styles.plantTitle}>
                    <Text style={styles.plantTitleText}>Accessories you will need</Text>
                </View>
                </Touchable> 
            </View>
        </ScrollView>
        )
    }
}  

const styles = StyleSheet.create({ 
  container:  {
      backgroundColor: globalVars.ligthYellow, 
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
    height: 230,
  },
  dropdownStyle: {
      marginTop: 10,
      marginHorizontal: 10,
      backgroundColor: globalVars.white,
  },
  plantContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: globalVars.lightGreen,
  },
  plantTitle: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  plantTitleText: {
    color: globalVars.black,
    fontSize: 24,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 80,
    marginHorizontal: 10,
  },
  input: { 
    marginTop: 10,
    marginHorizontal: 10,
    height: 60,
    fontFamily: globalVars.bold,
    backgroundColor: "#fff",
    color: globalVars.black
  },
  plantTitleText: {
    marginTop: 10,
    marginHorizontal: 10,
    color: globalVars.black,
    fontSize: 24,
  },
});