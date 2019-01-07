import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import {style} from './SlideProduto-styles';


export default class SlideProduto extends React.Component {

    constructor(props) {


        super(props);
        let {height, width} = Dimensions.get('window');
        this.state = {
            screenWidth: width,
            screenHeight: height,
            indexActived: 0,
            scrollProvisorio: 0,
        };
        if (this.props.height === undefined || this.props.height === 0) {
            this.props.height = 400
        } else if (this.props.height < 100) {
            alert('tamanho ideal 100dpi pra cima')
        }


    }



    render() {
        return (
            <View>
                <ScrollView
                    onScroll={(event) => {
                        this.detectedScroll(event.nativeEvent.contentOffset.x)
                    }}
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    ref="scroll">
                    {this.slides()}
                </ScrollView>
                <View style={style.containerDots}>
                    {this.dots()}
                </View>
            </View>

        )
    }

    dots() {
        return this.props.images.map((value, index) => {
            return (
                <TouchableOpacity key={index} onPress={() => {
                    this.changeSlide(index)
                }}>
                    <View key={index} style={style.dotsArea}>
                        <View style={[style.dots, (this.state.indexActived === index ? style.dotsActived : null)]}>

                        </View>
                    </View>
                </TouchableOpacity>
            )
        })

    }

    changeSlide(index) {
        let scroll = this.refs.scroll;
        this.refs.scroll.scrollTo({x: this.state.screenWidth * index})
    };


    detectedScroll(scrollX) {
        let screenWidth = Math.round(this.state.screenWidth);
        let scrollWidth = Math.round(scrollX);


        this.props.images.forEach((value, index) => {
            if (scrollWidth > ((screenWidth * index) - (screenWidth / 2))) {
                this.state.indexActived = index
            }
        });

        this.setState({indexActived: this.state.indexActived})
    }

    slides() {
        return this.props.images.map((value, index) => {
            return (
                <ImageBackground key={index} id={index} resizeMode={'cover'}
                                 style={[{width: this.state.screenWidth}, {height: this.props.height}]}
                                 source={{uri: value}}
                                 ref="image">
                </ImageBackground>
            )
        })

    }


}

