import React from 'react';
import {View, Dimensions, TouchableOpacity, Text, Modal, Image, Alert, AsyncStorage} from 'react-native';
import {style} from "./ticketList-style";
import LoginService from "../../services/login/login-service";
import {withNavigation} from "react-navigation";
import {styleLogin} from "../login/Login-styles";
import styles from "../explorer/explorerComponents/body-explorer/body-explorer-styles";

class ticketList extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {

            height: height,
            width: width,
            user_id: null,
            cupons: [],
            modalVisible: false,
            codigo: 0,
            cupomSelected: []
        }

        this.checkLog();

    }


    checkLog = async () => {

        AsyncStorage.getItem('@starriad:userdata').then((value) => {

            let user_logged = JSON.parse(value)

            console.log(user_logged)

            if(user_logged !== undefined && user_logged != null && user_logged !== '' && user_logged && user_logged.success !== false){

                this.setState({user_id: user_logged.id[0].id})



                LoginService.getCupons({id: parseInt(user_logged.id[0].id)}).then((response) => {


                    this.setState({cupons: response.data})

                }).catch((error)=>{
                    Alert.alert(
                        'ERRO',
                        error.toString(),

                    );
                });


                }
        }).done();


    };

    render() {

        return (
            <View>
                <View style={{justifyContent: 'center',
                    flexDirection: 'row',
                    width: "100%",
                    backgroundColor: "#002f49",
                    height: 50}}>
                    <View style={{right: 100, top: 5, marginLeft: 5}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Image resizeMode={'contain'} style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: '#fff',
                                    marginTop: 8,
                                }}
                                   source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{fontSize: 20,marginTop: 8, color: "#fff"}}>CUPONS</Text>
                    </View>

                </View>
                <View style={{backgroundColor: "#225c72", height: "100%", color: "#fff"}}>
                    {/*<View style={{flex: 1, flexDirection: 'row', width: "100%",  marginBottom: 30, borderBottom: 5, borderBottomColor: "#fff", color: "#fff"}}>*/}
                        {/*<View style={{width: "50%", alignItems: "center", color: "#fff"}}>*/}
                            {/*<Text style={{fontSize: 20, color: "#fff"}}>EMPRESA</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{width: "50%", alignItems: "center", color: "#fff"}}>*/}
                            {/*<Text style={{fontSize: 20, color: "#fff"}}>VALOR</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    {this.state.cupons.map(cupom => (

                    <View key={cupom.id} style={{width: "100%", marginTop: 20, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "#fff", height: 60}}>
                        <TouchableOpacity style={{width: "100%",flex: 1, flexDirection: 'row', zIndex: 99999999, color: "#fff", paddingBottom: 10}} onPress={()=>{this.activeCupom(cupom)}}>
                            <View style={{width: "30%", alignItems: "center", color: "#fff"}}>
                                <Image style={{height: "100%", width: 50}} source={{uri: "http://ec2-18-231-116-5.sa-east-1.compute.amazonaws.com/StarriAD/uploads/" + cupom.nome_thumbnail}} />
                            </View>
                            <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{color: "#fff", fontSize: 15}}>{cupom.nome}</Text>
                            </View>
                            <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                <Text style={{color: "#fff"}}>Valor: R${cupom.valor}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    ))}

                </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                'Tem certeza que deseja fechar?',
                                'Lembre-se que esse cupom só pode ser usado uma vez, se voce ainda não o utilizou e fechar essa tela ele não poderá ser usado novamente',
                                [
                                    {text: 'Sim',  onPress: () => {
                                            this.setState({modalVisible: false});
                                            this.checkLog();
                                        }},
                                    {text: 'Não',  onPress: () => {}},

                                ],
                                {cancelable: false}
                            );

                        }}>
                            <Image resizeMode={'contain'} style={{imgSeta: {
                                    width: 22,
                                    height: 22,
                                    tintColor: '#000',
                                },}}
                                   source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                        </TouchableOpacity>
                        <View>
                            <View style={{alignItems: "center", width: "100%"}}>
                                <Text style={{fontSize: 20}}>{this.state.cupomSelected.nome}</Text>
                            </View>
                            <TouchableOpacity style={{alignItems: "center", width: "100%"}}>
                                <Text style={{fontSize: 25}}>Codigo: {this.state.codigo}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )


    }

    activeCupom(data) {


        Alert.alert(
            'Ativar cupom?',
            'Você só pode usar esse cupom uma vez, têm certeza que deseja usa-lo agora?',
            [
                {text: 'Sim',  onPress: () => {
                    this.setState({modalVisible: true});
                        LoginService.useCupons(data).then((response) => {
                            this.setState({codigo: response.data})
                            this.setState({cupomSelected: data})
                        })
                }},
                {text: 'Não',  onPress: () => {}},

            ],
            {cancelable: false}
        );
    }
}
export default withNavigation(ticketList)