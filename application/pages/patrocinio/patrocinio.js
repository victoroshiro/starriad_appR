import React from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    Modal,
    Image,
    Alert,
    AsyncStorage,
    TextInput,
    ScrollView
} from 'react-native';
// import {style} from "./patrocinio-style";
import LoginService from "../../services/login/login-service";
import {withNavigation} from "react-navigation";


class patrocinio extends React.Component {

    constructor(props) {
        super(props);

        let {height, width} = Dimensions.get('window');

        this.state = {

            height: height,
            width: width,
            patrocinio: []
        }

        LoginService.getPatrocinio().then((response) => {

            this.setState({patrocinio: response.data})

            Alert.alert(
                'teste',
                JSON.stringify(response.data),

            );
        }).catch((e)=>{
            Alert.alert(
                'ERRO',
                e.toString(),

            );
        })

    }


    render(){

        return(
            <View style={{backgroundColor: "#225c72", height: "100%"}}>
                <View style={{
                    width: "100%",
                    backgroundColor: "#002f49",
                    height: 50
                }}>
                    <View style={{ top: 5}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Image resizeMode={'contain'} style={{
                                width: 22,
                                height: 22,
                                tintColor: '#fff',
                                marginTop: 8,
                                marginLeft: 5
                            }}
                                   source={require('../../assets/imgs/png/icons/caret-left.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{width: 20}}>  </View>
                    </View>

                </View>


            </View>

        )

    }
}
export default withNavigation(patrocinio)