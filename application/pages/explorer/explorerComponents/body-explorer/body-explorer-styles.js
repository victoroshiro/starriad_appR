import { StyleSheet } from 'react-native';

const stylesBodyExplorer = StyleSheet.create({

    // Corpo do Explorer, contém as informações de perfil e produtos
    bodyExplorer: {
        width: '100%',
        marginTop: 25,
    },

    // Header do corpo do Explorer, contém as informações de perfil e os botões conectar e loja
    headerBodyExplorer: {
        flex: 1,
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },

    // Contém as informações de perfil (nome e imagem)
    headerInfoMarca: {
        flex: 2,
        flexDirection: 'row',
        height: '100%',
        paddingBottom: 5,
        paddingTop: 5,
    },

    // Container da imagem de perfil
    headerImageMarca: {
        width: 50,
        height: '100%',
        backgroundColor: '#fafafa',
        borderRadius: 2,
    },

    // Imagem de perfil
    imageMarca: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    // Container do nome de perfil
    headerNomeMarca: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    // Nome do perfil
    nomeMarca: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },

    // Contém os botões do header do explorer
    headerInfoButtons: {
        flex: 2,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    // Botão de visitar a loja no header
    headerBtnLoja: {
        marginRight: 5,
        flex: 1,
        height: '60%',
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
    },

    // Texto do botão de visitar loja
    headerLabelBtnLoja: {
        color: '#000',
        fontSize: 12,
    },

    // Botão de conectar no header
    headerBtnConexoes: {
        marginLeft: 5,
        flex: 1,
        height: '60%',
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    // Texto do botão de conectar
    headeLabelBtnConexoes: {
        color: '#fff',
        fontSize: 12,
    },

    // Engloba todos os produtos da empresa
    containerProdutos: {
        flex: 1,
        width: '100%',
        height: 180,
        paddingLeft: 10,
        marginBottom: 10,
    },

    // Contém o Scroll de produtos horizontalmente
    scrollProdutos: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },

    // Container do produto individual
    produtosContainer: {
        width: 250,
        height: '100%',
        marginRight: 10,
        backgroundColor: '#f3f3f3',
    },

    // Imagem do produto
    produtosImg: {
        width: '100%',
        height: '100%',
    }

});

export default stylesBodyExplorer;