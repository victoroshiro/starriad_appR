import React from 'react';
import {createStackNavigator} from 'react-navigation';
/* Import das paginas */
import Explorer from "./application/pages/explorer/Explorer";
import ProdutoProfile from "./application/pages/produto_profile/ProdutoProfile";

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
    },
    {
        initialRouteName: 'Login',

        navigationOptions: {
            header: null
        }
    });

