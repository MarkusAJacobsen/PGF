import React, { Component } from 'react';
import SelectCategory from "../../components/Growing/SelectCategory";

export default class GuidesHomeScreen extends Component {

  constructor(props) {
    super(props); 
  }   

  render() {
    const { navigation } = this.props;

    return (
      <SelectCategory
        navigation={navigation}
        title="Guides"
        subtitle="Available guide categories:"
        categorySelectNextScreen="GuidesCategory"
        barcodeSelectNextScreen="GuidesItem"
      />
    );
  }
}

