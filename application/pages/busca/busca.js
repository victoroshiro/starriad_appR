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
import LoginService from "../../services/login/login-service";

class busca extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {
            height: height,
            width: width,
            busca: [

            ],
            textBusca: ""
        }



    }

    render() {

        return (
            <View style={{backgroundColor: "#225c72", height: "100%"}}>
                <View style={{
                    width: "100%",
                    backgroundColor: "#002f49",
                    height: 50
                }}>
                    <View style={{ top: 5}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Image resizeMode={'contain'} style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: '#fff',
                                    marginTop: 8,
                                    marginLeft: 5
                                }}
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
                        flex: 1,
                        flexDirection: "row",
                        width: "100%",
                        margin: 10
                    }}>
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                height: 45,
                                fontSize: 18,
                                borderRadius: 1,
                                paddingLeft: 10,
                                width: "80%",
                                zIndex: 1
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
                        <TouchableOpacity style={{width: "20%", alignItems: "center", zIndex: 9999999, marginTop: 9, height: 45}} onPress={()=>{this.pesquisar(this.state.textBusca)}}>
                            <View styles={{width: "100%", height: 45}}>
                                <Text style={{color: "#fff", fontSize: 20, justifySelf: "center"}}>OK</Text>
                            </View>
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
                    <ScrollView style={{marginTop: 65}}>
                    {this.state.busca.map(busca => (

                        <View key={busca.id} style={{width: "100%", marginTop: 15, borderBottomWidth: 1, borderBottomColor: "#fff", height: 60}}>
                            <TouchableOpacity style={{width: "100%",flex: 1, flexDirection: 'row', paddingBottom: 10}} onPress={()=>{
                                this.props.navigation.navigate('ProdutoProfile', {
                                    video_id: busca
                                });
                            }}>
                                <View style={{width: "30%", alignItems: "center", color: "#fff"}}>
                                    <Image style={{height: "100%", width: 50}} source={{uri: "http://ec2-18-231-116-5.sa-east-1.compute.amazonaws.com/StarriAD/uploads/" + busca.nome_thumbnail}} />
                                </View>
                                <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#fff"}}>{busca.nome}</Text>
                                </View>
                                <View style={{width: "30%", alignItems: "center", justifyContent: "center"}}>
                                    <Text style={{color: "#fff"}}>Valor: R${busca.valor_desconto}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                    </ScrollView>

                </View>

            </View>
        )
    }

    pesquisar(text){

        LoginService.pesquisarVideo({text: text}).then((response) => {

            this.setState({busca: response.data})

            // Alert.alert(
            //     'teste',
            //     JSON.stringify(response.data),
            //
            // );
        }).catch((e)=>{
            Alert.alert(
                'ERRO',
                e.toString(),

            );
        })
        }

}
export default withNavigation(busca)