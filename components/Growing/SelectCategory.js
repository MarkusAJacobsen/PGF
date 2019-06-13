import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '@utils/global';
import { TitleBar, PlantCategoryCard, BarcodeSearchStartButton } from '@components'; 

export default class GrowingHomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle,
        }
    }


    render() {
        const { navigation } = this.props;
        const categories = ['herbs', 'vegetables', 'flowers', 'fruits'];
        return (
            <View style={globalStyles.screenContainer}>
                <TitleBar heading={this.state.title} isVisibleSearch={false} /> 
                <BarcodeSearchStartButton
                    navigation={navigation}
                    nextScreen={this.props.barcodeSelectNextScreen}
                />
                <Text style={styles.topLabel}>{(this.state.subtitle).toUpperCase()}</Text> 
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={globalStyles.contentContainer}>
                        <View style={styles.cardContainer}>
                            {categories.map((c) =>
                            <PlantCategoryCard name={c} navigation={navigation} nextScreen={this.props.categorySelectNextScreen} key={c} />
                            )}
                        </View> 
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLabel: {
    color: globalVars.searchText,
    backgroundColor: globalVars.ligthYellow,
    paddingLeft: 22,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: globalVars.bold
  }
});

// Det er dessverre ingen urter registrert.  