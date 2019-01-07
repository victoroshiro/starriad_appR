import React from "react";
import {
    View,
    TouchableOpacity,
    Animated,
    ScrollView,
    Text,
    Image,
    Dimensions,
    TextInput,
    NativeModules,
    LayoutAnimation, AsyncStorage, Alert
} from "react-native";
import styles from "./template-header-styles";
import LoginService from "../../../../services/login/login-service";
import {withNavigation} from "react-navigation";
import HeaderBadge from "../../../SystemHeader/header-components/badge";


NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

/* Inicio do escopo do componente do template header */
class TemplateHeader extends React.Component {

    /* Função construtora do componente */
    constructor( props ){
        super( props );

        /* State inicial do componente */
        this.state = {
            configs_opened: false,
            menu_opened: false,

            menu_animation: new Animated.Value( 0 ),
            configs_animation: new Animated.Value( 0 ),

            menu_brands: false,
            menu_categories: false,
            menu_region: false,

            notificacoesAtivas: 0,
            paramsFire: {dados: '', uid: '', notificacao: ''},
            uid_user: null,
            notificacoes: '',
            user: null,
            badgeNovas: 0,
            userLoggedGlobal: [],
            params: {dados: 'OK'}
        };
    };

    componentDidMount(){
        this.getUidUser();
        this.loadDadosUser(this.state.paramsFire);
    }

    getUidUser = async () => {
        this.state.uid_user =  await AsyncStorage.getItem('uid');
        this.setState({
            uid_user: this.state.uid_user
        });
    };

    // Pega o UID do usuario, seta no storage e retorna os campos( empresa_id_fk, name, name_profile, notificationsTokens, online ) do Firestore.
    loadDadosUser = async (paramsFire) => {

        const user_logged = await AsyncStorage.getItem('@starriad:userlogged');

        if (user_logged !== undefined && user_logged != null && user_logged !== '' && user_logged) {

            paramsFire.uid = this.state.uid_user;

            this.setState({
                paramsFire: this.state.paramsFire
            });


        }else{
            console.log('ELSE');
        }
    };

    getActivitiesFirestore = async (user) =>{
        const user_logged = await AsyncStorage.getItem('@starriad:userlogged');

        this.state.paramsFire.dados = user;
        this.setState({
            paramsFire: this.state.paramsFire
        });


    };

    // função que le as notificações e seta no firestore
    readNotificFirestore() {

        let user_id = this.state.user;

        if (user_id == '' || user_id == undefined) {
        } else {

        }
    };

