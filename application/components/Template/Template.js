import React from "react";
import { View, ScrollView, Animated } from "react-native";
import styles from "./template-styles";
import TemplateHeader from "./templateComponents/TemplateHeader/TemplateHeader";
import TemplateFooter from "./templateComponents/TemplateFooter/TemplateFooter";


export default class Template extends React.Component{

    /* Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {
            scrollview: ( this.props.scrollview !== undefined ? this.props.scrollview : true ),
            header: ( this.props.header !== undefined ? this.props.header : true ),
            footer: ( this.props.footer !== undefined ? this.props.footer : true ),

            animate_settings: new Animated.Value( 0 ),
            animate_menu: new Animated.Value( 0 ),

            menu_opened: false,
            settings_opened: false,

            loadElements: false,
        };

    }/* Fim da função construtora do componente */
    
    /* Função trigger de quando o componente for montado */
    async componentDidMount() {



        this.setState({ loadElements: true });

    }


    /** Função utilizada para animar o content de acordo com o status de abertura do menu de settings */
    __switch_settings_menu = (( state )=>{

        this.setState({ menu_opened: false });

        /* Verifica o state do menu de settings */
        if( state ){

            /* Caso o menu de settings esteja sendo aberto, anima a abertura */
            Animated.spring( this.state.animate_settings, {
                toValue: 100,
                bounciness: 10
            }).start();
            this.setState({ settings_opened: true });

        }else{
            /* Caso o menu de settings esteja sendo fechado */
            Animated.spring( this.state.animate_settings, {
                toValue: 0,
                bounciness: 10
            }).start(()=>{ this.setState({ settings_opened: false }); });
        }/* Fim da verificação do state do menu de settings  */

    }); /* Fim do escopo da função que anima o content, de acordo com o status de abertura do menu de settings */

    /** Função utilizada para animar o content de acordo com o status de abertura do menu ( esquerda ) */
    __switch_menu = (( state )=>{

        /* Define o state do menu de settings como false */
        this.setState({ settings_opened: false });

        /* Verifica se o state do menu está definido como aberto ou fechado */
        if( state ){
            /* Caso o state esteja definido como aberto, inicia a animação de abertura */
            Animated.spring( this.state.animate_menu, {
                toValue: 100,
                bounciness: 10
            }).start();
            /* Define o state local do menu como true */
            this.setState({ menu_opened: true });

        }else{
            /* Caso o state esteja definido como fechado, inicia a animação para fechamento */
            Animated.spring( this.state.animate_menu, {
                toValue: 0,
                bounciness: 10
            }).start(()=>{ 
                /* Quando a animação for finalizada, define o state do menu como false */
                this.setState({ menu_opened: false }); 
            });

        }/* Fim da verificação de status do menu */

    });/* Fim do escopo da função que anima o content, de acordo com o status de abertura do menu ( settings ) */



    /* Função que renderiza o componente */
    render = (() => {

        const settings_animate = this.state.animate_settings.interpolate({ inputRange: [0, 100], outputRange: [0, -200] });
        const menu_animate = this.state.animate_menu.interpolate({ inputRange: [0, 100], outputRange: [0, 200] });

        const animation_settings = { transform: [{ translateX: settings_animate }] };
        const animation_menu = { transform: [{ translateX: menu_animate }] };

        let animation_class = ( this.state.menu_opened ? animation_menu : animation_settings );

        if( this.state.loadElements ){
            return(
                <View style={[ styles.system_template_view ]}>

                    { this.__render_header() }

                    <Animated.View style={[ styles.system_template_view_viewport, animation_class ]}>
                        { this.__render_content() }
                    </Animated.View>

                    { this.__render_footer( animation_class ) }

                </View>
            );
        }else{
            return(
                <View></View>
            );
        }

    });/* Fim do escopo da função render do componente */

    /** Função utilizada para renderizar o Header do template */
    __render_header = (()=>{

        if( this.state.header ){
            return(
                <TemplateHeader
                    onSettings={ (( state )=>{ this.__switch_settings_menu( state ) }) }
                    onMenu={ (( state )=>{ this.__switch_menu( state ) }) }/>
            );
        }else{ return null; }

    });/* Fim da função utilizada para renderizar o header do template */


    /** Função utilizada para renderizar o footer do template */
    __render_footer = (( animation_class )=>{

        if( this.state.footer ){
            return(
                <Animated.View style={[ styles.system_template_view_footer_content, animation_class ]}>
                    <TemplateFooter navigation={ this.props.navigation } />
                </Animated.View>
            );
        }else{ return null; }

    });/* Fim do escopo da função utilizada para renderizar o footer do template */

    

    /** Função utilizada para renderizar o content da pagina de acordo com as props */
    __render_content = (() => {

        /* Verifica se o template precisa ter o scrollView */
        if( this.state.scrollview ){
            /* Caso o conteudo precise ser renderizado com scrollview */

            return (
                <ScrollView style={[ styles.system_template_scrollview ]}>
                    { this.props.render }
                </ScrollView>
            );


        }else{
            /* Caso o conteudo não deva ser exibido com scrollView */
            return (
                <View style={[ styles.system_template_scrollview ]}>
                    { this.props.render }
                </View>
            );

        }/* Fim das renderizações de acordo com as props de scrollview do componente */

    });/* Fim da função utilizada para renderizar o content da pagina */
    

}