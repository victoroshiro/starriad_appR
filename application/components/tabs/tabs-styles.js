import {StyleSheet} from 'react-native';

const TabStyles = StyleSheet.create({
    container: {
        // alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row'
    },
    iconContainer: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        // flexGrow: 1,
        display: 'flex',
        width: '100%',
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabSelected: {
        backgroundColor: 'black',
    },
    tabUnselected: {
        backgroundColor: 'white'
    }
});

export default TabStyles;