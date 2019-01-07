import React from "react";
import {View, Text} from 'react-native';
import {Tabs} from "../../components/tabs/SystemTabs";
import Template from "../../components/Template/Template";

export default class TestesPage extends React.Component{

    _render_page = (() => {
        return(
            <View>
                <Text> CONTENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT </Text>
                <Text> CONTENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT </Text>
                <Text> CONTENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT </Text>
                <Text> CONTENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT </Text>
                <Text> CONTENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT </Text>
                <Text> CONTENTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT </Text>
            </View>
        );
    });


    render(){
        return(

            <Template
                navigation={ this.props.navigation}
                render={ this._render_page() }
                header={ true }
                footer={ false }
                scrollview={ true } />

        );
    }

}