    componentWillUpdate = (()=>{
        //LayoutAnimation.easeInEaseOut();
        const LayoutSpringSettings = {
            duration: 400,
            create: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.7,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.7,
            },
        };

        LayoutAnimation.configureNext( LayoutSpringSettings );

    });


    /** Função utilizada para alterar a visualização do "menu" de settings  */
    __switch_settings = (() => {

        /* Define o state do menu (esquerdo) como false */
        this.setState({ menu_opened: false });

        /* Verifica o status atual do menu de settings */
        if( this.state.configs_opened ){

            this.props.onSettings( false );
            /* Se o menu já estiver com o state de aberto, anima para fecha-lo */
            Animated.spring( this.state.configs_animation, {
                toValue: 0,
                bounciness: 10
            }).start(()=>{
                /* Quando a animação for finalizada, muda o state do menu para false */
                this.setState({ configs_opened: false });
            });

        }else{
            /* Caso o menu esteja com o state de fechado, anima para abri-lo */
            Animated.spring( this.state.configs_animation, {
                toValue: 100,
                bounciness: 10
            }).start();

            this.props.onSettings( true );
            this.setState({ configs_opened: true });
        }/* Fim do escopo das verificações de state de abertura do menu */

    });/* Fim do escopo da função de switch de visualização do "menu" de settings */

    /** Função utilizada para aplicar o switch do menu de busca do header */
    __switch_menu = (() => {

        this.setState({ configs_opened: false });

        /* Verifica se o header está aberto, se estiver, fecha-o */
        if( this.state.menu_opened ) {

            this.props.onMenu( false );
            /* Anima o header para fechá-lo */
            Animated.spring( this.state.menu_animation, {
                toValue: 0,
                bounciness: 10
            }).start((()=>{
                /* Quando a animação for finalizada, seta o state de menu aberto para false */
                this.setState({ menu_opened: false });
            }));/* Fim do escopo da animação */

        }else{

            /* Caso o menu não esteja aberto, anima para abri-lo  */
            Animated.spring( this.state.menu_animation, {
                toValue: 100,
                bounciness: 10
            }).start();

            /* Define o state como aberto */
            this.setState({ menu_opened: true });
            this.props.onMenu( true );

        }/* Fim da verificação de status do menu */
        
    });/* Fim do escopo da função de switch do menu global do header  */


    /* Função utilizada para renderizar o componente */
    render(){

        return(
            <View style={[ styles.template_header_view ]}>

                { this.__render_header() }
                { this.__render_header_settings() }
                { this.__render_header_menu() }

            </View>
        );

    }/* Fim da função de render do componente */


    /** Função utilizada para exibir o HEADER do componente, a parte que é sempre visivel */
    __render_header = (() => {

        const config_animate = this.state.configs_animation.interpolate({ inputRange: [0, 100], outputRange: [0, -200] });
        const menu_animate = this.state.menu_animation.interpolate({ inputRange: [0, 100], outputRange: [0, 200] });

        const animation_config = { transform: [{ translateX: config_animate }] };
        const animation_menu = { transform: [{ translateX: menu_animate }] };

        let animation_class = ( this.state.menu_opened ? animation_menu : animation_config );

        return(
            <View style={[ styles.template_header_content ]}>

                <View style={[ styles.template_device_status_bar ]} />

                <Animated.View style={[ styles.template_header_viewport, animation_class ]}>

                    <View style={[ styles.template_header_action ]}>
                        <TouchableOpacity
                            style={[ styles.template_header_action_touchable ]}
                            onPress={(()=> { this.__switch_menu() } )} >
                            <Image style={[ styles.template_header_action_icon ]} source={ require("../../../../assets/imgs/png/icons/menu.png") }></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[ styles.template_header_action ]} />

                    <View style={[ styles.template_header_logo ]}>
                        <View style={[ styles.template_header_logo_content ]}>
                            <Image resizeMode="contain" style={[ styles.template_header_logo_img ]} source={ require("../../../../assets/imgs/png/logo/houpa-solid-black.png") }/>
                        </View>
                    </View>

                    <View style={[{
                        width: 100,
                        height: 50,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                    marginRight: 20}]}>
                        <TouchableOpacity  onPress={() => {
                            // this.props.navigation.navigate('Notificacoes');
                        }}
                            style={[ {
                                width: 80,
                                height: 50,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row'
                            } ]} >
                            {/*<Image style={[ styles.template_header_action_icon ]} source={ require("../../../../assets/imgs/png/icons/notification.png") }></Image>*/}
                            <Image resizeMode="contain" style={{margin:5}} source={ require("../../../../assets/imgs/png/icons/ticket.png") }/>
                            <Text style={{color: "#fff"}}>Cupons</Text>
                            <HeaderBadge badgeValue={this.state.notificacoesAtivas} />
                        </TouchableOpacity>
                    </View>

                    <View style={[{height: 5}]}>

                    </View>

                </Animated.View>

            </View>
        );

    });/* Fim do escopo da função de renderização do header do componente */


    /** Função utilizada para exibir as SETTINGS do componente do header */
    __render_header_settings = (() => {

        const deviceHeight = ( Dimensions.get('window').height - 24 );
        /* Classe de animação do menu */
        const animate_settings = this.state.configs_animation.interpolate({ inputRange: [0, 100], outputRange: [200, 0] });
        const style_animate_settings = { transform: [{ translateX: animate_settings }] };

        return(
            <Animated.View style={[ styles.template_header_settings, style_animate_settings, { height: deviceHeight } ]}>
                <View style={[ styles.templates_header_settings_header ]}>

                    <View style={[ styles.template_header_settings_head ]}>
                        <Text style={[ styles.template_header_settings_head_title ]}>
                            Configurações
                        </Text>
                    </View>
                    <View style={[ styles.template_header_settings_menu ]}>

                    </View>

                </View>
            </Animated.View>
        );

    });/* fim do escopo da função __render_header_settings */


    /** Função utilizada para exibir as SETTINGS do componente do header */
    __render_header_menu = (() => {

        const deviceHeight = ( Dimensions.get('window').height - 24 );

        /* Classe de animação do menu */
        const animate_menu = this.state.menu_animation.interpolate({ inputRange: [0, 100], outputRange: [-200, 0] });
        const animate_menu_style = { transform: [{ translateX: animate_menu }] };
        
        /* Renderização do módulo */
        return(
            <Animated.View style={[ styles.template_header_menu, animate_menu_style, { height: deviceHeight } ]}>
                <View style={[ styles.template_header_menu_content ]}>

                    <View style={[ styles.template_header_menu_head ]}>
                        <TextInput
                            style={[ styles.template_header_menu_header_searcher ]}
                            placeholder="Busca"
                            underlineColorAndroid="transparent"/>
                    </View>

                    <View style={[ styles.template_header_menu_options ]}>
                        <ScrollView style={[ styles.template_header_menu_options_scrollview ]}>


                            <View style={[ styles.template_header_menu_option ]}>
                                <TouchableOpacity style={[ styles.template_header_menu_option_touchable ]}>
                                    <Text style={[ styles.template_header_menu_option_text ]}>
                                        Meus Cupons
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[ styles.template_header_menu_option ]}>
                                <View style={[ styles.template_header_menu_option_label ]}>
                                    <TouchableOpacity
                                        onPress={() => { this.setState({ menu_brands: !this.state.menu_brands }) }}
                                        style={[ styles.template_header_menu_option_touchable ]}>
                                        <Text style={[ styles.template_header_menu_option_text ]}>
                                            Categorias
                                        </Text>
                                        <View style={[ styles.template_header_menu_option_icon ]}>
                                            <Image
                                                style={[ styles.template_header_menu_option_ico, { transform: [{ rotate: (this.state.menu_brands ? '90deg' : '0deg' ) }] } ]}
                                                source={ require('../../../../assets/imgs/png/icons/caret-right.png') }/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[ styles.template_header_submenu_options, { maxHeight: ( this.state.menu_brands ? 400 : 0 ) } ]}>
                                    <ScrollView style={[ styles.template_header_submenu_scrollview ]}>
                                        <View style={[ styles.template_header_submenu_view ]}>

                                            { this.__render_brands() }

                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={[ styles.template_header_menu_option ]}>
                                <TouchableOpacity style={[ styles.template_header_menu_option_touchable ]}>
                                    <Text style={[ styles.template_header_menu_option_text ]}>
                                        Configurações
                                    </Text>
                                </TouchableOpacity>
                            </View>



                        </ScrollView>
                    </View>


                </View>
            </Animated.View>
        );/* Fim do escopo da renderização do modulo */

    });/* fim do escopo da função __render_header_settings */


    /** Função utilizada para renderizar os registros de marcas do submenu */
    __render_brands = (()=>{

        /* Variável que controla os registros de brands */
        const brands = [
            { brand_name: 'Alimentos' },
            { brand_name: 'Aplicativos' },
            { brand_name: 'Moda' },
            { brand_name: 'outros' },
        ];

        /* Mapeia os registros de marcas, para retornar a renderização dos registros */
        const render = brands.map(( brand, index )=>{
            return(
                <View key={index} style={[ styles.template_header_submenu_option ]}>
                    <TouchableOpacity style={[ styles.template_header_submenu_option_touchable ]}>
                        <Text
                            style={[ styles.template_header_submenu_option_label ]}
                            numberOfLines={1}
                            ellipsizeMode="tail"> { brand.brand_name } </Text>
                    </TouchableOpacity>
                </View>
            );
        });
        
        /* Retorna o que deve ser renderizado pela função */
        return render;

    });/* Fim da função utilizada para renderizar os registros de marcas do submenu */


    /** Função utilizada para renderizar os registros de categorias de filtro */
    __render_categories = (()=>{
        /* Variável que controla os registros de categorias */
        const categories = [
            { category_name: 'Blusas' },
            { category_name: 'Casacos' },
            { category_name: 'Shorts' },
            { category_name: 'Calças' },
            { category_name: 'Calçados' },
            { category_name: 'Acessórios' },
            { category_name: 'Moletons' },
            { category_name: 'Jaquetas' },
            { category_name: 'Jeans' },
            { category_name: 'Camisetas' },
            { category_name: 'Saias' },
            { category_name: 'Vestidos' },
            { category_name: 'Sobretudos' },
            { category_name: 'Camisas' },
            { category_name: 'Bermudas' },
        ];

        /* Mapeia os registros de categorias, para retornar a renderização dos registros */
        const render = categories.map(( category, index )=>{
            return(
                <View key={index} style={[ styles.template_header_submenu_option ]}>
                    <TouchableOpacity style={[ styles.template_header_submenu_option_touchable ]}>
                        <Text
                            style={[ styles.template_header_submenu_option_label ]}
                            numberOfLines={1}
                            ellipsizeMode="tail"> { category.category_name } </Text>
                    </TouchableOpacity>
                </View>
            );
        });

        /* Retorna o que deve ser renderizado pela função */
        return render;
    }); /* Fim da função utilizada para renderizar os registros das categorias de filtro */


    /** Função utilizada para renderizar os registros de regiões de filtro */
    __render_regions = (()=>{
        /* Variável que controla os registros de regiões */
        const regions = [

            { region_name: 'Acre' },
            { region_name: 'Alagoas' },
            { region_name: 'Amapá' },
            { region_name: 'Amazonas' },
            { region_name: 'Bahia' },
            { region_name: 'Ceará' },
            { region_name: 'Espirito Santo' },
            { region_name: 'Goiás' },
            { region_name: 'Minas Gerais' },
            { region_name: 'Maranhão' },
            { region_name: 'Mato Grosso' },
            { region_name: 'Mato Grosso do sul' },
            { region_name: 'Pará' },
            { region_name: 'Paraiba' },
            { region_name: 'Paraná' },
            { region_name: 'Pernambuco' },
            { region_name: 'Piaui' },
            { region_name: 'Rio de Janeiro' },
            { region_name: 'Rio Grande do Norte' },
            { region_name: 'Rio Grande do Sul' },
            { region_name: 'Rondônia' },
            { region_name: 'Roraima' },
            { region_name: 'Santa Catarina' },
            { region_name: 'São Paulo' },
            { region_name: 'Sergipe' },
            { region_name: 'Tocantins' },

        ];

        /* Mapeia os registros de regiões, para retornar a renderização dos registros */
        const render = regions.map(( region, index )=>{
            return(
                <View key={index} style={[ styles.template_header_submenu_option ]}>
                    <TouchableOpacity style={[ styles.template_header_submenu_option_touchable ]}>
                        <Text
                            style={[ styles.template_header_submenu_option_label ]}
                            numberOfLines={1}
                            ellipsizeMode="tail"> { region.region_name } </Text>
                    </TouchableOpacity>
                </View>
            );
        });

        /* Retorna o que deve ser renderizado pela função */
        return render;

    }); /* Fim da função utilizada para renderizar os registros das regiões de filtro */

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
            this.props.navigation.navigate('Login');
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

}/* Fim do escopo da classe do componente TemplateHeader */

export default withNavigation(TemplateHeader);