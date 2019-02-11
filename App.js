import React from 'react';
import {createStackNavigator} from 'react-navigation';
/* Import das paginas */
import Explorer from "./application/pages/explorer/Explorer";
import ProdutoProfile from "./application/pages/produto_profile/ProdutoProfile";
import ticketList from "./application/pages/ticket/ticketList";
import busca from "./application/pages/busca/busca";


import Login from "./application/pages/login/Login";



export default createStackNavigator({

        'Main': {
            screen: Explorer,
        },
        'Login': {
            screen: Login
        },
        'ProdutoProfile': {
            screen: ProdutoProfile
        },
        'ticketList': {
            screen: ticketList

        },
        'busca': {
            screen: busca

        }
    },
    {
        initialRouteName: 'Login',

        navigationOptions: {
            header: null
        }
    });

