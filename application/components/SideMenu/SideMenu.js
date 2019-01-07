import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions,
    Animated,
    AsyncStorage, Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import {style} from "./side-menu-styles"
import Minha_Conta_Sub_Menu from "./Minha_Conta_Sub_Menu/MinhaContaSubMenu"
import LoginService from "../../services/login/login-service";

class SideMenu extends React.Component {

    /** Função construtora do componente */
    constructor(props) {
        super(props);

        this.toCarrinho = this.toCarrinho.bind(this);
        this.signout = this.signout.bind(this);


        /* retorna as dimensões do aparelho/device */
        let { height, width } = Dimensions.get('window');
        
        /* state */
        this.state = {
            sub_menu_1: false,
            sub_menu_2: false,
            sub_menu_3: false,

            screen_height: height,
            screen_width: width,

            /* progresso de animação do componente */
            animation_progress: new Animated.Value( 0 ),
            elements_animation_progress: new Animated.Value( 0 ),


            /* Definição do transform do componente ( usado para a animação ) */
            transform_definition: width,
            
            /* define se o menu está aberto ou fechado */
            opened: props.opened,
            
        };

    }/* End of constructor */

    /** Executada quando o componente é montado */
    componentDidMount(){
        Dimensions.addEventListener('change', (( dimensions ) => {
            this.setState({ screen_height: dimensions.window.height });
            this.setState({ screen_width: dimensions.window.width });
            this.setState({ transform_definition: dimensions.window.width });
        }));
    }

    /** Função utilizada sempre que o componente receber alguma alteração em suas propriedades */
    componentWillReceiveProps( props ){
        
        this.setState({ opened: props.opened });
        
        if( props.opened ){

            Animated.stagger(100, [

                Animated.spring( this.state.animation_progress, {
                    toValue: 100,
                    bounciness: 7,
                    velocity: 400
                }),

                Animated.spring( this.state.elements_animation_progress, {
                    toValue: 100,
                    bounciness: 3,
                    duration: 200
                })

            ]).start();

            this.setState ({ transform_definition: this.state.animation_progress.interpolate({
                    inputRange: [ 0, 100 ],
                    outputRange: [ this.state.screen_width, 0 ]
                })
            });

        }

    }

    /*
    * Função utilizada para fechar o menu.
    * Serve como Trigger para executar a função em props de "onclose"
    */
    _closeMenu = (() => {
        
        /* Anima o sideMenu para sair, animação timing */
        Animated.timing(this.state.animation_progress, {
            toValue: 0,
            duration: 150
        }).start( (() => {
            this.props.onclose();
            this.state.elements_animation_progress.setValue( 0 );
        }));

        /* Seta o state de transition do content do sideMenu */
        this.setState ({ transform_definition: this.state.animation_progress.interpolate({
                inputRange: [ 0, 100 ],
                outputRange: [ ( this.state.screen_width * -1 ), 0  ]
            })
        });/* Fim da definição do state de transform */

    });


    /** Função utilizada para esconder os submenus */
    hideSubmenu = ((submenu) => {
        switch (submenu) {
            case 1:
                this.setState({sub_menu_1: !this.state.sub_menu_1});
                break;
            case 2:
                this.setState({sub_menu_2: !this.state.sub_menu_2});
                break;
            case 3:
                this.setState({sub_menu_3: !this.state.sub_menu_3});
                break;
        }
    })/* end of hideSubmenu */

    toCarrinho() {
        this.props.navigation.navigate('Carrinho');
    }

    signout(){
        this.props.navigation.navigate('Login');
    }

