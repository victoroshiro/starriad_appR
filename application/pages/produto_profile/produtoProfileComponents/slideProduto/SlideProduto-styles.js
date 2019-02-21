import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
    containerImage: {
        justifyContent: 'flex-end'
    },
    containerDots: {

        flexDirection: 'row',
        position: 'absolute',
        minWidth: 15,
        height: 30,
        bottom: 0,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    dotsArea: {
        marginRight: 5,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },


    dots: {
        width: 16,
        height: 16,
        backgroundColor: '#a2a19f',
        borderRadius: 50,
        opacity: 0.6

    },


    dotsActived: {
        backgroundColor: '#fff',
        opacity: 1
    }
});