import React from 'react';
import {View, Text, Image, TouchableOpacity, Animated, Easing, TextInput} from 'react-native';
import {styles} from './BotoesCarrinho-styles';

export default class BotoesCarrinho extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

        }
    }

    renderPage(){
        return(
            <View style={{width: '100%', padding: 10}}>

                <TouchableOpacity style={{width: '100%', height: 60, backgroundColor: '#000', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
                    <Text style={{color: '#fff', fontSize: 18}}>
                        Adicionar os {this.props.qtd} itens ao carrinho
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width: '100%', height: 60, borderColor: '#e6e5e5', borderWidth: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20, marginTop: 10}}>
                    <Text style={{color: '#000', fontSize: 18}}>
                        Ver meu carrinho
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

    render() {
        return (
            this.renderPage()
        )
    }
}