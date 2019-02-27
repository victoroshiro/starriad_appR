import React from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native';
import {styleLogin} from './Login-styles';
import LoginForm from "./loginComponents/loginForm/LoginForm";
import Passo1 from "./loginComponents/cadastro/passo1/Passo1";
import Passo2 from "./loginComponents/cadastro/passo2/Passo2";
import RecuperarSenha from "./loginComponents/recuperarSenha/RecuperarSenha";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        let {height, width} = Dimensions.get('window');
        this.state = {
            screenWidth: width,
            screenHeight: height,
            page: (this.props.navigation.state.params !== undefined ? this.props.navigation.state.params : 'Login' ),
            params: '',

        };

        this.checkLog()

    }

    checkLog = async () => {

        AsyncStorage.getItem('@starriad:userdata').then((value) => {

            let user_logged = JSON.parse(value)

            if(user_logged !== undefined && user_logged != null && user_logged !== '' && user_logged && user_logged.success !== false){
                // this.props.callbackLogin('Main');
                    this.props.navigation.navigate('Main');
            }
        }).done();


    };

    render() {
        return (
            <View>
                <View style={[styleLogin.headerNotificationBar]}/>

                <View resizeMode={'cover'}
                                 style={[{width: this.state.screenWidth}, {height: this.state.screenHeight}, styleLogin.container]}>

                    {/*<LinearGradient style={styleLogin.header}*/}
                                    {/*colors={['#004591', 'rgba(0, 0, 0, 0)']}*/}
                                    {/*locations={[0.1, 0.9]}>*/}
                    {/*</LinearGradient>*/}

                    {/*<LinearGradient colors={['rgba(0, 0, 0, 0)', '#004591',]}*/}
                                    {/*locations={[0.1, 0.9]}*/}
                                    {/*style={styleLogin.footer}>*/}
                    {/*</LinearGradient>*/}
                </View>

                <KeyboardAvoidingView behavior="padding">
                    <ScrollView>

                <View style={styleLogin.headerContainer}>
                    <View style={styleLogin.setaContainer}>
                        <TouchableOpacity onPress={() => {
                            this.back()
                        }}>
                            <Image resizeMode={'contain'} style={styleLogin.imgSeta}
                                             source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image resizeMode={'contain'} style={styleLogin.imgLogo}
                                         source={require('../../assets/imgs/png/logo/logo.png')}/>
                    </View>

                </View>



                    <View style={styleLogin.bodyContainer}>
                        <View style={styleLogin.body}>
                            {this.selectorPage(this.state.page)}
                        </View>
                    </View>

                </ScrollView>
                    </KeyboardAvoidingView>

            </View>
        )

    }


    getResponse(page, params = '') {
        this.setState({page: page, params: params})
    }

    doLogin(page) {
        this.props.navigation.navigate(page)
    }


    back() {
        if (this.state.page === 'Login') {

            this.props.navigation.navigate('SlideScreen')
        } else if (this.state.page === 'Passo1') {
            this.setState({page: 'Login'})
        } else if (this.state.page === 'Passo2') {
            this.setState({page: 'Passo1'})
        }else if (this.state.page === 'RecuperarSenha') {
            this.setState({page: 'Login'})
        }

    }

    selectorPage(page) {
        switch (page) {
            case 'Login':
                return (<LoginForm navigation={this.props.navigation} callbackLogin={this.doLogin.bind(this)} callback={this.getResponse.bind(this)}/>);
                break;

            case 'Passo1':
                return (<Passo1 callback={this.getResponse.bind(this)}/>);
                break;

            case 'Passo2':
                return (<Passo2 callback={this.getResponse.bind(this)} callbackLogin={this.doLogin.bind(this)} params={this.state.params}/>);
                break;
            //
            // case 'RecuperarSenha':
            //     return (<RecuperarSenha callback={this.getResponse.bind(this)} callbackLogin={this.doLogin.bind(this)} params={this.state.params} />);
            //     break;
        }
    }
}


