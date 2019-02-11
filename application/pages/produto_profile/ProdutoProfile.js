import React from 'react';
import {View, Dimensions, TouchableOpacity, Text, ScrollView, Image, Alert, AsyncStorage} from 'react-native';
import {withNavigation} from "react-navigation";
import VideoPlayer from 'react-native-video-controls';
import {styleLogin} from "../login/Login-styles";
import LoginService from "../../services/login/login-service";

class ProdutoProfile extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {
            video_id: this.props.navigation.getParam("video_id"),
            height: height,
            width: width,
            videoEnd: false,
            pause: false,
            user_id: false
        }

        console.log(this.state.video_id)

        this.checkLog()

    }

    checkLog = async () => {

        AsyncStorage.getItem('@starriad:userdata').then((value) => {

            let user_logged = JSON.parse(value)

            console.log(user_logged)

            if(user_logged !== undefined && user_logged != null && user_logged !== '' && user_logged && user_logged.success !== false){

                this.setState({user_id: user_logged.id[0].id})

            }
        }).done();


    };


    render(){

        var style = {
            textResposta: {
                color: "#000",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#000"

            },
            textPergunta: {
                color: "#000",
                padding: 5,
                fontSize: 30,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                textAlign: "center"
            },

            textDesc: {
                color: "#fff",
                padding: 5,
                fontSize: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#fff"
            },
            textCupom: {
                color: "#fff",
                padding: 5,
                fontSize: 15,

            },
            textTitulo: {
                color: "#fff",
                padding: 5,
                fontSize: 40,

            }
        }



        return(
            <ScrollView style={{width:"100%", backgroundColor: "#000", height: "100%"}}>
                <View style={styleLogin.headerContainer}>

                <View style={styleLogin.setaContainer}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                        <Image resizeMode={'contain'} style={{
                                width: 22,
                                height: 22,
                                tintColor: '#fff'
                            }}
                               source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                    </TouchableOpacity>
                </View>
                <View><Text style={style.textTitulo}>{this.state.video_id.titulo} </Text></View>
                </View>
                <View style={{width: "100%", height: this.state.height / 2}}>
                    <VideoPlayer source={{uri: "http://ec2-18-231-116-5.sa-east-1.compute.amazonaws.com/StarriAD/uploads/" + this.state.video_id.nome_arquivo}}
                                 ref={ref => this.videoPlayer = ref}
                           onEnd={this.videoEnd}
                           resizeMode={"contain"}
                                 disableSeekbar={true}
                                 disableBack={true}
                           repeat={false}
                           style={{
                               aspectRatio: 1,
                               width: "100%",
                               height: "100%",
                               alignSelf: "center",
                               }}

                    />
                </View>
                {this.state.videoEnd &&
                <View style={{width: "100%", backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20}} >
                    <View style={{textAlign: "center"}}><Text style={style.textPergunta}>{this.state.video_id.pergunta}</Text></View>
                    <TouchableOpacity onPress={()=>{this.checkResposta('resposta1')}}>
                        <Text style={style.textResposta}>{this.state.video_id.resposta1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{this.checkResposta('resposta2')}}>
                        <Text style={style.textResposta}>{this.state.video_id.resposta2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{this.checkResposta('resposta3')}}>
                        <Text style={style.textResposta}>{this.state.video_id.resposta3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{this.checkResposta('resposta4')}}>
                        <Text style={style.textResposta}>{this.state.video_id.resposta4}</Text>
                    </TouchableOpacity>
                </View>
                }

                {this.state.videoEnd == false &&
                <View style={{width: "100%"}} >
                    <View><Text style={style.textTitulo}>Descrição</Text></View>
                    <View><Text style={style.textDesc}>{this.state.video_id.descricao}</Text></View>
                    <View><Text style={style.textCupom}>Valor do Cupom: R${this.state.video_id.valor_desconto}</Text></View>
                </View>
                }
            </ScrollView>
        );
    }

    onBuffer(){
        console.log("teste")
    }
    videoError = () =>{
        console.log("teste2")
    }
    videoEnd = ()=>{
        this.setState({videoEnd: true})
    }

    checkResposta= (resposta)=>{

        if(this.state.video_id.resposta_correta === resposta){

            let dataCupom = {
                valor: this.state.video_id.valor_desconto,
                empresa_id: parseInt(this.state.video_id.empresa_id),
                status: 1,
                user_id: parseInt(this.state.user_id),
                id: parseInt(this.state.video_id.id),
                num_cupons: parseInt(this.state.video_id.num_cupons)

            }

            LoginService.createCupom(dataCupom).then(() => {

                Alert.alert(
                    'Resposta correta',
                    'Parabens, você ganhou seu cupom',
                    [
                        {text: 'OK',  onPress: () => {this.props.navigation.goBack();}},
                    ],
                    {cancelable: false}
                );

            }).catch(error => {

                this.setState({
                    loading: false
                });

                console.log(error)

                Alert.alert(
                    'Erro',
                    'Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.' ,
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                );

            });



        }else{

            Alert.alert(
                'Resposta Errada',
                'Por favor, tente novamente',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );

            this.setState({videoEnd: false})
            this.videoPlayer.player.ref.seek(0)

        }
    }

};


export default withNavigation(ProdutoProfile)