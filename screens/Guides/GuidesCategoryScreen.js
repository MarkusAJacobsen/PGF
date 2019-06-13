import React, { Component } from 'react';
import { SelectItem } from "@components";
import { uppercaseFirstLetter } from '@utils/functions';

export default class GuidesCategoryScreen extends Component {

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
        subtitle="Available guides:"
        itemSelectNextScreen="GuidesItem"
      />
    );
  }
}

