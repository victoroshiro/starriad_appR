import {StyleSheet} from 'react-native';

export const styleCadastro = StyleSheet.create({

    inputContainer: {
        marginBottom: 5,
        justifyContent: 'center',
    },
    inputCadastro: {
        backgroundColor: '#fff',
        height: 45,
        fontSize: 18,
        borderRadius: 1,
        paddingLeft: 10
    },

    inputError: {
        borderColor: '#ffa800',
        borderWidth: 2,
    },

    inputValidate: {
        borderColor: '#00cc2b',
        borderWidth: 2,
    },


    btnEspaco: {
        marginTop: 15,
    },

    errorLabel: {
        fontSize: 12,
        marginLeft: 2,
        color: '#ffa800',
    },

    text2: {
        fontSize: 16
    },

    titleForm: {
        fontSize: 20,
        color: '#fff',
        fontStyle: 'italic'
    },
    containerCheckbox: {
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        minHeight: 30,
        flexDirection: 'row'
    },
    textCheckbox: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 5
    },

    iconBtn: {
        marginLeft: 5,
        marginTop: 3,
        width: 15,
        height: 15,
        tintColor: '#fff',
        transform: [{
            rotateY: '180deg'
        }]
    },

    labelSenha: {
        textAlign: 'right',
        color: '#004591',
        fontSize: 16
    },

    iconInput: {
        width: 35,
        height: 35,
        backgroundColor: 'black',
        alignItems:'flex-end',
    },

    iconContainer: {
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        bottom:40,
        width: 35,
        height: 35,
        left:235
    },

    containerDadosCnpj: {
        width: '100%',
        marginTop: 15,
    },

    labelMsg: {
        width: '100%',
        marginBottom: 10
    },

    textMsg: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },

    containerDadosEmpresa: {
        width: '100%',
        backgroundColor: 'rgb(235, 235, 228)',
        height: 45,
        borderRadius: 1,
        padding: 10,
        marginTop: 10,
        justifyContent: 'center'
    },

    textDadosEmpresa: {
        fontSize: 18,
        color: '#696969'
    },
});