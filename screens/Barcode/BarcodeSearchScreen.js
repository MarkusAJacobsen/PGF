import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import { getAllPlants } from "../../utils/api";


class BarcodeSearchScreen extends Component {
    constructor(props) {
        super(props);
        this.stopRequest = false;
    }

    readBarcode = (event) => {
        if (this.stopRequest === false && event.type === "EAN_13") {
            this.stopRequest = true;

            // Contact PGC for info which product category this matches
            // For now open tomato

            let data = getAllPlants();
            //console.log(data.vegetables[1]);
            this.props.navigation.navigate('GrowingItem', {screenProps: data.vegetables[1]} );   
            this.stopRequest = false;
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
                    //aspect={RNCamera.Constants.Aspect.fill}
                    onBarCodeRead={(event) => this.readBarcode(event)}
                    barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
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
