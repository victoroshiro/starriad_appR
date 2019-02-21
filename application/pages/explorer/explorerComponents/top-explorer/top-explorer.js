import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Animated, Alert
} from 'react-native';
import styles from './top-explorer-styles';
import LoginService from "../../../../services/login/login-service";
import {withNavigation} from "react-navigation";

 class TopExplorer extends React.Component {

    scrollX = new Animated.Value(0);

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            deviceWidth: Dimensions.get('window').width,
            destaques: [],
            index: 0,
        };

        // Verifica o tamanho da tela atual e guarda o valor na variavel deviceWidth
        Dimensions.addEventListener("change", () => {
            this.setState({deviceWidth: Dimensions.get('window').width});
        });

        LoginService.getDestaques().then((response) => {

            this.setState({destaques: response.data})

            // console.log(this.state.empresaProdutos)

        }).catch(error => {

            this.setState({
                loading: false
            });

            Alert.alert(
                'Erro',
                'Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.' + error,
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );

        });
    }

    componentDidMount(){
        this.setState({
            destaques: [],
            loading: false,
        });


    }

    openProfile(){
        console.log('Perfil');
    }

    conexao(){
        if(this.state.loading){
            this.setState({loading: false});
        }else{
            this.setState({loading: true});
        }
    }

    // Navega para o Slide selecionado no indicador
    changeSlide(index) {
        let scroll = this.refs.scroll;
        this.refs.scroll.scrollTo({x: this.state.deviceWidth * index});
    };

    renderSlide(){
        let position = Animated.divide(this.scrollX, this.state.deviceWidth);

        return(
            <View style={styles.containerBanner}>

                <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
                            )}
                            scrollEventThrottle={16}
                            ref="scroll">

                    {this.state.destaques.map((destaque) => (

                        <TouchableOpacity key={destaque.id} onPress={()=>{
                            this.props.navigation.navigate('ProdutoProfile', {
                                video_id: destaque
                            });
                        }}>

                            <View style={[styles.containerImagem, {width: this.state.deviceWidth}]}>
                                <ImageBackground source={{uri: "http://ec2-18-231-116-5.sa-east-1.compute.amazonaws.com/StarriAD/uploads/" + destaque.nome_thumbnail}} style={styles.imagemBackground} ref="image" />
                            </View>

                            <View style={styles.infosBanner}>

                                <View style={styles.infoLabel}>
                                    <Text style={styles.infoText}>
                                        {destaque.titulo}
                                    </Text>
                                    <Text style={styles.infoText}>
                                        R${destaque.valor_desconto},00
                                    </Text>
                                </View>


                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Indicador do slide (mostra o indice ativo) */}
                <View style={styles.containerIndiceSlide}>
                    {this.state.destaques.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });
                        return (
                            <TouchableOpacity activeOpacity={0.6} key={i} onPress={() => this.changeSlide(i)}>
                                <Animated.View style={[styles.indiceSlide, {opacity}]} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        )
    }

    render() {
        return(
            this.renderSlide()
        );
    }
}

export default withNavigation(TopExplorer)