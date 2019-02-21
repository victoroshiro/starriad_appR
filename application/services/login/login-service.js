import axios from "axios";
import {API_URL_STAR} from "../../configs/api/current";

const LoginService = {

    signin(data){
        return axios.post(API_URL_STAR + 'users/loginApp', data)
    },

    cadastrar(data) {
        return axios.post(API_URL_STAR + 'users/cadastrarApp', data);
    },
    campanha() {
        return axios.post(API_URL_STAR + 'users/get_campanhas');
    },
    createCupom(data) {
        return axios.post(API_URL_STAR + 'users/createCupom', data);
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
    getCupons(data) {
        return axios.post(API_URL_STAR + 'users/get_tickets', data);
    },
    useCupons(data) {
        return axios.post(API_URL_STAR + 'users/use_tickets', data);
    },
    pesquisarVideo(data) {
        return axios.post(API_URL_STAR + 'users/pesquisarVideo', data);
    },
    denuncia(data) {
        return axios.post(API_URL_STAR + 'users/denuncia', data);
    },
    indicar(data) {
        return axios.post(API_URL_STAR + 'users/indicar', data);
    },
    signout(){
        return axios.post(API_URL_STAR + 'routes/signout');
    },
    getDestaques(){
        return axios.post(API_URL_STAR + 'users/get_destaque');
    }

};

export default LoginService;