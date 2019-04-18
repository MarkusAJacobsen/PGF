import { StyleSheet } from 'react-native';

export const vars = {
    yellow: '#f9f2a2',
    ligthYellow: '#FFF6D5',
    lightGreen: '#71E671',
    green: '#37C478',
    white: '#FFFFFF',
    ligthGrey: '#FCFCFC', // not from the design
};

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 6,
        justifyContent: 'space-between',
        backgroundColor: vars.ligthYellow,
    },
});