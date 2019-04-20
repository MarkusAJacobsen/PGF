import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { styles as globalStyles, vars as globalVars } from '../../styles/global';
import { uppercaseFirstLetter } from '../../utils/functions';
import { getAllPlants, getMyPlants } from '../../utils/api';
import TitleBar from '../../components/TitleBar/TitleBar';
import AddItem from '../../components/Buttons/AddItem';
import Images from '../../assets/plants/index';

export default class GrowingCategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // plantType: uppercaseFirstLetter(this.props.navigation.state.params.plantType),
      plantCategory: '',
      myPlants: [],
      allPlants: [],
    };
  }

  componentWillMount() {
    const category = this.props.navigation.getParam('plantType', '<category missing>')
    const myPlants = getMyPlants()[category];
    const allPlants = getAllPlants()[category];

    this.setState({
      category: category,
      myPlants: myPlants,
      allPlants: allPlants,
    });
  }

  render() {
    const { category, allPlants, myPlants } = this.state;
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading={uppercaseFirstLetter(category)} />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false} >
            {allPlants.map((plant) => {
              // Does this plant already exist in myPlants?
              const added = myPlants.some(p => p.id === plant.id);
              return (
                <View style={styles.row} key={plant.id}>

                  <View style={styles.rowActionContainer}>
                    <AddItem size='small' bgColor='white' added={added} />
                  </View>

                  <View style={styles.plantContainer}>
                    <View style={styles.plantTitle}>
                      <Text style={styles.plantTitleText}>{uppercaseFirstLetter(plant.name)}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image source={Images[category][plant.name]} style={styles.image} />
                    </View>
                  </View>

                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 8,
  },
  rowActionContainer: {
    flex: 1,
    backgroundColor: globalVars.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantContainer: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: globalVars.white,
    marginLeft: 5,
  },
  plantTitle: {
    flex: 6,
    justifyContent: 'center',
    marginLeft: 10,
  },
  plantTitleText: {
    color: globalVars.black,
    fontSize: 24,
  },
  imageContainer: {
    flex: 1,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  }
});
