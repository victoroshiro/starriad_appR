import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
    Image,
    Animated
} from 'react-native';

import {LinearGradient} from 'expo';

import {style} from "./SlideScreen-styles"
import {styleLogin} from "../login/Login-styles";


export default class SlideScreen extends React.Component {

    constructor(props) {
        super(props);
        let {height, width} = Dimensions.get('window');
        this.state = {
            screenWidth: width,
            screenHeight: height,
            indexActived: 0,
            scrollProvisorio: 0,
            opacity: new Animated.Value(0),
            show: 1
        };



    }

    componentDidMount() {
        this.fadeIn();
    }


    fadeOut() {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    fadeIn() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    /* Fim da função construtora do feed */

    render() {

        return (
            <View style={style.container}>
                <View style={[style.headerNotificationBar]}/>
                <ScrollView onScroll={(event) => {
                    this.detectedScroll(event.nativeEvent.contentOffset.x)
                }}
                            pagingEnabled={true}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={16}
                            ref="scroll"
                            style={style.scrollContainer}>
                    {this.slides()}
                </ScrollView>
                <View
                    style={[style.imageContainer, {width: this.state.screenWidth}, {height: this.state.screenHeight}]}>
                    <View style={style.topContainer}>
                        <LinearGradient style={[style.header]}
                                        colors={['#000', 'rgba(0, 0, 0, 0)']}
                                        locations={[0, 0.5]}>
                            <Image resizeMode={'contain'} style={style.imgLogo}
                                   source={require('../../assets/imgs/png/logo/logo.png')}/>
                        </LinearGradient>
                    </View>
                    <LinearGradient style={[style.bottomContainer]}
                                    colors={['rgba(0, 0, 0, 0)', '#000']}
                                    locations={[0, 0.33]}>
                        {this.getText(this.state.indexActived)}
                        <View>
                            <View style={style.dotsContainer}>
                                {this.dots()}
                            </View>
                        </View>
                        <View style={style.btnContainer}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Login')
                            }
                            }>
                                <View style={[style.btnPadrao, style.btnEntrar]}>
                                    <Text style={style.textBtn}>Entrar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Login', 'Passo1')
                            }
                            }>
                                <View style={[style.btnPadrao, style.btnCadastrar]}>
                                    <Text style={style.textBtn}>Cadastrar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>


            </View>
        );
    }

    slides() {
        let id = 0;
        return slides.map((value, index) => {
            return (
                <ImageBackground key={index} resizeMode={'cover'}
                                 style={[{width: this.state.screenWidth}, {height: this.state.screenHeight}]}
                                 source={value.imagem}
                                 ref="image"
                                 index={id++}>
                </ImageBackground>
            )
        })

    }


    dots() {
        return slides.map((value, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => this.changeSlide(index)}>
                    <View style={[style.dots, (this.state.indexActived == index ? style.dotsActived : null)]}></View>
                </TouchableOpacity>
            )
        })

    }

    changeSlide(index) {
        let scroll = this.refs.scroll;
        this.refs.scroll.scrollTo({x: this.state.screenWidth * index})
    };

    timeout;

    detectedScroll(scrollX) {

        scrollX = Math.round(scrollX);
        let screenWidth = Math.round(this.state.screenWidth);
        if (scrollX < screenWidth) {
            this.setState({indexActived: 0})
            this.fadeOut();
        }

        if (scrollX >= screenWidth * 1 - (screenWidth / 2)) {
            this.setState({indexActived: 1});
            this.fadeOut();
        }

        if (scrollX >= screenWidth * 2 - (screenWidth / 2)) {
            this.setState({indexActived: 2});
            this.fadeOut();
        }
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.fadeIn()
        }, 100)


    }

    getText(index) {

        const opacity = this.state.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        const scale = this.state.opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0.35, 1],
        });
        const transform = [{scale}]
        switch (index) {
            case  0:
                return (
                    <View style={[style.viewText]}>
                        <Animated.Text style={[style.textContainer, {opacity}]}>
                            <Text style={[style.textPadrao, style.textDetalhe]}>A rede de pedidos de roupas </Text>
                            <Text style={[style.textPadrao]}>que conecta todos os estilos.</Text>
                        </Animated.Text>
                    </View>
                )
                break;

            case  1:
                return (
                    <View style={style.viewText}>
                        <Animated.Text style={[style.textContainer, {opacity}]}>
                            <Text style={[style.textPadrao, style.textDetalhe]}>Explore seus interesses de
                                compra </Text>
                            <Text style={[style.textPadrao]}>e venda de forma personalizada.</Text>
                        </Animated.Text>
                    </View>
                )
                break;


            case  2:
                return (
                    <View style={style.viewText}>
                        <Animated.Text style={[style.textContainer, {opacity}]}>
                            <Text style={[style.textPadrao, style.textDetalhe]}>Seja Comprador ou vendedor, </Text>
                            <Text style={[style.textPadrao]}>Conecte-se e expanda sua marca!</Text>
                        </Animated.Text>
                    </View>
                )
                break;
        }

    }


}


const slides = [
    {imagem: require("../../assets/imgs/jpg/slides/slide1.jpg")},
    {imagem: require("../../assets/imgs/jpg/slides/slide2.jpg")},
    {imagem: require("../../assets/imgs/jpg/slides/slide3.jpg")},

];



