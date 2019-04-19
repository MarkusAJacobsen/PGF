import { StyleSheet } from 'react-native';

export const vars = {
    yellow: '#f9f2a2',
    ligthYellow: '#FFF6D5',
    lightGreen: '#A4FC6C',
    green: '#37C478',
    white: '#FFFFFF',
    black: '#000000',
    ligthGrey: '#FCFCFC', // not from the design
};

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 6,
        backgroundColor: vars.ligthYellow,
    },
});