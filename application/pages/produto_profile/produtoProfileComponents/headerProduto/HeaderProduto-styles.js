import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    containerHeader: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10
    },

    back: {
        width: 30,
        height: 30
    },

    textTitle: {
        fontSize: 18,

    },
    logo: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
    }
});