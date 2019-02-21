import React from "react";
import { View, Text, Animated } from "react-native";
import styles from "../system-header-styles";

export default class HeaderBadge extends React.Component{


    constructor( props ){
        super( props );

        this.state = {
            animation_progress: new Animated.Value( 0 ),

        };

    }/* end of constructor font */


    componentDidMount(){

        Animated.spring( this.state.animation_progress, {
            toValue: 100,
            bounciness: 15,
            velocity: 700
        }).start();

    }
    
    
    render(){

        let badge_scale = this.state.animation_progress.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ 0, 1 ]
        });

        /* Função utilizada para renderizar a badge, realizando as verificações necessárias */
        let render_badge = (() => {
            
            /* Verifica se o numero da badge é maior que zero */
            if( this.props.badgeValue > 0 ){
                /* Caso o numero seja maior que zero, exibe a badge normalmente */

                let number_show = ( this.props.badgeValue > 9 ? '9+' : this.props.badgeValue );

                return(
                    <Animated.View style={[ styles.headerBadge, { transform: [{scale: badge_scale }] } ]}>
                        <Text style={[ styles.headerBadgeText ]}>
                            {number_show}
                        </Text>
                    </Animated.View>
                );
            }else{
                /* Caso o numero da badge seja menor ou igual a 0, retorna null */
                return null;
            }
            
        });/* Fim da função de render badge */



        /* Retorna a badge */
        return( render_badge() );
        
        
    }/* End of render function */

}