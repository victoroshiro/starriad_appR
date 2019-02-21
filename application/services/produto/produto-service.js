import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";

const ProdutoService = {

    getProduct(params) {

        let body = {
            produto_slug: params.produto_slug,
            profileUrl: params.profileUrl
        };

        return axios.post(API_URL_HOUPA + 'produto/getProduto', body);
    },

    getRelated(params) {
        let body = {
            categorias: params.categorias
        };

        return axios.post(API_URL_HOUPA + 'produto/getRelated', body);
    },

    sendRating(params) {
        let body = {
            nota: params.nota,
            produto_id: params.produto_id,
            remove: params.remove
        };

        return axios.post(API_URL_HOUPA + 'produto/insertRating', body);
    },

};

export default ProdutoService;