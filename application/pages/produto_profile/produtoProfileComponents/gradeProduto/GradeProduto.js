import React from 'react';
import {View, Text, Image, TouchableOpacity, Animated, TextInput} from 'react-native';
import {style, DetalhesPedidoStyles} from './GradeProduto-styles';
import BotoesCarrinho from '../botoesCarrinho/BotoesCarrinho';


export default class GradeProduto extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            productInfo: props.productInfo,
            variantes: props.variantes,
            grade: props.grade,
            qtd: props.qtd,
            animation_icon: new Animated.Value(0),
            animation_grade: new Animated.Value(0),
            indexActived: null,
        }
    }

    componentDidMount(){
        console.log('this.state.variantes: ', this.state.variantes);
    }

    /* Função responsável por arredondar as casas decimais */
    round(numero, precisao){
        let fator = Math.pow(10, precisao);
        numero = numero * fator;
        return Math.round(numero) / fator;
    };

    /* Função responsável por inserir a quantidade dos produtos */
    addQtd(cor){

        /* Validação dos campos */
        cor.grade.subTotal = 0;
        cor.grade.subQtd = 0;
        this.state.productInfo.qtdTotal = 0;
        this.state.productInfo.valorTotal = 0;

        this.setState({
            productInfo: this.state.productInfo
        });

        /* Calculo de sub quantidades */
        cor.grade.forEach((item) => {
            item.item_quantidade ? undefined : item.item_quantidade = 0;
            cor.grade.subQtd += parseFloat(item.item_quantidade);
            cor.grade.subTotal += item.item_quantidade * parseFloat(item.variante_preco_atacado);
            cor.grade.subTotal = this.round(cor.grade.subTotal, 2);

            this.setState({
                productInfo: this.state.productInfo
            });
        });

        /* Cálculo total*/
        this.state.productInfo.cores.forEach((cor) => {
            if (cor.grade.subTotal || cor.grade.subQtd) {
                this.state.productInfo.qtdTotal += parseInt(cor.grade.subQtd);
                this.state.productInfo.valorTotal += parseFloat(cor.grade.subTotal);
                this.state.productInfo.valorTotal = this.round(this.state.productInfo.valorTotal, 2);

                this.setState({
                    productInfo: this.state.productInfo
                });
            }
        });
    };

    /* Função responsável em realizar operações de um item */
    operator(indexGrade, indexCor, cor, tipo){

        console.log('indexGrade: ', indexGrade);
        console.log('indexCor: ', indexCor);
        console.log('cor: ', cor);
        console.log('tipo: ', tipo);

        switch (tipo) {
            case 'sum':
                if (this.state.productInfo.cores[indexCor].grade[indexGrade].item_quantidade < this.state.productInfo.cores[indexCor].grade[indexGrade].variante_quant_disponivel) {
                    this.state.productInfo.cores[indexCor].grade[indexGrade].item_quantidade++;
                    this.setState({
                        productInfo: this.state.productInfo
                    });
                }
                break;
            case 'sub':
                if (this.state.productInfo.cores[indexCor].grade[indexGrade].item_quantidade > 0) {
                    this.state.productInfo.cores[indexCor].grade[indexGrade].item_quantidade--;
                    this.setState({
                        productInfo: this.state.productInfo
                    });
                }
                break;
        }
        this.addQtd(cor);
    };

    render() {
        return (
            this.renderPage()
        )
    }

    renderPage(){
        return(
            <View>
                <View style={style.containerPage}>
                    <View style={style.contentHeaderGrade}>
                        <View style={style.containerTitleGrade}>
                            <Text style={style.textHeaderGrade}>
                                Cores
                            </Text>
                        </View>

                        {this.state.grade.map((value, index) => (
                            <View key={index} style={style.containerTamanhosNomes}>
                                <Text style={style.textHeaderGrade}>
                                    {value.tamanho_nome}
                                </Text>
                            </View>
                        ))}

                        <View style={style.containerTitleGrade}>
                            <Text style={style.textHeaderGrade}>
                                Qtd
                            </Text>
                        </View>
                    </View>

                    <View style={style.containerGradeVariantes}>
                        {this.renderVariantes()}
                    </View>

                    <View style={style.contentHeaderGrade}>
                        <View style={[style.containerTamanhosNomes, {flex: 3, padding: 10, alignItems: 'flex-start'}]}>
                            <Text style={style.textHeaderGrade}>
                                Total:
                            </Text>
                        </View>

                        <View style={[style.containerTamanhosNomes, {padding: 10}]}>
                            <Text style={[style.textHeaderGrade, {fontWeight: 'bold'}]}>
                                {this.state.productInfo.qtdTotal}
                            </Text>
                        </View>

                        <View style={[style.containerTamanhosNomes, {flex: 2, marginRight: 0, padding: 10}]}>
                            <Text style={[style.textHeaderGrade, {fontWeight: 'bold'}]}>
                                R$ {this.state.productInfo.valorTotal}
                            </Text>
                        </View>
                    </View>
                </View>
                {this.renderBotoes()}
            </View>
        );
    }

    // Renderiza na tela as variantes do produto e sua grade de tamanhos
    renderVariantes(){
        return(
            this.state.variantes.map((variante, indexV) => (

                <View key={indexV} style={[style.contentHeaderGrade, {marginBottom: 2}]}>

                    <View style={style.corVariante}>
                        {this.getCor(variante.cor_valor, variante.image_url)}
                    </View>

                    {variante.grade.map((grades, index) => (

                        <View key={index} style={style.containerGradeTamanhos}>

                            <View style={DetalhesPedidoStyles.containerBtnMaisMenosQtd}>
                                <TouchableOpacity onPress={() => {
                                    // grades.variante_quant_disponivel == 0 ? null : this.sumGrade(grades)
                                    grades.variante_quant_disponivel === 0 ? null : this.operator(variante.nomes_grades.indexOf(grades.tamanho_nome), indexV, variante, 'sum')
                                }}
                                                  style={[DetalhesPedidoStyles.menosQtdMais, {marginBottom: 5}]}>
                                    <Text style={[DetalhesPedidoStyles.textMenosMais, grades.variante_quant_disponivel == 0 ? DetalhesPedidoStyles.textBloqueado : null]}>
                                        +
                                    </Text>
                                </TouchableOpacity>

                                <View style={[DetalhesPedidoStyles.menosQtdMais, {backgroundColor: '#fff', borderColor: '#e6e6e6', borderWidth: 1}]}>
                                    <View style={style.containerInput}>
                                        <TextInput
                                            style={{textAlign: 'center', borderWidth: 0}}
                                            keyboardType='numeric'
                                            maxLength={3}
                                            onChangeText={(text) => this.calc(text, grades)}
                                            value={grades.item_quantidade}
                                            underlineColorAndroid='#FFF'
                                            onFocus={() => this.focus(grades)}
                                            onBlur={() => this.blur(grades)}
                                            editable={grades.variante_quant_disponivel === 0 ? false : true}
                                            defaultValue={grades.item_quantidade === 0 || grades.item_quantidade == '' ? '0' : grades.item_quantidade.toString()}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => {
                                    // grades.variante_quant_disponivel === 0 ? null : this.subtractGrade(grades)
                                    grades.variante_quant_disponivel === 0 ? null : this.operator(variante.nomes_grades.indexOf(grades.tamanho_nome), indexV, variante, 'sub')
                                }}
                                                  style={[DetalhesPedidoStyles.menosQtdMais, {marginTop: 5, marginBottom: 5}]}>
                                    <Text style={[DetalhesPedidoStyles.textMenosMais, grades.variante_quant_disponivel === 0 ? DetalhesPedidoStyles.textBloqueado : null]}>
                                        -
                                    </Text>
                                </TouchableOpacity>

                                <View style={[DetalhesPedidoStyles.qtdDisponivel]}>
                                    {
                                        // variante.grade[variante.nomes_grades.indexOf(grades.tamanho_nome)].variante_quant_disponivel > 0 &&

                                        <Text style={[DetalhesPedidoStyles.textQtdDisponivel]}>
                                            {
                                            // variante.grade[variante.nomes_grades.indexOf(grades.tamanho_nome)].variante_quant_disponivel
                                            // - variante.item_quantidade
                                            } Disp.
                                        </Text>
                                    }

                                </View>
                            </View>
                        </View>
                    ))}

                    <View style={[style.corVariante, {marginRight: 0}]}>
                        <Text style={{fontSize: 15}}>
                            {variante.grade.subQtd}
                        </Text>
                    </View>
                </View>
            ))
        );
    }

    renderBotoes(){
        return(
          <BotoesCarrinho qtd={this.state.productInfo.qtdTotal} />
        );
    }

    blur(grade) {
        if (grade.item_quantidade == 0 || grade.item_quantidade == '0' || grade.item_quantidade == 'NaN') {
            grade.item_quantidade = 0
        }
        this.setState({variantes: this.state.variantes});
    }

    focus(grade) {
        if (grade.item_quantidade == 0 || grade.item_quantidade == '0') {
            grade.item_quantidade = ''
        }
        this.setState({variantes: this.state.variantes});
    }

    calc(valor, grade) {
        parseInt(valor);
        if (valor > grade.variante_quant_disponivel) {
            grade.item_quantidade = valor
        } else {
            grade.item_quantidade = valor
        }
        this.setState({variantes: this.state.variantes});
    }

    getCor(cor, image) {
        if (cor !== '') {
            return (
                <View style={[style.corContainer, {backgroundColor: cor}]} />
            )
        } else if (image !== '') {
            return (
                <Image style={style.imageContainer} resizeMode={'cover'}
                       source={{uri: image}}/>
            )
        }
    }
}

