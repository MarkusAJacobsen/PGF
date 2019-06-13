import React, { Component } from "react";
import { SelectCategory } from "@components";

export default class GuidesHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.categories = ["vegetables", "herbs", "fruits", "flowers"];
    this.handleResult = this.handleResult.bind(this);

    let { navigation } = props;
    let paramSearch = navigation.getParam("search", "");
  }

  handleResult(search) {
    this.setState({
      search: search
    });
  }

  render() {
    // let { search, plants } = this.state;
    let { navigation } = this.props;

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
