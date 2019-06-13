import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import { getAllPlants } from "../../utils/api";
import PGCRequest from "../../network/PGCRequest";
import {PGCRequestList} from "../../network/PGCRequestList";


class BarcodeSearchScreen extends Component {
    constructor(props) {
        super(props);
        this.stopRequest = false;

        let nextScreen = this.props.navigation.getParam('nextScreen', null);
        this.state = {
            nextScreen: nextScreen
        }
        console.log(nextScreen);
    }

    readBarcode = (event) => {
        if (this.stopRequest === false && event.type === "EAN_13") {
            this.stopRequest = true;

            // Contact PGC for info which product category this matches
            Promise.all([
                PGCRequest(PGCRequestList.PLANT_GET_BARCODE, [event.data])
            ]).then((result) => {
                console.log(result[0][0]);
                this.stopRequest = false;
                this.props.navigation.navigate(this.state.nextScreen, {screenProps: result[0][0]} );   
            });
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={[styles.container]}>
                <RNCamera
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    onBarCodeRead={(event) => this.readBarcode(event)}
                    /*barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}*/
                    captureAudio={false}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
})

export default BarcodeSearchScreen;
