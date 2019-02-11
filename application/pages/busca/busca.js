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
    TextInput
} from 'react-native';
import {withNavigation} from "react-navigation";
import {styleLogin} from "../login/Login-styles";
import LoginService from "../../services/login/login-service";
import {styleCadastro} from "../login/loginComponents/cadastro/Cadastro-styles";

class busca extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {
            height: height,
            width: width,
            busca: [],
            textBusca: ""
        }



    }

    render() {

        return (
            <View>
                <View style={{
                    width: "100%",
                    height: 70}}>
                    <View style={{ top: 5}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Image resizeMode={'contain'} style={{imgSeta: {
                                    width: 22,
                                    height: 22,
                                    tintColor: '#000',
                                },}}
                                   source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/*<View style={{width: 20}}> </View>*/}
                    </View>

                </View>
                <View>
                    <View style={{
                        marginBottom: 5,
                        flex: 3,
                        flexDirection: "row",
                        width: "100%"
                    }}>
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                height: 45,
                                fontSize: 18,
                                borderRadius: 1,
                                paddingLeft: 10,
                                width: "80%"
                            }}
                            maxLength={30}
                            onChangeText={(text) => {
                                this.state.textBusca = text;
                                this.setState({textBusca: this.state.textBusca})
                            }}
                            underlineColorAndroid='#FFF'
                            placeholder="Busca"
                            placeholderTextColor="#a0a7ad"
                        />
                        <TouchableOpacity style={{width: "20%", alignItems: "center"}} onPress={()=>{this.pesquisar(this.state.textBusca)}}>
                            <Text style={{ color: "#ff", fontSize: 20, justifySelf: "center", height: 45}}>OK</Text>
                        </TouchableOpacity>

                    </View>
                    {/*<View style={{flex: 2, flexDirection: 'row', width: "100%",  marginBottom: 30, borderBottom: 5, borderBottomColor: "#000"}}>*/}
                        {/*<View style={{width: "50%", alignItems: "center", color: "#000"}}>*/}
                            {/*<Text style={{fontSize: 20}}>EMPRESA</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{width: "50%", alignItems: "center", color: "#000"}}>*/}
                            {/*<Text style={{fontSize: 20}}>VALOR</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    {this.state.busca.map(busca => (

                        <View key={busca.id} style={{width: "100%", marginTop: 20, marginBottom: 20, borderBottom: 20, borderBottomColor: "#000", height: 50}}>
                            <TouchableOpacity style={{width: "100%",flex: 1, flexDirection: 'row', zIndex: 99999999}} onPress={()=>{}}>
                                <View style={{width: "50%", alignItems: "center"}}>
                                    <Text>{busca.nome}</Text>
                                </View>
                                <View style={{width: "50%", alignItems: "center"}}>
                                    <Text>R${busca.valor},00</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>

            </View>
        )
    }

    pesquisar(text){
        LoginService.pesquisarVideo({text: text}).then((response) => {


        })
        }

}
export default withNavigation(busca)