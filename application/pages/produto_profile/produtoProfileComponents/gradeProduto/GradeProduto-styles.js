import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({

    containerPage: {
        width: '100%',
        padding: 10
    },

    contentHeaderGrade: {
        width: '100%',
        flexDirection: 'row'
    },

    containerTitleGrade: {
        width: 55,
        backgroundColor: '#e6e6e6',
        marginRight: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textHeaderGrade: {
        fontSize: 15
    },

    containerTamanhosNomes: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        marginRight: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerGradeVariantes: {
        width: '100%'
    },

    corVariante: {
        width: 55,
        backgroundColor: '#fafafa',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerGradeTamanhos: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerHeader: {
        height: 80,
        width: "100%",
        borderColor: '#dddddd',
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15
    },
    containerLeft: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },

    imageContainer: {
        width: 40,
        height: 40,
    },

    corContainer: {
        width: 40,
        height: 40,

    },

    containerText:
        {
            justifyContent: 'space-between',
            marginBottom: 15,
            marginLeft: 6
        },

    otherText: {
        fontWeight: 'bold',
        color: '#545454',
    },

    iconContainer: {
        width: 25,
        height: 25,
        // transform: [{rotate: '90deg'}]
    },

    containerInput:{
        width: '100%',
        maxWidth: 60,
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

   errorInput:{
        borderColor: 'red',
        borderWidth: 1,
    },

    textErrorInput:{
        color: 'red'
    },


});



export const DetalhesPedidoStyles = StyleSheet.create({

    headerNotificationBar: {
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative'
    },

    containerDetalhePedido: {
        flex: 1,
    },

    containerInfosProduto: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },

    contentDetalhePedido: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
        marginTop: 10,
    },

    containerImgProduto: {
        width: 70,
        height: '100%',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#f6f6f6',
    },

    imgProduto: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    descricaoProduto: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },

    produtoNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    produtoPrecoTotal: {
        fontSize: 14,
    },

    containerDetalheCor: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
        alignItems: 'center',

    },

    detalheCor: {
        flex: 1,
        height: 95,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },

    containerImgCor: {
        width: 70,
        height: '100%',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#f6f6f6',
    },

    imgCor: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    infosCor: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 5,
    },

    descricaoCor: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    containerQtd: {
        flexDirection: 'row',
    },

    qtd: {
        width: 50,
    },

    labelQtd: {
        fontSize: 16,
    },

    textQtd: {
        fontSize: 14,
    },

    labelSubTotal: {
        fontSize: 16,
    },

    textSubTotal: {
        fontSize: 14,
    },

    containerIcon: {
        width: 40,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },

    touchIcon: {
        width: '100%',
        height: 20,
    },

    icon: {
        width: '100%',
        height: '100%',
    },

    containerInfosTamanhos: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    tamanhosDisponiveis: {
        width: '45%',
    },

    containerTitleTamanhosDisponiveis: {
        width: '100%',
        flexDirection: 'row',
    },

    viewLabelTitle: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelTitle: {
        fontSize: 10,
    },

    containerTamanhosDisponiveis: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
    },

    viewNomeTamanho: {
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },

    viewQtdTamanho: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerInfosQtd: {
        width: '45%',
    },

    infosQtd: {
        width: '100%',
        flexDirection: 'row',
    },

    titleQtd: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBloqueado: {
        opacity: 0.2,
    },

    containerBtnMaisMenosQtd: {
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
    },

    menosQtdMais: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
    },

    qtdDisponivel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textQtdDisponivel: {
        fontSize: 14,
    },

    textMenosMais: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    infosTamanhos: {
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },

    tamanhosQtd: {
        flex: 1,
        width: '100%',
    },

    itemTamanho: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        maxWidth: '25%',
    },

    itemQuantidade: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        maxWidth: '25%',
    },



});

