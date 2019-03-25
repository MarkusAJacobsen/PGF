import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles as globalStyles, variables as globalVars} from '../../style/global';

const plants = [
    {
        'id': 1,
        'name': 'Cucumber',
        'type': 'Vegetable',
        'isEdible': true,
    },
    {
        'id': 2,
        'name': 'Tomato',
        'type': 'Vegetable',
        'isEdible': true,
    },
    {
        'id': 3,
        'name': 'Cactus',
        'type': 'Plant',
        'isEdible': false,
    }
];

export default class MyPlantsScreen extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
            <Text style={styles.heading}>Mine Planter</Text>
                {plants.map((p) => {
                    return (
                        <View key={p.id} style={styles.listItem}>
                            <Text key={p.id} style={styles.itemText}>
                                {p.name}
                            </Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'blue',
        height: 800,
        width: 800,
        borderColor: 'blue',
    },
    heading: {
        color: globalVars.green,
    },
    listContainer: {
        padding: 15,
    },
    listItem: {
        padding: 10,
    },
    itemText: {
        color: '#222222',
    }
});