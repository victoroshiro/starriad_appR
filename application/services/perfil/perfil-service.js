import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";

const PerfilService = {

    getProfileData(data, restkey){
        return axios.post(API_URL_HOUPA + 'perfil/getProfileData', data);
    },

    getProducts(params) {
        return axios.post(API_URL_HOUPA + 'perfil/getProducts', params);
    },

    getProfileConfeccao(empresa_id, categorias = false){

        let body = {
            'empresa_id': empresa_id,
            'categorias_id': categorias
        };

        console.log('body: ', body);

        return axios.post(API_URL_HOUPA + 'perfil/getProfileConfeccao', body);
    },

    getInfoPerfil(){
        return axios.post(API_URL_HOUPA + 'perfil/perfilInfo');
    },

    updateCoordsEmpresa(data) {
        return axios.post(API_URL_HOUPA + 'perfil/updateCoordsEmpresa', data);
    }
};

export default PerfilService;