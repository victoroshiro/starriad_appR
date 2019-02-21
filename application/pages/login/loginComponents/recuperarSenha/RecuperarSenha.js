import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    ActivityIndicator,
} from 'react-native';
import {styleCadastro} from '../cadastro/Cadastro-styles'
import {style} from '../../../slides/SlideScreen-styles';
import LoginService from '../../../../services/login/login-service';

export default class RecuperarSenha extends React.Component {

    constructor(props) {

        super(props);
        let recover_model = {
            user_email: '',
            loading: false,
            type: '',
            type_opcoes: {
                email: false,
                tel: false
            },
            code: '',
            input: '',
            access: {
                access_id: '',
                access_secret: ''
            }
        };

        let error = {
            user_email: '',
            type: '',
            code: '',
            input: '',
            access: {
                access_id: '',
                access_secret: ''
            }
        };

        this.state = {
            recover_model: recover_model,
            error: error,
            recover_options: [],
            validEmailRecover: false,
            recuperacaoSolicitada: false,
            insertNewPassword: false,
            recovery: {
                senhasDiferentes: ''
            },
            recover_error: false,
            verifyCod: false,
            time: null,
            timerCount: 0,
            hidePass: true
        }
    }

    render(){
        return (
            <View style={{marginTop: 50}}>

                <View style={[styleCadastro.labelMsg, {marginBottom: 20}]}>
                    <Text style={styleCadastro.textMsg}>
                        Esqueceu sua senha? Insira seu email ou número de telefone e, em seguida, escolha onde deseja receber o código para recuperação
                    </Text>
                </View>

                <View style={styleCadastro.inputContainer}>

                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.input !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.recover_model.input = text;
                            this.verifyType(this.state.recover_model);
                            this.state.error.input = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.input}</Text>

                </View>

                {this.renderValidEmailRecover()}
                {this.renderRecuperacaoSolicitada()}
                {this.renderInsertNewPassword()}

                <View style={{marginTop: 15}}>
                    <TouchableOpacity  disabled={this.state.recover_model.loading ? true : false} onPress={() => {

                        this.state.insertNewPassword ? this.recoverPassword() :
                            this.state.recuperacaoSolicitada ? this.checkCode() :
                                this.state.validEmailRecover ? this.startRecover() :
                                    this.checkUserRecover()
                    }}>
                        <View style={[style.btnPadrao, style.btnEntrar]}>

                            { !this.state.recover_model.loading &&
                                <Text style={[style.textBtn, styleCadastro.text2]}>{this.state.recuperacaoSolicitada ? 'Usar código' : 'Recuperar senha'}</Text>
                            }

                            { this.state.recover_model.loading &&
                                <ActivityIndicator size="large" color="#fff" />
                            }

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // Renderiza as opções para envio do codigo no e-mail e mensagem via celular
    renderValidEmailRecover(){
        if(this.state.validEmailRecover){
            if(this.state.recover_options.length > 0){
                return(
                    <View style={{marginTop: 20}}>

                        <View style={[styleCadastro.labelMsg, {marginBottom: 20}]}>
                            <Text style={styleCadastro.textMsg}>
                                Escolha uma das opções abaixo para receber a confirmação
                                de senha.
                            </Text>
                        </View>

                        {this.state.recover_options.map((r_opt, index) => {

                            return(

                                <View key={index}>

                                    {r_opt.type === 'email' &&
                                    <View>
                                        <Text style={{color: '#fff', marginRight: 5, fontSize: 15, fontWeight: 'bold',}}>
                                            Recuperação por email:
                                        </Text>

                                        <TouchableOpacity onPress={() => {
                                            this.state.recover_model.type_opcoes.email = true;
                                            this.state.recover_model.type_opcoes.tel = false;
                                            this.state.recover_model.type = 'email';
                                            this.setState({recover_model: this.state.recover_model});
                                        }}
                                            style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
                                            <CheckBox actived={this.state.recover_model.type_opcoes.email} color={'#0099df'}/>

                                            <Text style={{color: '#fff', marginLeft: 5, fontSize: 15, fontWeight: 'bold',}}>
                                                {r_opt.label}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    }

                                    {r_opt.type === 'phone' &&
                                    <View style={{marginTop: 20}}>
                                        <Text style={{color: '#fff', marginRight: 5, fontSize: 15, fontWeight: 'bold',}}>
                                            Recuperação por SMS:
                                        </Text>

                                        <TouchableOpacity onPress={() => {
                                            this.state.recover_model.type_opcoes.email = false;
                                            this.state.recover_model.type_opcoes.tel = true;
                                            this.state.recover_model.type = 'phone';
                                            this.setState({recover_model: this.state.recover_model});
                                        }}
                                        style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
                                            <CheckBox actived={this.state.recover_model.type_opcoes.tel} color={'#0099df'}/>

                                            <Text style={{color: '#fff', marginLeft: 5, fontSize: 15, fontWeight: 'bold',}}>
                                                {r_opt.label}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    }

                                </View>
                            )

                        })}
                    </View>
                )
            }
        }
    }

    // Renderiza o campo para digitar o codigo enviado por e-mail ou SMS
    renderRecuperacaoSolicitada(){
        if(this.state.recuperacaoSolicitada){
            return(
                <View style={{marginTop: 20}}>
                    <View style={[styleCadastro.labelMsg, {marginBottom: 20}]}>
                        <Text style={styleCadastro.textMsg}>
                            Enviamos um código para a opção escolhida, você pode receber em até: {this.state.time} segundos.
                        </Text>
                    </View>

                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.code !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.recover_model.code = text;
                            this.state.error.code = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Insira o código"
                        placeholderTextColor="#a0a7ad"
                    />

                    { this.state.time === 0 && this.state.timerCount <= 3 ?
                        <View>
                            <View style={[styleCadastro.labelMsg, {marginBottom: 20}]}>
                                <Text style={styleCadastro.textMsg}>
                                    Ainda não recebeu o código?
                                </Text>
                            </View>

                            <TouchableOpacity onPress={() => {
                                this.startRecover()
                            }}>
                                <Text style={styleCadastro.textMsg}>
                                    Reenviar Código
                                </Text>
                            </TouchableOpacity>

                            { this.state.timerCount > 3 && this.state.time === 0 &&
                                <Text style={styleCadastro.textMsg}>
                                    Se você ainda não recebeu nenhum código, entre em contato com o suporte.
                                </Text>
                            }
                        </View>
                        :
                        null
                    }
                </View>
            )
        }
    }

    // Renderiza o campo para digitar uma nova senha
    renderInsertNewPassword(){
        if(this.state.insertNewPassword){
            return(
                <View>
                    <View style={[styleCadastro.labelMsg, {marginTop: 20}]}>
                        <Text style={styleCadastro.textMsg}>
                            Digite uma nova senha
                        </Text>
                    </View>

                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.new_password !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        secureTextEntry={this.state.hidePass}
                        onChangeText={(text) => {
                            this.state.recover_model.new_password = text;
                            this.state.error.new_password = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Confirme Senha"
                        placeholderTextColor="#a0a7ad"
                    />

                    <View style={[styleCadastro.labelMsg, {marginTop: 20}]}>
                        <Text style={styleCadastro.textMsg}>
                            Confirme a nova senha
                        </Text>
                    </View>

                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.new_password_confirm !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        secureTextEntry={this.state.hidePass}
                        onChangeText={(text) => {
                            this.state.recover_model.new_password_confirm = text;
                            this.state.error.new_password_confirm = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Confirme Nova Senha"
                        placeholderTextColor="#a0a7ad"
                    />

                    <Text style={styleCadastro.textMsg}>
                        {this.state.recovery.senhasDiferentes}
                    </Text>
                </View>
            )
        }
    }

    // Faz a verificação se o dado digitado existe no banco
    checkUserRecover(){

        if(this.state.recover_model.input === ''){
            this.state.error.input = '* Campo obrigatório';

            this.setState({
                error: this.state.error
            });
        }else{

            this.state.recover_model.loading = true;
            this.setState({
                recover_model: this.state.recover_model
            });

            LoginService.checkUserRecoverService(this.state.recover_model).then((response) => {

                this.state.recover_model.loading = false;
                this.state.recover_model.telefone = response.data.data.telefone;
                this.setState({
                    recover_model: this.state.recover_model
                });
                console.log(response);

                if (response.data.success) {
                    this.state.validEmailRecover = true;
                    this.state.recover_error = false;
                    this.state.recover_options = response.data.recover_options;
                    this.setState({
                        validEmailRecover: this.state.validEmailRecover,
                        recover_error: this.state.recover_error,
                        recover_options: this.state.recover_options
                    });
                }else{
                    this.state.recover_error = response.data;
                    this.state.error.input = this.state.recover_error.message;

                    this.setState({
                        recover_error: this.state.recover_error,
                        error: this.state.error
                    });
                }
            }, (e) => {
                this.state.recover_model.loading = false;
                this.setState({
                    recover_model: this.state.recover_model
                });
            });
        }
    };

    // Inicia o processo de recuperação de senha. Envia o código de verificação para o e-mail ou por SMS
    startRecover(){
        this.recoverTimer();
        this.state.recuperacaoSolicitada = false;
        this.setState({
            recuperacaoSolicitada: this.state.recuperacaoSolicitada
        });

        if (this.state.recover_model.type) {

            this.state.recover_model.loading = true;
            this.setState({
                recover_model: this.state.recover_model
            });

            LoginService.startRecoverService(this.state.recover_model).then((response) => {

                if (response.data.success) {
                    this.state.verifyCod = true;
                    this.state.recover_model.loading = false;
                    this.state.recuperacaoSolicitada = true;
                    this.state.recover_options = [];
                    this.setState({
                        verifyCod: this.state.verifyCod,
                        recover_model: this.state.recover_model,
                        recuperacaoSolicitada: this.state.recuperacaoSolicitada,
                        recover_options: this.state.recover_options
                    });

                }else{
                    this.state.recover_error = response.data;
                    this.state.recover_model.loading = false;
                    this.setState({
                        recover_error: this.state.recover_error,
                        recover_model: this.state.recover_model,
                    });

                    console.log(this.state.recover_error);
                }
            }, (e) => {
                this.state.recover_model.loading = false;
                this.setState({
                    recover_model: this.state.recover_model
                });
            });
        }
    };

    // Função responsável em verificar se o usuário digitou um email ou telefone
    verifyType(recover_model) {
        let input = this.state.recover_model.input;
        let regex = /^[0-9]*$/;
        recover_model.user_email = '';
        recover_model.user_tel = '';

        if(recover_model.input.match(regex)){
            this.state.recover_model.type = 'phone';
            recover_model.user_tel = input;
        }else{
            this.state.recover_model.type = 'email';
            recover_model.user_email = input;
        }

        this.setState({
           recover_model: this.state.recover_model
        });
    }

    // Função responsável em carregar o temporizador de recuperação de senha
    recoverTimer() {
        let seconds = 120;
        if(this.state.timerCount <= 3){
            this.state.timerCount++;
            this.setState({
                timerCount: this.state.timerCount
            });

            let interval = setInterval(() => {
                seconds --;
                if(seconds <= 0){
                    clearInterval(interval);
                }

                this.state.time = seconds;
                this.setState({
                    time: this.state.time
                });
            }, 1000)
        }
    }

    // Função responsavel por verificar se o cordigo digitado é igual ao que foi enviado ao e-mail
    checkCode() {

        this.state.recover_model.loading = true;
        this.setState({
            recover_model: this.state.recover_model
        });

        LoginService.checkCodeService(this.state.recover_model).then((response) => {
            this.state.recover_model.loading = false;
            this.setState({
                recover_model: this.state.recover_model
            });

            if (response.data.success) {
                this.state.insertNewPassword = true;
                this.state.recuperacaoSolicitada = false;
                this.state.recover_model.access = response.data.access;

                this.setState({
                    insertNewPassword: this.state.insertNewPassword,
                    recuperacaoSolicitada: this.state.recuperacaoSolicitada,
                    recover_model: this.state.recover_model
                });
            } else {
                Alert.alert(
                    response.data.message,
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                );
            }
        }, (e) => {
            this.state.recover_model.loading = false;
            this.setState({
                recover_model: this.state.recover_model
            });
        });
    };

    // Executa a recuperação de senha
    recoverPassword() {

        if (this.state.recover_model.new_password !== this.state.recover_model.new_password_confirm) {
            this.state.recovery.senhasDiferentes = 'Senhas diferentes';
            this.setState({
                recovery: this.state.recovery
            });

        } else {
            this.state.recover_model.loading = true;
            this.setState({
                recover_model: this.state.recover_model
            });

            LoginService.recoverPasswordService(this.state.recover_model).then((response) => {
                this.state.recover_model.loading = false;
                this.setState({
                    recover_model: this.state.recover_model
                });
                if (response.data.success) {
                    console.log('AQUI: ', response);

                    Alert.alert(
                        'Sucesso',
                        'Senha recuperada com sucesso.',
                        [
                            {text: 'OK', onPress: () => {
                                    this.props.callback('Login');
                                }},
                        ],
                        {cancelable: false}
                    );
                } else {
                    console.log('ALA: ', response);


                    Alert.alert(
                        'Aviso',
                        response.data.message,
                        [
                            {text: 'OK'},
                        ],
                        {cancelable: false}
                    );
                }
            }, (e) => {
                this.state.recover_model.loading = false;
                this.setState({
                    recover_model: this.state.recover_model
                });
            });
        }
    };
}