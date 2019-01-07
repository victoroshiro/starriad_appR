import React from 'react';
import {View} from 'react-native';
import {style} from './checkBox-style';

export default class CheckBox extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={style.checkBox}>
                <View style={[(this.props.actived ? style.actived : null),{backgroundColor:(this.props.color !== undefined ? this.props.color : '#6d6a6a')} ]}>
                </View>
            </View>
        )
    }
}