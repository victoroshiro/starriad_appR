import { StyleSheet } from 'react-native';

const stylesTopExplorer = StyleSheet.create({

    // Contem a imagem, nome e os botões do banner
    containerBanner: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },

    containerImagem: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Contem a imagem de capa
    imagemBackground: {
        width: '100%',
        height: '100%',
    },

    // Controle o tamanho do container das informações do banner
    infosBanner: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },

    // Container que engloba o nome da empresa no banner
    infoLabel: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Nome da empresa no banner
    infoText: {
        fontSize: 45,
        color: '#fff',
        fontWeight: 'bold',
    },

    // Container que engloba os botoes de conexao e loja no banner
    infosButtons: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    // Botão Visitar Loja
    btnLoja: {
        marginRight: 5,
        width: 100,
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    // Texto do botão Visitar Loja
    labelBtnLoja: {
        color: '#000',
    },

    // Botão Conectar
    btnConexoes: {
        marginLeft: 5,
        width: 100,
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    // Texto do botão Conectar
    labelBtnConexoes: {
        color: '#fff',
    },

    containerIndiceSlide: {
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    indiceSlide:{
        height: 10,
        width: 10,
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 5
    },

});

export default stylesTopExplorer;