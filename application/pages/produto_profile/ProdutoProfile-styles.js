import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({

    headerNotificationBar:{
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative',
    },

    containerPage: {
        flex: 1,
        backgroundColor: '#fff',
    },

    containerProdutos: {
        width: '100%',
        flex: 1,
    },

    containerInfo: {
        width: '100%',
        minHeight: 50,
        padding: 15,
    },

    headerInfo: {
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 22,
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    desc: {
        paddingTop: 10,
        flexDirection: 'row'
    },

    containerIcon: {
        marginRight: 5
    },

    textDesc: {
        fontSize: 14
    },

    imageContainer: {
        width: 20,
        height: 20,
        tintColor: '#9e9e9e',
    },

    iconsAvaliar: {
        width: 25,
        height: 25,
        tintColor: '#000',
    },

    iconsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconsArea: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '40%',
    },

    containerDetalhesProduto: {
        width: '100%',
        padding: 10
    },

    contentDetalhesProduto: {
        width: '100%',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e6e5e5'
    },

    titleDetalhesProduto: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    descDetalhesProduto: {
        fontSize: 16,
        marginTop: 5
    },

    containerIconsAvaliar: {
        flexDirection: 'row',
        marginTop: 10
    },

    containerBotoesCompartilhar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },

    touchBotoes: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10
    },

    labelBotoes: {
        fontSize: 16,
        color: '#fff'
    },

    containerProdutosRelacionados: {
        flex: 1,
        width: '100%',
        height: 350,
        marginBottom: 10,
        marginTop: 10
    },

    scrollProdutosRelacionados: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },

    touchProdutosRelacionados: {
        width: 230,
        height: '100%',
        marginRight: 10,
        backgroundColor: '#fff'
    },

    imgProdutosRelacionados: {
        width: '100%',
        height: '90%',
    },

    descProdutosRelacionados: {
        width: '100%',
        height: '10%',
        fontSize: 15,
        marginTop: 5,
        marginLeft: 5
    },

    finalizarContainer: {
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    leftContainer: {
        flexDirection: 'row'
    },

    textTotal: {
        fontSize: 17,
    },
    btnCarrinhno: {
        backgroundColor: '#67c66a',
        width: 140,
        height: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textBtn: {
        color: '#fff',
        fontSize: 10,
        fontWeight:'bold'
    },

    imageBtn: {
        width: 16,
        height: 16,
        tintColor: '#fff'
    },

});