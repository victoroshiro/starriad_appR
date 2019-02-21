import React from 'react';
import { View, TouchableOpacity, Image, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './system-header-styles';
import HeaderBadge from "./header-components/badge";
import SideMenu from "../SideMenu/SideMenu";

class SystemHeader extends React.Component {

    constructor(props) {
        super(props);

        this.toCarrinho = this.toCarrinho.bind(this);

        this.state = {

            menu_animation_progress: new Animated.Value( 0 ),
            opened_menu: false,

        };

    }


    componentDidMount(){

        Animated.spring( this.state.menu_animation_progress, {
            toValue: 100,
            bounciness: 15,
            velocity: 100
        }).start();

    }

    _openMenu = (() => {
        this.setState({ opened_menu: true })
    });

    _closedMenu = ((  ) => {
        this.setState({ opened_menu: false });
    });

    toCarrinho() {
        this.props.navigation.navigate('Carrinho');
    }

    render() {

        let menu_position = this.state.menu_animation_progress.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ ( 100 * -1 ), 0 ]
        });


        return (

            <View>
                <View style={[styles.headerContainer]}>

                    <View style={[styles.headerNotificationBar]}></View>
                    <View style={[styles.headerContent]}>

                        <TouchableOpacity style={[ styles.headerTouchableOpacity ]} onPress={ this._openMenu }>
                            <Animated.View style={[styles.headerActionContent, { transform: [{ translateX: menu_position }] }]}>
                                <Image source={require('../../assets/imgs/png/icons/menu.png')}
                                       style={[{aspectRatio: 1, width: 25, height: 25}]}/>
                            </Animated.View>
                        </TouchableOpacity>

                        <View style={[styles.headerActionContent]}></View>

                        {/*<View style={[styles.headerLogoContent]}>*/}
                            {/*<Image source={require("../../assets/imgs/png/logo/houpa-solid-black.png")} resizeMode="contain"*/}
                                   {/*style={[{height: 50, width: 80}]}></Image>*/}
                        {/*</View>*/}

                        <TouchableOpacity style={[ styles.headerTouchableOpacity ]} onPress={()=>{ this.props.navigation.navigate('ticketList'); }}>
                            {/*<View style={[styles.headerActionContent]}>*/}
                                {/*<Image source={require('../../assets/imgs/png/icons/chat-2.png')}*/}
                                       {/*style={[{aspectRatio: 1, width: 25, height: 25}]}/>*/}
                                {/*<HeaderBadge badgeValue="8"/>*/}
                            {/*</View>*/}
                            <Text>Cupons</Text>
                        </TouchableOpacity>

                    </View>


                </View>

                <SideMenu opened={ this.state.opened_menu } onclose={ this._closedMenu }/>

            </View>


        );
    }



}

export default withNavigation(SystemHeader);