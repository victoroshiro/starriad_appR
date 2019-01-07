import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";


const LoginService = {

    signin(data){
        return axios.post(API_URL_HOUPA + 'users/loginApp', data);
    },

    cadastrar(data) {
        let body = {
            user_data: data.user,
            empresa_data: data.empresa,
            endereco_data: data.endereco,
            favoritos: data.favoritos
        };
        return axios.post(API_URL_HOUPA + 'cadastro/setCadastro', body);
    },

    checkUserRecoverService(data) {
        return axios.post(API_URL_HOUPA + 'login/check_user_recover', data);
    },

    startRecoverService(data) {
        return axios.post(API_URL_HOUPA + 'login/start_recover', data);
    },

    checkCodeService(data) {
        return axios.post(API_URL_HOUPA + 'login/check_code_recover', data);
    },

    recoverPasswordService(data) {
        return axios.post(API_URL_HOUPA + 'login/recover_password', data);
    },

    signout(){
        return axios.post(API_URL_HOUPA + 'routes/signout');
    }

};

export default LoginService;