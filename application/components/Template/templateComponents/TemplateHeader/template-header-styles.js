import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    template_header_view: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        overflow: 'visible'
    },

    template_header_content: {
        width: '100%',
        backgroundColor: '#002f49',
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: '#002f49'
    },

    template_device_status_bar: {
        width: '100%',
        height: 24,
        position: 'relative',
        display: 'flex',
        backgroundColor: '#002f49',
    },

    template_header_viewport: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        height: 50,
        backgroundColor: '#002f49',
        flexDirection: 'row'
    },
    template_header_action: {
        width: 50,
        height: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    template_header_action_touchable: {
        width: 50,
        height: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    template_header_action_icon: {
        width: 20,
        height: 20,
        position: 'relative',
        tintColor: "#fff"
    },

    template_header_logo: {
        width: 'auto',
        position: 'relative',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    template_header_logo_content: {
        width: '100%',
        height: 50,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    template_header_logo_img: {
        width: 76.2,
        height: "80%",
    },


    template_header_settings: {
        width: 200,
        height: 300,
        position: 'absolute',
        right: 0,
        top: 24,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        display: 'flex',
    },
    templates_header_settings_header: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    template_header_settings_head: {
        width: '100%',
        position: 'relative',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    template_header_settings_head_title: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'montserrat-medium'
    },
    template_header_settings_menu: {
        width:' 100%',
        display: 'flex',
        flex: 1,
        position: 'relative',
    },
    template_header_settings_menu_scrollview: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },
    template_header_settings_menu_setting: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: '#e6e6e6'
    },
    template_header_settings_menu_settings_touchable: {
        position: 'relative',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    template_header_settings_menu_setting_text: {
        fontSize: 15,
        color: '#636563',
        fontFamily: 'montserrat-regular'
    },

    template_header_menu: {
        width: 200,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        position: 'absolute',
        left: 0,
        top: 24,
    },
    template_header_menu_content: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    template_header_menu_head: {
        width: '100%',
        height: 80,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    template_header_menu_header_searcher: {
        width: '90%',
        height: 35,
        position: 'relative',
        display: 'flex',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingLeft: 10,
        paddingRight: 5,
    },
    template_header_menu_options: {
        display: 'flex',
        flex: 1,
        position: 'relative',
    },
    template_header_menu_options_scrollview: {
        flex: 1,
        position: 'relative',
        flexDirection: 'column'
    },

    template_header_menu_option: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        flexDirection: 'column'
    },
    template_header_menu_option_label: {
        width: '100%',
        position: 'relative'
    },
    template_header_submenu_options: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    template_header_submenu_scrollview: {
        width: '100%',
    },
    template_header_submenu_view: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column'
    },
    template_header_submenu_option: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        transform: [{ translateY: 1 }],

    },
    template_header_submenu_option_touchable: {
        width: '100%',
        position: 'relative',
        paddingRight: 15,
        paddingLeft: 25,
        paddingVertical: 10,
    },
    template_header_submenu_option_label: {
        fontSize: 15,
        color: '#636563',
        fontFamily: 'montserrat-regular'
    },


    template_header_menu_option_touchable: {
        position: 'relative',
        paddingHorizontal: 15,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    template_header_menu_option_text: {
        fontSize: 15,
        color: '#636563',
        flex: 1,
        fontFamily: 'montserrat-regular'
    },
    template_header_menu_option_icon: {
        width: 18,
        height: 18,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    template_header_menu_option_ico: {
        width: 10,
        height: 10,
        tintColor: '#636563'
    },

});

export default styles;