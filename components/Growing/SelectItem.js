import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { styles as globalStyles, vars as globalVars } from "@utils/global";
import {
  uppercaseFirstLetter,
  searchStringInArray,
  comparedPlants
} from "@utils/functions";
import { getAllPlants, getMyPlants } from "@utils/api";
import { TitleBar, AddItem } from "@components";
import { PGCRequestList, PGCRequest } from "@network";
import FastImage from "react-native-fast-image";
import Images from "@assets/plants";

export default class SelectItem extends Component {
  constructor(props) {
    super(props);

    this.getPlantsFromPGC();
    this.state = {
      category: this.props.navigation.getParam(
        "plantType",
        "<category missing>"
      ),
      displayedPlants: [],
      allPlants: [],
      search: ""
    };

    this.handleResult = this.handleResult.bind(this);
  }

  handleResult(search) {
    if (search.length > 0)
      this.setState({
        search: search
      });
  }

  getPlantsFromPGC() {
    Promise.all([PGCRequest(PGCRequestList.PLANT_GET_ALL, [])])
      .then(result => {
        const category = this.state.category;
        console.log(result);
        const filteredResult = result[0].filter(
          plant => plant.category == category
        );
        this.setState({
          allPlants: result[0],
          displayedPlants: filteredResult
        });
      })
      .catch(() => {});
  }

  render() {
    const { category, allPlants, displayedPlants, search } = this.state;
    const categories = ["herbs", "vegetables", "flowers", "fruits"];
    let isVisibleSearch = true;

    let list =
      search.length > 0
        ? searchStringInArray(search, displayedPlants)
        : displayedPlants;

    if (list.length > 0) {
      isVisibleSearch = true;
    } else {
      isVisibleSearch = false;
    }

    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar
          heading={this.props.title}
          handleResult={this.handleResult}
          isVisibleSearch={isVisibleSearch}
        />

        <View style={globalStyles.contentContainer}>
          <Text style={styles.topLabel}>{this.props.subtitle}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {list.length > 0 ? (
              list.map(plant => {
                const added = false;
                return (
                  <View style={styles.row} key={plant.id}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate(
                          this.props.itemSelectNextScreen,
                          { screenProps: plant }
                        );
                      }}
                      style={styles.plantContainer}
                    >
                      <View style={styles.plantTitle}>
                        <Text style={styles.plantTitleText}>
                          {uppercaseFirstLetter(plant.name)}
                        </Text>
                      </View>
                      <View style={styles.imageContainer}>
                        <FastImage
                          source={{ uri: plant.image }}
                          style={styles.image}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })
            ) : (
              <Text style={styles.noresults}>
                Unfortunately, there are no {category} registered.
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    marginTop: 8
  },
  rowActionContainer: {
    flex: 1,
    backgroundColor: globalVars.white,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  },
  plantContainer: {
    flex: 6,
    flexDirection: "row",
    backgroundColor: globalVars.white
  },
  plantTitle: {
    flex: 6,
    justifyContent: "center",
    marginLeft: 10
  },
  plantTitleText: {
    color: globalVars.black,
    fontSize: 24
  },
  imageContainerdd: {
    flex: 1,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 20,
    backgroundColor: globalVars.white
  },
  image: {
    flex: 1
  },
  noresults: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 100
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
