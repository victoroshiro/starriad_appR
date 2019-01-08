import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert, ActivityIndicator, AsyncStorage} from 'react-native';
import {styleCadastro} from '../cadastro/Cadastro-styles'
import {style} from '../../../slides/SlideScreen-styles';
import LoginService from '../../../../services/login/login-service';

export default class LoginForm extends React.Component {

    constructor(props) {

        super(props);
        let user = {
            telefone: '',
            senha: '',
        };

        let error = {
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
            <View style={{marginTop: 50}}>

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
                        secureTextEntry={this.state.hidePass}
                        onChangeText={(text) => {
                            this.state.user.senha = text;
                            this.state.error.senha = '';
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        placeholderTextColor="#a0a7ad"
                    />

                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.senha}</Text>

                </View>

                <TouchableOpacity onPress={() => {
                    this.props.callback('RecuperarSenha');
                }}>
                    <View style={styleCadastro.inputContainer}>
                        <Text style={[styleCadastro.labelSenha]}>Esqueceu sua senha?</Text>
                    </View>
                </TouchableOpacity>


                <View style={{marginTop: 40}}>
                    <TouchableOpacity disabled={this.state.loading ? true : false} onPress={() => { this.doLogin() }}>
                        <View style={[style.btnPadrao, style.btnEntrar]}>

                            { !this.state.loading &&
                                <Text style={[style.textBtn, styleCadastro.text2]}>ENTRAR</Text>
                            }

                            { this.state.loading &&
                                <ActivityIndicator size="large" color="#fff" />
                            }

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop: 15}} onPress={() => {
                        this.props.callback('Passo1')
                    }}>
                        <View style={[style.btnPadrao, style.btnCadastrar]}>
                            <Text style={[style.textBtn, styleCadastro.text2]}>CADASTRAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

    doLogin() {

        // Verifica se os campos estão preenchidos
        if (this.state.user.telefone === '') {
            this.state.error.telefone = 'O campo e-mail deve ser preenchido';
            this.setState({
                user: this.state.user,
                error: this.state.error,
            });

        }else if (this.state.user.senha === '') {
            this.state.error.senha = 'O campo senha deve ser preenchido';
            this.setState({
                user: this.state.user,
                error: this.state.error,
            });

        }else{

            this.setState({
                loading: true
            });

            LoginService.signin(this.state.user).then((response) => {

                // Verifica o tipo de erro para colocar os avisos
                if (response.data.type_error === "telefone") {
                    this.state.error.telefone = 'Usuário ou e-mail não encontrado';
                    this.setState({
                        error: this.state.error
                    });

                } else if (response.data.type_error === "senha") {
                    this.state.error.senha = 'Usuário ou senha incorretos';
                    this.setState({
                        error: this.state.error
                    });

                }

                this.setState({
                    user: this.state.user,
                    error: this.state.error,
                    loading: false
                });

                if (response.data.success !== false) {

                    console.log(response.data)

                    this.props.callbackLogin('Main');
                    this.setState({
                        loading: false
                    });
                }
                else if(response.data.type_error !== 'conta_desativada') {

                    Alert.alert(
                        'Erro',
                        response.data.message,
                        [
                            {text: 'OK'},
                        ]
                    );
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
}