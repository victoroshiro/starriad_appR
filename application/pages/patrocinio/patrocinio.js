import React from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    Modal,
    Image,
    Alert,
    AsyncStorage,
    TextInput,
    ScrollView
} from 'react-native';
import LoginService from "../../services/login/login-service";
import {withNavigation} from "react-navigation";
import {style} from "../slides/SlideScreen-styles";
import {styleCadastro} from "../login/loginComponents/cadastro/Cadastro-styles";


class patrocinio extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {

            height: height,
            width: width,
            patrocinio: [],
            user_id: null,
            participando: null,
            ranking: [],
            user: {}
        }

        this.checkLog()

    }
    checkLog = async () => {

        AsyncStorage.getItem('@starriad:userdata').then((value) => {

            let user_logged = JSON.parse(value)

            if(user_logged !== undefined && user_logged != null && user_logged !== '' && user_logged && user_logged.success !== false){

                this.setState({user_id: user_logged.id[0].id})

                LoginService.getPatrocinio().then((response) => {


                    if(response.data.length > 0)
                        this.setState({patrocinio: response.data})

                    LoginService.getParticipo({user_id:  user_logged.id[0].id, patrocinio_id: ((response.data.length > 0) ? response.data[0].patrocinio_id : null)}).then((response) => {

                        this.setState({participando: response.data})


                    }).catch((e)=>{
                        Alert.alert(
                            'ERRO1',
                            e.toString(),

                        );
                        console.log(e)
                    })


                    LoginService.userDataRanking({id:  user_logged.id[0].id, patrocinio_id: ((response.data.length > 0) ? response.data[0].patrocinio_id : null)}).then((response) => {
                        console.log(response.data)

                        this.setState({user: response.data.user})
                        this.setState({ranking: response.data.ranking})


                    }).catch((e)=>{

                        console.log(e)

                    })

                }).catch((e)=>{

                    console.log(e)

                });

            }
        }).done();


    };

    render(){

        return(
            <View style={{flexGrow: 1, backgroundColor: "#225c72"}}>

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
                        <Text style={{fontSize: 20,marginTop: 8, color: "#fff"}}>Seus Pontos: {this.state.user.pontos}</Text>
                    </View>

                </View>

                <ScrollView >
                    { (this.state.patrocinio.length > 0) &&
                <View>
                    <View style={{width: "100%", alignItems: "center", color: "#fff"}}>
                        <Image style={{height: 200, width: "100%"}} source={{uri: "http://ec2-18-231-116-5.sa-east-1.compute.amazonaws.com/StarriAD/uploads/" + this.state.patrocinio[0].file}} />
                    </View>
                    <View>
                        <Text style={{color: "#fff", fontSize: 30, textAlign: "center"}}>{this.state.patrocinio[0].nome}</Text>
                    </View>
                    <View>
                        <Text style={{color: "#fff", margin: 10}}>Descrição: {this.state.patrocinio[0].descricao}</Text>
                    </View>
                    <View>
                        <Text style={{color: "#fff", margin: 10}}>Encerramento: {this.state.patrocinio[0].data_encerramento}</Text>
                    </View>


                    {(this.state.participando === null || this.state.participando === 0 || this.state.participando === false) &&

                    <TouchableOpacity style={{marginTop: 15}} onPress={() => {
                        this.paticipar()
                    }}>


                        <View style={[style.btnPadrao, style.btnCadastrar]}>
                            <Text style={[style.textBtn, styleCadastro.text2]}>QUERO PARTICIPAR</Text>
                        </View>
                    </TouchableOpacity>

                    }

                    {(this.state.participando === true || this.state.participando === 1) &&

                    <View>
                        <Text style={{color: "#fff", fontSize: 25, textAlign: "center", margin: 15}}>Você já está participando</Text>

                    <View>
                        {this.state.ranking.map((user, index) => (

                            <View key={user.id} style={{width: "100%", marginTop: 20, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "#fff", height: 60}}>
                                <View style={{width: "100%",flex: 1, flexDirection: 'row', zIndex: 99999999, color: "#fff", paddingBottom: 10}} >
                                    <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                        <Text style={{color: "#fff", fontSize: 15}}>#{index}</Text>
                                    </View>
                                    <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                        <Text style={{color: "#fff", fontSize: 15}}>{user.nome}</Text>
                                    </View>
                                    <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                        <Text style={{color: "#fff"}}>Pontos: {user.pontos}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}

                        <View style={{width: "100%", marginTop: 20, marginBottom: 10, height: 80}}>

                        </View>
                    </View>
                    </View>



                    }

                </View>
                    }
                    {(this.state.patrocinio.length === 0) &&
                    <Text style={{fontSize: 20,marginTop: 8, color: "#fff"}}>Não temos nenhum patrocinio no momento</Text>
                    }




            </ScrollView>
            </View>

        )

    }

    paticipar(){
        LoginService.participarPatrocinio({user_id: this.state.user_id, patrocinio_id: this.state.patrocinio.patrocinio_id}).then((response) => {

            this.setState({participando: 1})

            LoginService.userDataRanking({id:  this.state.user_id, patrocinio_id: this.state.patrocinio.patrocinio_id}).then((response) => {

                this.setState({user: response.data.user})
                this.setState({ranking: response.data.ranking})

            }).catch((e)=>{
                Alert.alert(
                    'ERRO',
                    e.toString(),

                );
            })
        }).catch((e)=>{
            Alert.alert(
                'ERRO',
                e.toString(),

            );
        })
    }
}
export default withNavigation(patrocinio)