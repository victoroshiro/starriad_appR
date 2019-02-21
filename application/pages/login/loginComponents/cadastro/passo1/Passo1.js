import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TextInput, Alert, Image, Modal,

} from 'react-native';
import { CheckBox } from 'react-native-elements'
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';
import LoginService from "../../../../../services/login/login-service";


export default class Passo1 extends React.Component {
    constructor(props) {
        super(props);


        let {height} = Dimensions.get('window');
        super(props);
        let user = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
        };

        let error = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
        };

        this.state = {
            user: user,
            error: error,
            hidePass: true,
            loading: false,
            checked: false,
        }
    }

    render() {
        return (
            <View>
                {this.buscaCnpj()}
            </View>
        )
    }

    buscaCnpj() {
        return (
            <View style={styleCadastro.inputContainer}>


                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.nome !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.nome = text;
                            this.state.error.nome = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome Completo"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.nome}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.email !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.email = text;
                            this.state.error.email = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.email}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.telefone !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.telefone = text;
                            this.state.error.telefone = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Telefone"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.telefone}</Text>
                </View>

                
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.senha !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.state.user.senha = text;
                            this.state.error.senha = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.senha}</Text>
                </View>
                <View style={styleCadastro.inputContainer}>

                    <View style={{flex: 1, flexDirection: 'row', width: "100%"}}>
                        <CheckBox
                            center
                            uncheckedColor='#fff'
                            checked={this.state.checked}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={() => this.setState({checked: !this.state.checked})}
                        />
                        <TouchableOpacity onPress={()=>{this.openModal()
                        }}><Text style={{color: "#fff", marginTop: 15}}>Termo de uso e política de privacidade</Text></TouchableOpacity>
                    </View>
                </View>

                
                <View style={[styleCadastro.btnEspaco]}>
                    <TouchableOpacity onPress={() => {
                        this.cadastrar();
                    }}>

                      
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                <Text style={[style.textBtn, styleCadastro.text2]}>Cadastrar</Text>
                         
                            </View>

                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible == true}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <TouchableOpacity onPress={() => {
                            this.setState({modalVisible: false});


                        }}>
                            <Image resizeMode={'contain'} style={{imgSeta: {
                                    width: 22,
                                    height: 22,
                                    tintColor: '#000',
                                },}}
                                   source={require('../../../../../assets/imgs/png/icons/caret-left.png')}/>
                        </TouchableOpacity>
                        <View>
                            <View style={{alignItems: "center", width: "100%"}}>
                                <Text style={{fontSize: 20}}>Termos de uso</Text>
                            </View>
                            <ScrollView >
                                <Text style={{fontSize: 10}}>
                                    TERMOS GERAIS E CONDIÇÕES DE USO{"\n"}
                                    Este instrumento contém os termos gerais e condições de uso dos sites eletrônicos “www.starriad.com.br” e “www.starriad.com (em conjunto, os “Websites”, ou, individual e indistintamente, o “Website” ou “Plataforma Administrativa”), bem como dos serviços oferecidos por meio de tais Websites (os “Serviços”, “Serviços de Mídia Digital”), no âmbito da Plataforma StarriAd Mídia Digital (a “Plataforma”). Esses Termos de Uso incluem a nossa Política de Privacidade, que contém as regras e condições do uso que fazemos dos seus dados pessoais.
                                {"\n"}
                                    1 - O Serviço dos Websites
                                    Os Websites são operados pela StarriAD Mídia Digital LTDA (“StarriAD”, “Nós”, “Nos” ou “Nosso”, “Conosco”). “Você”, “Seu”, “Sua”, “Usuário” ou “Cliente” significam a parte fazendo uso dos Websites e/ou dos Serviços. Através do Website, a StarriAD oferece a Você acesso a dados, informações referentes à Plataforma.
                                {"\n"}

                                    2 - Uso do Website e Aceitação das Condições de Uso {"\n"}
                                    2.1. O Seu uso dos Serviços e dos Websites é regido por estes Termos Gerais e Condições de Uso (os “Termos Gerais”, “Termos de Uso”), que Você deve ler atentamente antes de utilizar os Websites e os Serviços.
                                    {"\n"} 2.2. Registrando-se, acessando e utilizando os Websites de qualquer forma, incluindo navegação, visualização, download, geração, recebimento e transmissão de quaisquer dados, informações ou mensagens de ou para os Websites, Você manifesta Sua expressa concordância, em Seu nome e em nome da Sua empresa ou em nome do Seu empregador para com estes Termos Gerais, conforme periodicamente atualizados, seja Você usuário registrado dos Serviços ou não, pelo que Você se compromete a respeitar e cumprir todas as disposições aqui contidas, bem como as disposições dos avisos legais que regulam a utilização dos Websites e dos Serviços.
                                    {"\n"}2.3. Estes Termos Gerais constituem um contrato vinculante entre a StarriAD e Você. Se Você não concorda com estes Termos Gerais, não utilize os Websites ou os Serviços.
                                    {"\n"}2.4. A StarriAD poderá atualizar ou alterar estes Termos Gerais a qualquer tempo. Após a publicação da alteração destes Termos de Uso nos Websites, o Seu uso continuado dos Serviços ou dos Websites constitui Sua expressa concordância para com os Termos de Uso, conforme alterados. Acesse periodicamente este Termo de Uso e mantenha-se sempre atualizado.
                                    {"\n"}3 - Acesso ao Website e aos Serviços
                                    {"\n"}3.1. A fim de acessar o Website e utilizar os Serviços, Você deve manter e operar o software e hardware necessários para tal, visto que a plataforma funciona com exposição de vídeos de cunho publicitário que demandarão gravação, edição e publicação na plataforma administrativa da StarriAD. Você é o único e exclusivo responsável por adquirir, instalar e manter todo e qualquer software e hardware necessários para acessar o Website e utilizar os Serviços de Mídia Digital da StarriAD. Nós não nos responsabilizamos por quaisquer dificuldades técnicas que Você enfrente decorrentes do uso destes softwares e hardwares.

                                    {"\n"}4 - Processo de Cadastro
                                    {"\n"}4.1. Para utilizar os Serviços de Mídia Digital da StarriAD será obrigatório o cadastro da empresa anunciante e seu respectivo responsável.
                                    {"\n"}4.2. Ao se cadastrar, Você concorda em fornecer informações verdadeiras, corretas, atualizadas e completas (os “Dados de Cadastro”) conforme solicitados no formato de cadastro disponibilizado a Você por meio dos Websites, sob pena de responsabilização nos termos da legislação aplicável vigente.
                                    {"\n"}4.3. Nós podemos depender dos seus Dados de Cadastro para avaliar Sua situação de negócio, para fornecer informação sobre os Nossos Serviços (em acordo com Nossa Política de Privacidade), ou, alternativamente, para identificar e/ou entrar em contato com Você. Se Seus Dados de Cadastro não forem verdadeiros e corretos, ou estiverem desatualizados e incompletos, a StarriAD poderá encerrar o Serviço ou encerrar a Sua conta e todos os usos correntes ou futuros dos Serviços (ou qualquer parte deles).
                                    {"\n"}4.4. Você receberá uma senha e designação de conta no momento em que completar o processo de cadastro, sendo certo que tais dados são pessoais e intransferíveis (os “Dados de Acesso”). Você é o único e exclusivo responsável por manter a confidencialidade de tais dados, bem como por todas as atividades que ocorrerem mediante o emprego de seus Dados de Acesso.

                                    {"\n"}4.5. Além disso, Você obriga-se a:

                                    {"\n"} (i) notificar imediatamente a StarriAD de qualquer uso não autorizado de seus Dados de Acesso ou qualquer outra violação de segurança, incluindo, mas não se limitando, o extravio, perda ou roubo de seus Dados de Acesso; e
                                    {"\n"} (ii) efetuar logout em sua conta ao final de cada sessão de utilização.
                                    {"\n"} 4.6. Nós não seremos responsáveis por qualquer perda ou dano decorrente da Sua falha em cumprir ao que estabelece esta seção.

                                    {"\n"} 5 - Alterações nos Serviços ou nos Websites
                                    {"\n"} 5.1. A StarriAD reserva-se o direito de modificar, suspender, terminar ou descontinuar qualquer aspecto dos Websites a qualquer tempo, incluindo a disponibilidade de quaisquer Serviços, informações, características ou funcionalidades acessíveis por meio dos Websites. Nós também podemos impor limitações a certas características, funcionalidades ou serviços ou restringir Seu acesso a partes ou à totalidade dos Websites e/ou dos Serviços sem prévia notificação e sem que isso implique em qualquer responsabilidade Nossa por qualquer prejuízo que venha a sofrer.

                                    {"\n"}5.2. Quaisquer melhorias ou adições aos Websites ou Serviços estarão sujeitos a estes Termos de Uso, a não ser que Nós estabeleçamos expressamente de outra forma. Nós podemos introduzir novos conjuntos específicos de termos e condições para Serviços específicos, conforme apropriado, ou emendar termos e condições específicos existentes.

                                    {"\n"} 5.3. A StarriAD reserva-se o direito de, a qualquer tempo ou título, controlar e/ou alterar a aparência, o desenvolvimento e/ou operações do Website a Nosso exclusivo critério, bem como estabelecer e modificar os procedimentos para o Seu contato Conosco, sem a necessidade de notificação prévia.

                                    {"\n"} 6 - Propriedade Intelectual
                                    {"\n"} 6.1. Os Websites, os Serviços, suas estruturas e todas as funcionalidades nelas contidas, toda a informação, dados, textos, imagens e gráficos e todos os componentes empregados nos Websites (“Conteúdo”) são protegidos por direitos autorais e outros direitos de propriedade intelectual. Você reconhece que a StarriAD detém todos os direitos, títulos e interesses relativos ao Conteúdo e que Você não vai, através do uso do Website, adquirir quaisquer direitos próprios nele.

                                    {"\n"}6.2. Nós somos proprietários de todos os dados provenientes da Nossa operação dos Websites e Você não deve se opor a qualquer utilização de tais dados por Nós.

                                    {"\n"}6.3. Você pode imprimir uma cópia de sessões individuais dos nossos Websites para Seu uso pessoal somente, desde que nenhuma notificação de direitos autorais ou de propriedade seja removida. As informações contidas nos Websites e seu Conteúdo não devem ser modificados de outra forma, reproduzidos (em todo ou em parte), distribuídos, transmitidos para qualquer outra pessoa ou entidade, incorporados em qualquer documento ou outro material ou linkados a (por meio eletrônico ou de outra forma) sem a expressa autorização por escrito da StarriAD, exceto conforme expressamente licenciado sob este Termos de Uso Geral.

                                    {"\n"} 6.4. As licenças para o uso de Nossos Websites são concedidas de forma não exclusiva, intransferível, não sublicenciável, sendo a mesma revogável a qualquer momento em relação a todo e qualquer Conteúdo fornecido a Você para o uso exclusivo no processamento de sistemas internos. A StarriAD não concede nenhuma outra licença ou autorização sobre os seus direitos de propriedade industrial e intelectual ou sobre qualquer outra propriedade ou direito relacionado com os Serviços e/ou os Websites. A StarriAD se reserva todo e qualquer direito sobre suas marcas registradas, direitos autorais, e outros direitos de propriedade intelectual, disponíveis em Nossos Websites ficando vedado sua utilização sem a Nossa expressa autorização, sob pena de configuração de ilícitos civis e criminais.

                                    {"\n"} 7.1. Como titular de uma conta na StarriAD Você pode enviar Conteúdo para o Serviço, incluindo vídeos e descrições dos benefícios aos usuários. Você compreende que a StarriAD não garante a confidencialidade em relação a qualquer Conteúdo que Você enviar.
                                    {"\n"} 7.2. Você será o único responsável por seu Conteúdo e pelas conseqüências de enviá-lo ou publicá-lo. Você afirma, declara e garante que possui ou tem as licenças necessárias, direitos, autorizações e permissões para publicar o Conteúdo que Você enviar, e Você autoriza a StarriAD a usar todas as patentes, marcas registradas, segredos de negócio, direitos autorais ou outros direitos de propriedade e tais Conteúdos para a publicação no Serviço de acordo com estes Termos de Serviços.
                                    {"\n"} 7.3. Para fins de esclarecimento, Você mantém todos os direitos de propriedade sobre seu Conteúdo. Entretanto, ao enviar o Conteúdo para a StarriAD, Você, pelo presente, cede a Nós licença mundial, não exclusiva, isenta de royalties, passível de ser sublicenciada e transferida, para usar, reproduzir, distribuir, preparar trabalhos derivados, exibir e executar o Conteúdo em conexão com o Serviço. Você também cede a todos os usuários do Serviço uma licença não-exclusiva para acessar o seu Conteúdo por meio do Serviço, e para usar, reproduzir, distribuir, exibir e executar tal Conteúdo conforme permitido pela funcionalidades do Serviço e de acordo com estes Termos de Serviço.
                                    {"\n"}7.4. Você afirma que não enviará material protegido por direitos autorais, por segredo de negócio ou de qualquer outra forma protegido por direitos de terceiros, a menos que Você tenha permissão do legítimo proprietário do material ou caso Você esteja legalmente autorizado a publicar o material e ceder a StarriAD todos os direitos de licença aqui concedidos.
                                    {"\n"} 7.5. Adicionalmente, Você também concorda que não irá submeter no Serviço qualquer Conteúdo ou outro material que seja contrário às Diretrizes abaixo:
                                    Nudez ou conteúdo sexual
                                    A StarriAD não permitirá conteúdo pornográfico ou sexualmente explícito. Se essa descrição se aplica ao seu Conteúdo, não aplique em nossa Plataforma para criação de campanhas.
                                    Conteúdo de incitação ao ódio {"\n"}
                                    Dentre os diversos conteúdos publicitários nossa Plataforma permite a livre expressão como forma de comunicação. No entanto, não aceitamos conteúdo que promova ou apoie violência contra indivíduos ou grupos com base em raça ou origem étnica, religião, deficiência, gênero, idade, nacionalidade, status de veterano ou orientação sexual/identidade de gênero, ou cujo intuito principal seja incitar o ódio com base nessas características.
                                    Conteúdo prejudicial {"\n"}
                                    Não publique vídeos com conteúdo que insite a violência, que incentive outras pessoas a realizar atos que possam gerar lesão corporal ou que possa denegrir a imagem de uma pessoa, empresa, marca, concorrente, etc.
                                    {"\n"}

                                    Direitos Autorais {"\n"}
                                    Respeite os direitos autorais. Envie apenas vídeos feitos por você ou dos quais tenha os direitos de uso. Isso significa que não é permitido enviar vídeos que não tenham sido feitos por você, por uma empresa contratada por você ou utilizar conteúdo de propriedade de terceiros, como músicas, trechos de programas protegidos por direitos autorais ou vídeos feitos por outros anunciantes sem as autorizações necessárias. A Plataforma permite aos usuários compartilhar os conteúdos que lhes convêm. Não utilize um conteúdo que por ventura venha a receber por outros meios, compartilhado por outros usuários, com o intuito de ter vantagem ou se aproveitar de conteúdo já criado para a sua campanha publicitária. Caso seja denunciado, sua conta será banida da Nossa plataforma.
                                    {"\n"}
                                    Falsificação de identidade {"\n"}
                                    Contas criadas com o intuito de se passar por outra empresa, devidamente identificadas, serão banidas e poderão responder judicialmente por falsificação de identidade.
                                    {"\n"}


                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    openModal(){
        this.setState({modalVisible: true});

    }

    cadastrar() {

        this.setState({
            loading: true
        });

        if(this.state.checked == true) {

            LoginService.cadastrar(this.state.user).then((response) => {

                if (response.data !== false) {

                    this.props.navigation.navigate('Main');
                    this.setState({
                        loading: false
                    });
                }

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
    }


}


