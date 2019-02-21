import {StyleSheet} from 'react-native';


export const style = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        flex:1,
        width: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        zIndex: 9999999999,
    },
    wraper_menu: {
        padding: 15,
        paddingTop: 50,
    },
    header_menu: {
        // flex:1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    header_menu_left: {
        width: "25%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_menu_left_image: {
        width: 35,
        height: 35,
        aspectRatio: 1,
        marginBottom: 8,
        tintColor: '#fff'
    },

    header_menu_left_status: {
        width: "40%",
        height: "40%",
        backgroundColor: '#1bc4e5',
        borderRadius: 45,
        alignSelf: 'flex-end',
        justifyContent: 'center',

    },
    text_status: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 9,
        textAlign: 'center',
    },
    header_menu_left_text: {
        color: '#fff',
        fontSize: 14,
    },

    header_menu_center: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },

    header_menu_center_image: {
        width: 80,
        aspectRatio: 1,
        borderRadius: 100,
    },


    header_menu_right: {
        width: "25%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_right: {
        color: '#fff',
        fontSize: 14,

    },
    header_name: {
        width: '100%',
        display: 'flex',
        marginTop: 20,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_name_text: {
        color: '#fff',
        fontSize: 25,
    },


    body_menu_content_db_border: {
        borderColor: '#404040',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    body_menu_content: {
        borderColor: '#404040',
        borderTopWidth: 1,
    },

    body_menu: {
        // backgroundColor: 'red',
        height:70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',

    },

    body_control_icon:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    body_menu_down: {
        width: 15,
        height: 15,
        aspectRatio: 1,
        marginRight: 20
    },
    body_menu_icon: {
        width: 22,
        height: 22,
        aspectRatio: 1,
        marginLeft: 15,
        tintColor: '#fff'
    },
    body_menu_text: {
        color: '#fff',
        fontSize: 15,
        marginLeft:18
    },

    sub_menu_last: {
        marginBottom: 50,
    },
    sub_menu: {
        width: "80%",
        alignSelf:'flex-end',
        paddingRight:10,
        paddingLeft:10,

    },

    body_sub_menu: {
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop: 10,
        marginBottom: 10,

    },
    text_sub_menu: {
        color: "#7f7f7f",
        marginBottom: 10,
    },
    number_sub_menu: {
        color: "#fff",
        fontWeight:'bold'
    },

    footer:{
        height:70,
        flexDirection:'row',
        alignItems:'center'
    },

    footer_image:{
        width: 22,
        height: 22,
        aspectRatio: 1,
        marginLeft: 25

    },

    footer_text:{
        color: '#fff',
        fontSize: 15,
        marginLeft:18
    },

});