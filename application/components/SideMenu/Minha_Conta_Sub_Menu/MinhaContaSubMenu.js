import React from "react";
import {
    Text,
    View,
    TouchableOpacity,

} from 'react-native';
import { withNavigation } from 'react-navigation';
import {style} from "./../side-menu-styles"


class Minha_Conta_Sub_Menu extends React.Component {

    constructor(props) {
        super(props);

        this.toEditarPerfil = this.toEditarPerfil.bind(this);

    }

    toEditarPerfil() {
        this.props.navigation.navigate('EditarPerfil');
    }

    render() {
        if (this.props.show) {
            return (

                <View style={style.sub_menu}>
                    <View style={style.body_sub_menu}>
                        <TouchableOpacity>
                            <Text style={style.text_sub_menu}>MUDAR SENHA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.body_sub_menu}>
                        <TouchableOpacity onPress={this.toEditarPerfil} >
                            <Text style={style.text_sub_menu}>EDITAR PERFIL</Text>
                        </TouchableOpacity>
                        <Text style={style.number_sub_menu}>45</Text>
                    </View>


                    <View style={style.body_sub_menu}>
                        <TouchableOpacity>
                            <Text style={style.text_sub_menu}>GESTÃO DE FUNCIONARIOS</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={style.body_sub_menu}>
                        <TouchableOpacity>
                            <Text style={style.text_sub_menu}>CONVIDAR CLIENTES</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            );
        } else {
            return (<View></View>)
        }
    }
}

export default withNavigation(Minha_Conta_Sub_Menu);
