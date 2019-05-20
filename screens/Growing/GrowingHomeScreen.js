import React, { Component } from 'react';
import SelectCategory from "../../components/Growing/SelectCategory";

export default class GrowingHomeScreen extends Component {

  constructor(props) {
    super(props); 
  }   

  render() {
    const { navigation } = this.props;

    return (
      <SelectCategory
        navigation={navigation}
        title="New project"
        subtitle="Plant categories:"
        categorySelectNextScreen="GrowingCategory"
        barcodeSelectNextScreen="GrowingItem"
      />
    );
  }
}