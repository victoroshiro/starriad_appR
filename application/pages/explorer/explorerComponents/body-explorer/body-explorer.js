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
            empresaProdutos: [
                {
                    id: 1,
                    empresas: [{
                        id: 1,
                        imgProfile: 'https://d2mf6a0uls9pip.cloudfront.net/uploads/perfil/medium/2018/07/17/5b4e30a12357e.jpeg',
                        nameProfile: 'Alimentos',

                        produtos: [
                            {
                                id: 1,
                                imgProduto: 'https://d2mf6a0uls9pip.cloudfront.net/uploads/variantes/big/2018/10/18/5bc8d6309810c.jpeg',
                                descricao: 'Blusa Couro',
                                valor: 'R$ 150,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Preta',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }, {
                                id: 2,
                                imgProduto: 'https://d2mf6a0uls9pip.cloudfront.net/uploads/variantes/medium/2018/10/18/5bc8d4c57db3a.jpeg',
                                descricao: 'Camisa',
                                valor: 'R$ 70,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Violeta',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }, {
                                id: 3,
                                imgProduto: 'http://megabrasbrasil.com/wp-content/uploads/2017/04/modelo8.png',
                                descricao: 'Camisa',
                                valor: 'R$ 110,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Rosa Claro',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }, {
                                id: 4,
                                imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-feminino-png.png',
                                descricao: 'Camisa',
                                valor: 'R$ 120,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Rosa Escuro',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }]
                    },{

                        id: 2,
                        imgProfile: 'https://static.wixstatic.com/media/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.jpg/v1/fill/w_235,h_235,al_c,q_80,usm_0.66_1.00_0.01/858f04_422bc44d1da74bbfae06457614096fc8~mv2_d_1240_1240_s_2.webp',
                        nameProfile: 'Aplicativos',

                        produtos: [
                            {
                                id: 1,
                                imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-feminino-png.png',
                                descricao: 'Blusa Couro',
                                valor: 'R$ 150,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Preta',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }, {
                                id: 2,
                                imgProduto: 'http://megabrasbrasil.com/wp-content/uploads/2017/04/modelo8.png',
                                descricao: 'Camisa',
                                valor: 'R$ 150,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Violeta',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }, {
                                id: 3,
                                imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-roupa-png-1.png',
                                descricao: 'Camisa',
                                valor: 'R$ 150,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Rosa Claro',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }, {
                                id: 4,
                                imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-de-roupa-png.png',
                                descricao: 'Camisa',
                                valor: 'R$ 150,00',
                                codigo: 'EQ123154321BR',
                                cor: 'Rosa Escuro',

                                variantes: [
                                    {
                                        id: 1,
                                        cor: '#000',
                                    },
                                    {
                                        id: 2,
                                        cor: '#aaaaec',
                                    },
                                    {
                                        id: 3,
                                        cor: '#5aec56',
                                    },
                                    {
                                        id: 4,
                                        cor: '#ec1c0b',
                                    },
                                    {
                                        id: 5,
                                        cor: '#307fec',
                                    },
                                    {
                                        id: 6,
                                        cor: '#ec27cf',
                                    },
                                    {
                                        id: 7,
                                        cor: '#eceb48',
                                    }]
                            }]
                    },



                        {

                            id: 3,
                            imgProfile: 'data:image/jpeg;base64,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\'',
                            nameProfile: 'Moda',

                            produtos: [
                                {
                                    id: 1,
                                    imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-de-roupa-png.png',
                                    descricao: 'Blusa Couro',
                                    valor: 'R$ 150,00',
                                    codigo: 'EQ123154321BR',
                                    cor: 'Preta',

                                    variantes: [
                                        {
                                            id: 1,
                                            cor: '#000',
                                        },
                                        {
                                            id: 2,
                                            cor: '#aaaaec',
                                        },
                                        {
                                            id: 3,
                                            cor: '#5aec56',
                                        },
                                        {
                                            id: 4,
                                            cor: '#ec1c0b',
                                        },
                                        {
                                            id: 5,
                                            cor: '#307fec',
                                        },
                                        {
                                            id: 6,
                                            cor: '#ec27cf',
                                        },
                                        {
                                            id: 7,
                                            cor: '#eceb48',
                                        }]
                                }, {
                                    id: 2,
                                    imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-roupa-png-1.png',
                                    descricao: 'Camisa',
                                    valor: 'R$ 70,00',
                                    codigo: 'EQ123154321BR',
                                    cor: 'Violeta',

                                    variantes: [
                                        {
                                            id: 1,
                                            cor: '#000',
                                        },
                                        {
                                            id: 2,
                                            cor: '#aaaaec',
                                        },
                                        {
                                            id: 3,
                                            cor: '#5aec56',
                                        },
                                        {
                                            id: 4,
                                            cor: '#ec1c0b',
                                        },
                                        {
                                            id: 5,
                                            cor: '#307fec',
                                        },
                                        {
                                            id: 6,
                                            cor: '#ec27cf',
                                        },
                                        {
                                            id: 7,
                                            cor: '#eceb48',
                                        }]
                                }, {
                                    id: 3,
                                    imgProduto: 'http://megabrasbrasil.com/wp-content/uploads/2017/04/modelo8.png',
                                    descricao: 'Camisa',
                                    valor: 'R$ 110,00',
                                    codigo: 'EQ123154321BR',
                                    cor: 'Rosa Claro',

                                    variantes: [
                                        {
                                            id: 1,
                                            cor: '#000',
                                        },
                                        {
                                            id: 2,
                                            cor: '#aaaaec',
                                        },
                                        {
                                            id: 3,
                                            cor: '#5aec56',
                                        },
                                        {
                                            id: 4,
                                            cor: '#ec1c0b',
                                        },
                                        {
                                            id: 5,
                                            cor: '#307fec',
                                        },
                                        {
                                            id: 6,
                                            cor: '#ec27cf',
                                        },
                                        {
                                            id: 7,
                                            cor: '#eceb48',
                                        }]
                                }, {
                                    id: 4,
                                    imgProduto: 'http://pngimage.net/wp-content/uploads/2018/06/modelo-feminino-png.png',
                                    descricao: 'Camisa',
                                    valor: 'R$ 120,00',
                                    codigo: 'EQ123154321BR',
                                    cor: 'Rosa Escuro',

                                    variantes: [
                                        {
                                            id: 1,
                                            cor: '#000',
                                        },
                                        {
                                            id: 2,
                                            cor: '#aaaaec',
                                        },
                                        {
                                            id: 3,
                                            cor: '#5aec56',
                                        },
                                        {
                                            id: 4,
                                            cor: '#ec1c0b',
                                        },
                                        {
                                            id: 5,
                                            cor: '#307fec',
                                        },
                                        {
                                            id: 6,
                                            cor: '#ec27cf',
                                        },
                                        {
                                            id: 7,
                                            cor: '#eceb48',
                                        }]
                                }]

                        },


                ]
                }

            ]
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
        return this.state.empresaProdutos.map(empProd => (
            <View key={empProd.id}>
                {empProd.empresas.map(empresas => (
                    <View key={empresas.id}>
                        <View style={styles.headerBodyExplorer}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.headerInfoMarca}>
                                {/*<View style={styles.headerImageMarca}>*/}
                                    {/*<Image style={styles.imageMarca} key={empresas.imgProfile} source={{uri: empresas.imgProfile}} />*/}
                                {/*</View>*/}

                                <View style={styles.headerNomeMarca}>
                                    <Text key={empresas.nameProfile} numberOfLines={1} ellipsizeMode="tail" style={styles.nomeMarca}>
                                        {empresas.nameProfile}
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
                                {empresas.produtos.map(produtos => (
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
            </View>
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