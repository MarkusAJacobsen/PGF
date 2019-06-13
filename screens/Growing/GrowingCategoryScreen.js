import React, { Component } from 'react';
import { SelectItem } from "@components";
import { uppercaseFirstLetter } from '@utils/functions';

// @flow 
export default class GrowingCategoryScreen extends Component {

  constructor(props) {
    super(props); 
  }   

  render() {
    const { navigation } = this.props;
    let category = navigation.getParam("plantType", "<missing category>")
    return (
      <SelectItem
        navigation={navigation}
        title={uppercaseFirstLetter(category)}
        subtitle="Plants available in your area:"
        itemSelectNextScreen="GrowingItem"
      />
    );
  }
}