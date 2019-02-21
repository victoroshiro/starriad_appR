import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Alert,
    AsyncStorage, ActivityIndicator
} from 'react-native';
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';
import LoginService from "../../../../../services/login/login-service";
import GlobalService from "../../../../../services/global/global-service";

export default class Passo2 extends React.Component {
    constructor(props) {

        super(props);
        let {height} = Dimensions.get('window');

        this.state = {
            endereco: this.props.params.endereco,
            empresa: this.props.params.empresa,
            user: this.props.params.user,
            error: this.props.params.error,
            passConfirm: false,
            load: {
                cnpj: false,
                captcha: false,
                cadastro: false
            },
        }
    }

    render() {
        return (
            <View>
                {this.cadastro()}
            </View>
        )
    }

    cadastro() {
        return (

            <View>

                <View style={{width: '100%', marginBottom: 20}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
                        Agora complete o seu cadastro. É rapidinho!
                    </Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_name !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_name = text;
                            this.state.error.user_name = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome de Usuário"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_name}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_full_name !== '' ? styleCadastro.inputError : null)]}
                        maxLength={50}
                        onChangeText={(text) => {
                            this.state.user.user_full_name = text;
                            this.state.error.user_full_name = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome Completo"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_full_name}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.cpf !== '' ? styleCadastro.inputError : null)]}
                        maxLength={14}
                        keyboardType='numeric'
                        onChangeText={(text) => {
                            this.formatCPF(text);
                            this.state.error.cpf = '';
                            this.setState({error: this.state.error});
                        }}
                        defaultValue={this.state.user.cpf.toString()}
                        underlineColorAndroid='#FFF'
                        placeholder="CPF"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.cpf}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.password !== '' ? styleCadastro.inputError : null), (this.state.user.password !== '' ? styleCadastro.inputValidate : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.password = text;
                            this.state.error.password = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        secureTextEntry={true}
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.password}</Text>
                </View>


                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.confirmPassword !== '' ? styleCadastro.inputError : null), (this.state.passConfirm ? styleCadastro.inputValidate : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.confirmPassword = text;
                            this.validatePassoword()
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Confirmar Senha"
                        secureTextEntry={true}
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.confirmPassword}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.email !== '' ? styleCadastro.inputError : null)]}
                        maxLength={50}
                        onChangeText={(text) => {
                            this.state.user.email = text;
                            this.state.error.email = '';
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.email}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.tel !== '' ? styleCadastro.inputError : null)]}
                        maxLength={15}
                        keyboardType='numeric'
                        onChangeText={(text) => {
                            this.formatTel(text);
                            this.state.error.tel = '';
                            this.setState({error: this.state.error});
                        }}
                        defaultValue={this.state.user.tel.toString()}
                        underlineColorAndroid='#FFF'
                        placeholder="Telefone"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.tel}</Text>
                </View>
                <View style={[styleCadastro.btnEspaco, {marginBottom: 50}]}>
                    <TouchableOpacity  disabled={this.state.load.cadastro ? true : false} onPress={() => {
                        this.sendCadastro()
                    }}>

                        { !this.state.load.cadastro &&
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                <Text style={[style.textBtn, styleCadastro.text2]}>Criar Conta</Text>
                            </View>
                        }

                        { this.state.load.cadastro &&
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                    <ActivityIndicator size="large" color="#fff" />
                            </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    formatCPF(valor) {
        //necessario pois se apagar sem nada da erro
        valor = valor.replace(/\D/g, "");
        //Coloca ponto entre o segundo e o terceiro dígitos
        valor = valor.replace(/^(\d{3})(\d)/, "$1.$2");
        //Coloca ponto entre o quinto e o sexto dígitos
        valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        //Coloca uma barra entre o oitavo e o nono dígitos
        valor = valor.replace(/\.(\d{3})(\d)/, ".$1-$2");
        //Coloca um hífen depois do bloco de quatro dígitos
        this.state.user.cpf = valor;
        this.setState({user: this.state.user})
    }

    formatTel(valor) {
        if(this.state.user.tel.length > 14){
            // Necessario pois se apagar sem nada da erro
            valor = valor.replace(/\D/g, "");
            // Coloca parênteses em volta dos dois primeiros dígitos
            valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
            // Coloca hífen entre o quinto e o sexto dígitos
            valor = valor.replace(/(\d)(\d{5})$/,"$1-$2");
        }else{
            // Necessario pois se apagar sem nada da erro
            valor = valor.replace(/\D/g, "");
            // Coloca parênteses em volta dos dois primeiros dígitos
            valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2");
            // Coloca hífen entre o quarto e o quinto dígitos
            valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");
        }
        this.state.user.tel = valor;
        this.setState({user: this.state.user})
    }

    sendCadastro(){
        this.state.load.cadastro = true;
        this.setState({
            load: this.state.load
        });

        let validate = true;

        if (this.state.user.user_name === '') {
            validate = false;
            this.state.error.user_name = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else if (this.state.user.user_full_name === '') {
            validate = false;
            this.state.error.user_full_name = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else if (this.state.user.cpf === '') {
            validate = false;
            this.state.error.cpf = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else if (this.state.user.password === '') {
            validate = false;
            this.state.error.password = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else if (this.state.user.confirmPassword === '') {
            validate = false;
            this.state.error.confirmPassword = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else if (this.state.user.email === '') {
            validate = false;
            this.state.error.email = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else if (this.state.user.tel === '') {
            validate = false;
            this.state.error.tel = '* Campo Obrigatório';
            this.setState({user: this.state.user, error: this.state.error});
        }

        else {

            if (!GlobalService.cpfValidator(this.state.user.cpf)) {
                this.state.error.cpf = '* CPF inválido';
                this.setState({user: this.state.user, error: this.state.error});
            }
            else{

                let send = {
                    user: this.state.user,
                    empresa: this.state.empresa,
                    endereco: this.state.endereco,
                    favoritos: [],
                    user_login: this.state.user.user_name
                };

                LoginService.cadastrar(send).then((res) => {
                    let response = res.data;

                    if (response.success) {
                        let body = {
                            user_pass: response.dados.user_pass_original,
                            user_login: response.dados.user_email,
                            success_cadastro: true
                        };

                        LoginService.signin(body).then((response_login) => {
                            response_login = response_login.data;

                            if (response_login.success) {
                                this.state.load.cadastro = false;

                                this.setState({
                                    load: this.state.load
                                });



                                this.props.callbackLogin('Explorer');
                            } else {

                                Alert.alert(
                                    response_login.message,
                                    [
                                        {text: 'OK'},
                                    ],
                                    {cancelable: false}
                                );

                            }

                        }, (error) => {
                            Alert.alert(
                                'Conexão Perdida',
                                'Ocorreu um erro! :( \n Verifique a sua conexão com a internet e tente novamente ',
                                [
                                    {text: 'OK'},
                                ],
                                {cancelable: false}
                            );
                            this.state.load.cadastro = false;
                            this.setState({
                                load: this.state.load
                            });
                        });
                    } else {

                        this.state.load.cadastro = false;
                        this.setState({
                            load: this.state.load
                        });

                        Alert.alert(
                            'Ocorreu um erro',
                            response.msg,
                            [
                                {text: 'OK'},
                            ],
                            {cancelable: false}
                        );
                    }
                }, (error) => {
                    Alert.alert(
                        'Conexão Perdida',
                        'Ocorreu um erro! :( \n Verifique a sua conexão com a internet e tente novamente ',
                        [
                            {text: 'OK'},
                        ],
                        {cancelable: false}
                    );

                    this.state.load.cadastro = false;
                    this.setState({
                        load: this.state.load
                    });
                });
            }
        }
    };

    // Verifica se as senhas estão iguais
    validatePassoword() {
        setTimeout(() => {
            if (this.state.user.confirmPassword !== this.state.user.password) {
                this.state.error.confirmPassword = 'Senhas não conferem';
                this.state.passConfirm = false;
            } else {
                this.state.passConfirm = true;
                this.state.error.confirmPassword = '';
            }
            this.setState({passConfirm: this.state.passConfirm, error: this.state.error});
        }, 2000)
    }
}


