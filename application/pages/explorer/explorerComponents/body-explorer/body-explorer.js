import React from 'react';
import {View, Image, ScrollView, Text, TouchableOpacity, ActivityIndicator, Modal, Dimensions} from 'react-native';
import styles from './body-explorer-styles';

export default class BodyExplorer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            empresaProdutos: [],
            loading: false,
            modalVisible: false,
            idProd: null,
            idEmpr: null,
            deviceWidth: Dimensions.get('window').width,
        };

        // Verifica o tamanho da tela atual e guarda o valor na variavel deviceWidth
        Dimensions.addEventListener("change", () => {
            this.setState({deviceWidth: Dimensions.get('window').width});
        });
    }

    componentDidMount(){
        this.setState({
            campanhas:[]
        });
    }

    setModalVisible(visible, idProd, idEmpr) {
        this.setState({modalVisible: visible});
        this.setState({idProd: idProd});
        this.setState({idEmpr: idEmpr});
    }

    openProfile(id){
        console.log('Perfil: ', id);
    }

    conexao(id){
        this.setState({idEmpr: id});
        if(this.state.loading){
            this.setState({loading: false});
        }else{
            this.setState({loading: true});
        }
    }

    renderEmpresasProdutos(){
                {this.state.campanhas.map(empresas => (
                    <View key={empresas.categorias}>
                        <View style={styles.headerBodyExplorer}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.headerInfoMarca}>
                                {/*<View style={styles.headerImageMarca}>*/}
                                    {/*<Image style={styles.imageMarca} key={empresas.imgProfile} source={{uri: empresas.imgProfile}} />*/}
                                {/*</View>*/}

                                <View style={styles.headerNomeMarca}>
                                    <Text key={empresas.categorias} numberOfLines={1} ellipsizeMode="tail" style={styles.nomeMarca}>
                                        {empresas.categorias}
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            {/*<View style={styles.headerInfoButtons}>*/}
                                {/*<TouchableOpacity activeOpacity={0.6} style={styles.headerBtnLoja} onPress={() => this.openProfile(empresas.id)}>*/}
                                    {/*<Text style={styles.headerLabelBtnLoja}>*/}
                                        {/*VISITAR LOJA*/}
                                    {/*</Text>*/}
                                {/*</TouchableOpacity>*/}

                                {/*<TouchableOpacity activeOpacity={0.6} style={styles.headerBtnConexoes} onPress={()=> this.conexao(empresas.id)}>*/}

                                    {/*{ !this.state.loading &&*/}
                                    {/*<Text style={styles.headeLabelBtnConexoes}>*/}
                                        {/*CONECTAR*/}
                                    {/*</Text>*/}
                                    {/*}*/}
                                    {/*{*/}
                                        {/*this.state.loading &&*/}
                                        {/*<ActivityIndicator size="small" color="#fff" />*/}
                                    {/*}*/}
                                {/*</TouchableOpacity>*/}
                            {/*</View>*/}
                        </View>

                        <View style={styles.containerProdutos}>
                            <ScrollView style={styles.scrollProdutos} horizontal={true} showsHorizontalScrollIndicator={false}>
                                {empresas.campanhas.map(produtos => (
                                    <TouchableOpacity activeOpacity={0.9} key={produtos.id} style={styles.produtosContainer} onPress={() => {
                                        this.props.callBack('ProdutoProfile')
                                    }}>
                                        <Image style={styles.produtosImg} source={{uri: produtos.imgProduto}} />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                ))}
        ))
    }

    renderModalProdutos(){
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert('Não vai voltar não rapaz!!'); }}>

                    <ScrollView style={{flex: 1}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                            <TouchableOpacity style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: 10, marginTop: 10}}
                                              onPress={() => {
                                                  this.setModalVisible(!this.state.modalVisible);
                                              }}>
                                <Text style={{fontSize: 15}}> FECHAR </Text>
                            </TouchableOpacity>


                            {this.state.empresaProdutos.map(empProd => (
                                empProd.empresas.map(empresas => (
                                    empresas.produtos.map(produtos => (

                                        this.state.idEmpr == empresas.id && produtos.id == this.state.idProd &&

                                        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}} key={produtos.id}>

                                            <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={{flex: 1, width: '100%', flexDirection: 'row'}}>
                                                <View style={{height: 50, width: this.state.deviceWidth, backgroundColor: '#f3f3f3'}}>
                                                    <Image resizeMode={'contain'} style={styles.produtosImg} source={{uri: produtos.imgProduto}} />
                                                </View>

                                            </ScrollView>


                                        </View>
                                    ))
                                ))
                            ))}
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.bodyExplorer}>

                { this.renderEmpresasProdutos() }

                {/* MODAL DE PRODUTO - EXEMPLO */}
                { this.renderModalProdutos() }
            </View>
        );
    }
}