    /** Função para renderizar o componente */
    render() {
        return (

            <Animated.View style={[
                style.container,
                { transform: [{ translateX: this.state.transform_definition }], height: this.state.screen_height }
            ]}>

                <ScrollView style={style.wraper_menu}>
                    <View style={style.header_menu}>
                        <Animated.View style={[
                            style.header_menu_left,
                            {
                                transform: [{
                                    translateX: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ -100, 0 ] })
                                }]
                            }
                        ]}>
                            <TouchableOpacity onPress={this.toCarrinho}>
                                <ImageBackground style={style.header_menu_left_image}
                                                 source={require('../../assets/imgs/png/icons/bag.png')}>
                                    <View style={style.header_menu_left_status}>
                                        <Text style={style.text_status}>8</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <Text style={style.header_menu_left_text}>Carrinho</Text>

                        </Animated.View>

                        <Animated.View style={[
                            style.header_menu_center,
                            {
                                transform: [{
                                    scale: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ 0, 1 ] })
                                }],
                                opacity: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ 0, 1 ] })

                            }
                        ]}>
                            <Image style={style.header_menu_center_image}
                                   source={{uri: 'https://malaabes.com/image/data/Logos/ck-logo.png'}}/>
                        </Animated.View>

                        <Animated.View style={[
                            style.header_menu_right,
                            {
                                transform: [{
                                    translateX: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ 100, 0 ] })
                                }]
                            }
                        ]}>
                            <TouchableOpacity  onPress={ this._closeMenu }>
                                <Image style={[ style.header_menu_left_image ]}
                                       source={require('../../assets/imgs/png/icons/left-arrow.png')}/>
                            </TouchableOpacity>
                            <Text style={style.text_right}>Voltar</Text>
                        </Animated.View>
                    </View>
                    <Animated.View style={[
                        style.header_name,
                        { opacity: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ 0, 1 ] }) }
                    ]}>
                        <Text style={style.header_name_text}>Unique Chic</Text>
                    </Animated.View>

                    <Animated.View style={[
                        {
                            opacity: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ 0, 1 ] }),
                            transform: [{
                                translateY: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ 25, 0 ] })
                            }]
                        }
                    ]}>

                        <View style={[ style.body_menu_content ]}>
                            <TouchableOpacity style={style.body_menu} onPress={() => this.hideSubmenu(1)}>
                                <View style={style.body_control_icon}>
                                    <Image style={style.body_menu_icon}
                                           source={require('../../assets/imgs/png/icons/profile.png')}/>
                                    <Text style={style.body_menu_text}>MINHA CONTA</Text>
                                </View>
                                <Image style={style.body_menu_down}
                                       source={require('../../assets/imgs/png/arrow-down-white.png')}/>
                            </TouchableOpacity>
                            <Minha_Conta_Sub_Menu show={this.state.sub_menu_1} />

                        </View>

                        <View style={[ style.body_menu_content ]}>
                            <TouchableOpacity style={style.body_menu}>
                                <View style={style.body_control_icon}>
                                    <Image style={style.body_menu_icon}
                                           source={require('../../assets/imgs/png/icons/configs.png')}/>
                                    <Text style={style.body_menu_text}>CONFIGURAÇÕES</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={[ style.body_menu_content_db_border ]}>
                            <TouchableOpacity style={style.body_menu} onPress={() => this.hideSubmenu(3)}>
                                <View style={style.body_control_icon}>
                                    <Image style={style.body_menu_icon}
                                           source={require('../../assets/imgs/png/icons/shop.png')}/>
                                    <Text style={style.body_menu_text}>MEUS PEDIDOS</Text>
                                </View>
                                <Image style={style.body_menu_down}
                                       source={require('../../assets/imgs/png/arrow-down-white.png')}/>
                            </TouchableOpacity>
                            <Meus_Pedidos_Sub_Menu show={this.state.sub_menu_3}></Meus_Pedidos_Sub_Menu>

                        </View>
                    </Animated.View>

                </ScrollView>

                <View>
                    <Animated.View style={
                        {
                            transform: [{
                                translateX: this.state.elements_animation_progress.interpolate({ inputRange: [ 90, 100 ], outputRange: [ -100, 0 ] })
                            }]
                        }
                    }>
                        <TouchableOpacity onPress={() => this._exit()} style={style.footer}>
                            <Image style={style.footer_image}
                                   source={require('../../assets/imgs/png/sign-out-white.png')}/>
                            <Text style={style.footer_text}>SAIR</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

            </Animated.View>
        );

    }/* end of render funcion */

    _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
        } else {
            obj[key] = value;
        }
        return obj;
    }

    _exit = async () => {

        const uid = await AsyncStorage.getItem('uid');

        const messagingToken = await AsyncStorage.getItem('messagingToken');


        LoginService.signout().then(() => {
            this.signout();
        }).catch((error) => {
            Alert.alert(
                'Erro',
                'Algo inesperado ocorreu. Por favor, tente novamente mais tarde. ' + error,
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        });
    }
}

class Meus_Pedidos_Sub_Menu extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        if (this.props.show) {
            return (
                <View style={[ style.sub_menu, style.sub_menu_last ]}>
                    <View style={style.body_sub_menu}>
                        <TouchableOpacity>
                            <Text style={style.text_sub_menu}>PEDIDO 1</Text>
                        </TouchableOpacity>
                        <Text style={style.number_sub_menu}>02</Text>
                    </View>

                    <View style={style.body_sub_menu}>
                        <TouchableOpacity>
                            <Text style={style.text_sub_menu}>PEDIDO 2</Text>
                        </TouchableOpacity>
                        <Text style={style.number_sub_menu}>25</Text>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }
}

export default withNavigation(SideMenu);
