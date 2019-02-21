import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native';
import {style} from './HeaderProduto-styles';

export default class HeaderProduto extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={style.containerHeader}>

                <TouchableOpacity onPress={() => {
                    this.props.callBack();
                }}>
                    <Image style={style.back} resizeMode={'contain'}
                           source={require('../../../../assets/imgs/png/icons/caret-left.png')}/>
                </TouchableOpacity>

                <View style={{width: 130}}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={style.textTitle}>{this.props.name}</Text>
                </View>

                <View>
                    <Image resizeMode={'cover'} style={style.logo} source={{uri: this.props.image}}/>
                </View>

            </View>

        )

    }
}