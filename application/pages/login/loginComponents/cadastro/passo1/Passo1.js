import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput, Alert,

} from 'react-native';
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';
import LoginService from "../../../../../services/login/login-service";


export default class Passo1 extends React.Component {
    constructor(props) {
        super(props);


        let {height} = Dimensions.get('window');
        super(props);
        let user = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
        };

        let error = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
        };

        this.state = {
            user: user,
            error: error,
            hidePass: true,
            loading: false,
        }
    }

    render() {
        return (
            <View>
                {this.buscaCnpj()}
            </View>
        )
    }

    buscaCnpj() {
        return (
            <View style={styleCadastro.inputContainer}>


                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.nome !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.nome = text;
                            this.state.error.nome = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome Completo"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.nome}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.email !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.email = text;
                            this.state.error.email = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.email}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.telefone !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.telefone = text;
                            this.state.error.telefone = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Telefone"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.telefone}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.senha !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.state.user.senha = text;
                            this.state.error.senha = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.senha}</Text>
                </View>

                
                <View style={[styleCadastro.btnEspaco]}>
                    <TouchableOpacity onPress={() => {
                        this.cadastrar();
                    }}>

                      
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                <Text style={[style.textBtn, styleCadastro.text2]}>Cadastrar</Text>
                         
                            </View>

                    </TouchableOpacity>
                </View>


            </View>
        )
    }

    cadastrar() {

        this.setState({
            loading: true
        });

        LoginService.cadastrar(this.state.user).then((response) => {

            if (response.data !== false) {

                console.log(response.data)

                this.props.navigation.navigate('Main');
                this.setState({
                    loading: false
                });
            }

        }).catch(error => {

            this.setState({
                loading: false
            });

            Alert.alert(
                'Erro',
                'Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.' + error,
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );

        });
    }


}


