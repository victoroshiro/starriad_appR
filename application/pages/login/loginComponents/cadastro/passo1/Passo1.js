import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,

} from 'react-native';
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';


export default class Passo1 extends React.Component {
    constructor(props) {
        super(props);


        let {height} = Dimensions.get('window');
        super(props);
        let user = {
            user_nome: '',
            user_email: '',
            user_telefone: '',
            user_senha: '',
        };

        let error = {
            user_nome: '',
            user_email: '',
            user_telefone: '',
            user_senha: '',
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
                        style={[styleCadastro.inputCadastro, (this.state.error.user_nome !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_nome = text;
                            this.state.error.user_nome = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome Completo"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_nome}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_email !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_email = text;
                            this.state.error.user_email = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_email}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_telefone !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_telefone = text;
                            this.state.error.user_telefone = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Telefone"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_telefone}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_senha !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_senha = text;
                            this.state.error.user_senha = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_senha}</Text>
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

    }


}


