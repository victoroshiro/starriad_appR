import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({

    headerNotificationBar: {
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative'
    },

        container: {
            // marginTop: 24,
            flex: 1,
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'flex',

        },

        scrollContainer: {
            flex: 1,
            width: '100%',
            position:'absolute',


        },

        imageContainer: {
            justifyContent: 'space-between',
            position:'absolute'


        },

        topContainer: {
            width: '100%',
            flexGrow: 2,
            marginBottom: 20,
        },

        imgLogo: {
            width: 100,
            height: 100,
            aspectRatio: 1,

        },


        imgSeta: {
            width: 25,
            height: 25,
            aspectRatio: 1,
            position: 'relative',
            right: 105,
            top: 35

        },

        header: {
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row'
        },

        bottomContainer: {
            width: '100%',
            backgroundColor: 'transparent',
            flexGrow: 1.5,
            justifyContent: 'space-around',
            alignItems: 'center',

        },
        viewText: {
            width: '90%',

        },
        textContainer: {
            marginBottom: 20,
            textAlign: 'center'
        },
        textPadrao: {
            marginLeft: 10,
            marginRight: 10,
            color: '#fff',
            fontSize: 27,

        },
        textDetalhe: {
            fontWeight: 'bold',
            fontSize: 28,

        },
        dotsContainer: {
            position: 'relative',
            bottom: 30,
            width: 200,
            height: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',

        },
        dots: {
            width: 10,
            height: 10,
            backgroundColor: '#4d4d4d',
            borderRadius: 100,

        },
        dotsActived: {
            backgroundColor: '#fff',
        },

        dotsTriangle: {

            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 8,
            borderRightWidth: 8,
            borderBottomWidth: 13,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: '#4d4d4d',
            transform: [{ rotate: '90deg'}],

        },
        btnContainer: {
            position: 'relative',
            bottom: 30,
            width: "75%",
            height: 110,
            justifyContent: 'space-between',
        },

        btnPadrao: {
            backgroundColor: 'green',
            width: "100%",
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'row'
        },


        btnEntrar: {
            backgroundColor: '#004591',
        },
        btnCadastrar: {
            backgroundColor: 'transparent',
            borderColor: "#fff",
            borderWidth: 1,
        },
        textBtn: {
            color: "#fff",
            fontSize: 16

        }
    })
;
