import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import {Platform, TouchableOpacity, View} from "react-native";
import TabStyles from './tabs-styles';
import {TabsConfig} from "./tabs-config";
import Explorer from "../../pages/explorer/Explorer";

export default class SystemTabs extends React.Component {

    state = {
        selectedTab: this.props.selectedTab ? this.props.selectedTab : '',
    };

    platformName = Platform.OS === 'ios' ? 'ios' : 'md';

    _selectTab = (tabName) => {
        this.setState({selectedTab: tabName});
    };

    componentDidMount() {
    }

    render() {
        let buttons = [
            {
                slug: 'feed',
                icon: this.platformName === 'ios' ? (this.state.selectedTab === 'feed' ? 'ios-paper' : 'ios-paper-outline') : 'md-paper',
                className: 'Feed',
                selected: this.state.selectedTab === 'feed'
            },
            {
                slug: 'explorer',
                icon: this.platformName === 'ios' ? (this.state.selectedTab === 'explorer' ? 'ios-search' : 'ios-search-outline') : 'md-search',
                className: 'Explorer',
                selected: this.state.selectedTab === 'explorer'
            },
            {
                slug: 'notifications',
                icon: this.platformName + (this.state.selectedTab === 'notifications' ? '-notifications' : '-notifications-outline'),
                className: 'Notificacoes',
                selected: this.state.selectedTab === 'notifications'
            },
            {
                slug: 'profile',
                icon: this.platformName === 'ios' ? (this.state.selectedTab === 'profile' ? 'ios-person' : 'ios-person-outline') : 'md-person',
                className: 'Perfil',
                selected: this.state.selectedTab === 'profile'
            }
        ];
        return (
            <View style={TabStyles.container}>
                {buttons.map((tab) => (
                    <View style={[TabStyles.iconContainer, (tab.selected ? TabStyles.tabSelected : TabStyles.tabUnselected)]}
                          key={tab.slug}>
                        <TouchableOpacity style={TabStyles.button} onPress={(a) => {
                            this.props.navigation.navigate(tab.className, {selectedTab: tab.slug});
                        }}>
                            <Icon name={tab.icon}
                                  size={TabsConfig.iconSize}
                                  color={tab.selected ? TabsConfig.secondaryColor : TabsConfig.primaryColor}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        )
    }

};