import {StyleSheet} from 'react-native';

export const styleLogin = StyleSheet.create({

    headerNotificationBar: {
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: '#000',
        position: 'relative'
    },

        container: {
            flex: 1,
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#000',
        },
        header: {
            width: '100%',
            height: 200,
            backgroundColor: 'transparent',
        },

        footer: {
            width: '100%',
            height: 100,
            backgroundColor: 'transparent',

        },

        imgLogo: {
            width: 150,
            height: 120,
        },

        imgSeta: {
            width: 22,
            height: 22,
            tintColor: '#fff'
        },

        setaContainer: {right: 100, top: 2, marginLeft: 15},


        headerContainer: {

            justifyContent: 'center',
            flexDirection: 'row',
            width: "100%",
            height: 100,

        },

        bodyContainer: {
            width: "100%",
            minHeight: 100,
            paddingLeft: 40,
            paddingRight: 40
        },
        body: {
            width: "100%",
            minHeight: 100,
        },
        inputContainer: {
            marginBottom: 5
        },
        inputCadastro: {
            backgroundColor: '#fff',
            height: 45,
            fontSize: 18,
            borderRadius: 1,
            paddingLeft: 10
        },
        btnEspaco: {
            marginTop: 15
        },

        errorLabel: {
            fontSize: 12,
            marginLeft: 12
        },


        text2: {
            fontWeight: 'bold'


        }
    })
;