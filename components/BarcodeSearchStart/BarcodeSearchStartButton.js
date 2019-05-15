import React, { Component } from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { styles as globalStyles, vars as globalVars } from '@utils/global';

class BarcodeSearchStartButton extends Component {
    tryBarcode = () => {
        const { navigation } = this.props;
        navigation.navigate(
          'BarcodeSearch',
        );
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Pocket Garden Camera Permission",
                    message: "Pocket Garden needs access to your camera "
                         + "to scan barcodes.",
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.tryBarcode();
            }
        } catch (err) {
            console.warn(err);
        }
    }

    render() {

        return (
            <View style={[globalStyles.contentContainer, styles.barcodeBox]}>
                <Touchable
                    onPress={() => this.requestCameraPermission()}
                    onLongPress={null}
                >
                    <Text style={styles.barcodeBoxText}>Try with barcode</Text>
                </Touchable>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    barcodeBox: {
        height: 60,
        fontFamily: globalVars.bold,
        backgroundColor: "#fff",
        color: globalVars.black,
        alignItems: 'center',
        justifyContent: 'center',
      },
      barcodeBoxText: {
        textAlign: 'center',
        color: globalVars.searchText,
        fontSize: 16,
        fontFamily: globalVars.bold
      }
});

export default BarcodeSearchStartButton;
