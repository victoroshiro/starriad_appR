import { StyleSheet } from "react-native";

/* Criação dos estilos */
const styles = StyleSheet.create({

    template_footer: {
        width: '100%',
        height: 50,
        position: 'relative',
        backgroundColor: '#002035',
        borderTopWidth: 1,
        borderColor: '#002035'
    },
    template_footer_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },

    template_footer_action: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    template_footer_action_touchable: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    template_footer_action_icon: {
        width: 22,
        height: 22,
        tintColor: "#fff"
    },
    template_footer_action_profile: {
        width: 27,
        height: 27,
        borderRadius: 3,
        position: 'relative',
        display: 'flex',
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    template_footer_action_profile_image: {
        width: '100%',
        aspectRatio: 1,
    },

});

/* Exportação dos estilos */
export default styles;