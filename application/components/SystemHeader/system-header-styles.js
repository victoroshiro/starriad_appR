import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    headerContainer: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
        borderBottomWidth: 1,
        borderColor: '#e8e8e8',
        display: 'flex',
        flexDirection: 'column',
    },
    headerNotificationBar:{
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative'
    },

    headerContent: {
        width: '100%',
        height: 50,
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        paddingHorizontal: 15,
    },
    headerLogoContent: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTouchableOpacity: {
        width: 35,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    headerActionContent: {
        width: 30,
        height: 30,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerActionMarginRight: { marginRight: 10, },
    headerActionMarginLeft: { marginLeft: 10, },


    headerBadge: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: '#7417fb',
        position: 'absolute',
        right: 10,
        top: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerBadgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 8,
        position: 'relative'
    },


});

export default styles;