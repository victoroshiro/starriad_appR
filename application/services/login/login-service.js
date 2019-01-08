import axios from "axios";
import {API_URL_STAR} from "../../configs/api/current";

const LoginService = {

    signin(data){
        return axios.post(API_URL_STAR + 'users/loginApp', data)
    },

    cadastrar(data) {
        return axios.post(API_URL_STAR + 'users/cadastrarApp', data);
    },

    checkUserRecoverService(data) {
        return axios.post(API_URL_STAR + 'login/check_user_recover', data);
    },

    startRecoverService(data) {
        return axios.post(API_URL_STAR + 'login/start_recover', data);
    },

    checkCodeService(data) {
        return axios.post(API_URL_STAR + 'login/check_code_recover', data);
    },

    recoverPasswordService(data) {
        return axios.post(API_URL_STAR + 'login/recover_password', data);
    },

    signout(){
        return axios.post(API_URL_STAR + 'routes/signout');
    }

};

export default LoginService;