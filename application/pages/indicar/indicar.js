import React from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    Alert,
    AsyncStorage,
    Modal,
    TextInput, ActivityIndicator
} from 'react-native';
import {withNavigation} from "react-navigation";
import LoginService from "../../services/login/login-service";

class indicar extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {
            height: height,
            width: width,
            numeroIndicacao: "",
            nomeIndicacao: "",
            user_id: null
        }

        this.checkLog()


    }

    checkLog = async () => {

        AsyncStorage.getItem('@starriad:userdata').then((value) => {

            let user_logged = JSON.parse(value)


            if(user_logged !== undefined && user_logged != null && user_logged !== '' && user_logged && user_logged.success !== false){

                this.setState({user_id: user_logged.id[0].id})

            }
        }).done();


    };

    render() {

        return (
            <View >
                <View style={{backgroundColor: "#225c72", height: "100%"}}>
                    <View style={{justifyContent: 'center',
                        flexDirection: 'row',
                        backgroundColor: "#002f49",
                        width: "100%",
                        height: 50}}>
                        <View style={{right: 100, top: 5, marginLeft: 5}}>
                            <TouchableOpacity onPress={() => {

                                this.props.navigation.goBack();

                            }}>
                                <Image resizeMode={'contain'} style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: '#fff',
                                    marginTop: 8
                                }}
                                       source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <Text style={{fontSize: 20,marginTop: 8, color: "#fff", textAlign: "center"}}>Indicação</Text>
                        </View>

                    </View>
                    <View>
                        <Text style={{textAlign: "center", color: "#fff"}}>Nos informe o contato da sua indicação</Text>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                height: 45,
                                fontSize: 18,
                                borderColor: "#000",
                                borderWidth: 1,
                                borderRadius: 1,
                                paddingLeft: 10,
                            }}
                            onChangeText={(text) => {
                                this.state.nomeIndicacao = text;
                                this.setState({nomeIndicacao: this.state.nomeIndicacao})
                            }}
                            underlineColorAndroid='#FFF'
                            placeholder="Nome"
                            placeholderTextColor="#a0a7ad"
                        />
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                height: 45,
                                fontSize: 18,
                                borderColor: "#000",
                                borderWidth: 1,
                                borderRadius: 1,
                                paddingLeft: 10,
                                marginTop: 20
                            }}
                            keyboardType = 'numeric'
                            onChangeText={(text) => {
                                this.state.numeroIndicacao = text;
                                this.setState({numeroIndicacao: this.state.numeroIndicacao})
                            }}
                            underlineColorAndroid='#FFF'
                            placeholder="Telefone"
                            placeholderTextColor="#a0a7ad"
                        />


                        { !this.state.loading &&
                        <TouchableOpacity style={{marginTop: 20, width: "100%",}} onPress={()=>{this.indicar()}}>
                            <Text style={{textAlign: "center", fontSize: 25, color: "#fff"}}>Enviar</Text>
                        </TouchableOpacity>
                        }

                        { this.state.loading &&
                        <ActivityIndicator size="large" color="#fff" />
                        }

                    </View>
                </View>
            </View>
        )
    }


    indicar(){
        this.setState({
            loading: true
        });

        LoginService.indicar({numero: this.state.numeroIndicacao, nome: this.state.nomeIndicacao, user_id: this.state.user_id}).then((response) => {

            this.setState({
                loading: false
            });


            this.setState({numeroIndicacao: ""})
            this.setState({nomeIndicacao: ""})


            Alert.alert(
                'Obrigado',
                "Agradecemos pela indicação e como recompensa estamos te dando 25 pontos na nossa plataforma",
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );

        }).catch(error => {

            this.setState({
                loading: false
            });

            Alert.alert(
                'Erro',
                error.toString() ,
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );

        });
    }

}
export default withNavigation(indicar)