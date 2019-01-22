import React from 'react';
import {ActivityIndicator, ScrollView, View, RefreshControl} from 'react-native';
import styles from './Explorer-styles';
import TopExplorer from './explorerComponents/top-explorer/top-explorer';
import BodyExplorer from './explorerComponents/body-explorer/body-explorer';
import SystemTabs from "../../components/tabs/SystemTabs";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import Template from "../../components/Template/Template";
import { withNavigation } from 'react-navigation';

export default class Explorer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            error: false,
            refreshing: false,
        };
    }

    // Faz o refresh da pagina
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.componentDidMount();
            this.setState({refreshing: false});
        }, 500);
    };

    componentDidMount(){
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 500);
    }

    renderPage(){
        if(this.state.loading){
            return <ActivityIndicator style={styles.loadingPager} size="large" color="#7417fb" />;
        }
        if(this.state.error){
            return <Text style={style.error}>Ops... Algo deu errado =(</Text>
        }

        return (

            // Faz o refresh da pagina
            <ScrollView >

                <ScrollView style={styles.containerScroll}>
                    <View style={styles.containerExplorer}>

                        {/* Imagem de capa e nome da marca */}
                        <TopExplorer/>

                        {/* Corpo do Explorer, contém os dados de perfil e os produtos da empresa */}
                        <BodyExplorer callBack={this.toProduto.bind(this)}/>
                    </View>
                </ScrollView>
            </ScrollView>
        );
    }

    toProduto(page) {
        this.props.navigation.navigate(page)
    }

    render_page() {
        return (
            <View style={{flex: 1}}>
                {this.renderPage()}
            </View>
        );
    }

    render(){
        return(
            <Template
                navigation={ this.props.navigation}
                render={ this.render_page() }/>
        );
    }

}

