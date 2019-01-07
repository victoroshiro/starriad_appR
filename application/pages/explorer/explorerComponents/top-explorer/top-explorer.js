import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
    ScrollView,
    Animated
} from 'react-native';
import styles from './top-explorer-styles';

export default class TopExplorer extends React.Component {

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
    }

    componentDidMount(){
        this.setState({
            destaques: [{
                id: 1,
                imagem: 'https://d2mf6a0uls9pip.cloudfront.net/uploads/perfil/big/2018/10/24/5bd0a1120f720.jpeg',
                marca: 'M I L A L A I',
            },{
                id: 2,
                imagem: 'http://www.sabrinadalmolin.com/wp-content/uploads/2017/12/Fres-Break-AMARO15-1080x675.jpg',
                marca: 'AMARO',
            },{
                id: 3,
                imagem: 'https://vanduarte.com.br/wp-content/uploads/2018/02/AMARO-look-parka-vermelha-sandalia-e-top-xadrez-principe-de-galles-Moda-R%C3%A1pida-Fashion-Acess%C3%ADvel-Tend%C3%AAncias-Inverno-2018-AMARO-FASHION-Blog-VanDuarte-1-1.jpg',
                marca: 'PAPAYA',
            },{
                id: 4,
                imagem: 'https://static.glamurama.uol.com.br/2014/11/AMARO-BEACHWEAR-5.jpg',
                marca: 'MIIA',
            }],
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

                        <View key={destaque.id}>

                            <View style={[styles.containerImagem, {width: this.state.deviceWidth}]}>
                                <ImageBackground source={{uri: destaque.imagem}} style={styles.imagemBackground} ref="image" />
                            </View>

                            <View style={styles.infosBanner}>

                                <View style={styles.infoLabel}>
                                    <Text style={styles.infoText}>
                                        {destaque.marca}
                                    </Text>
                                </View>


                            </View>
                        </View>
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