import axios from "axios";
import {API_URL_HOUPA} from "../../configs/api/current";

const CarrinhoService = {

    getCarrinho(restkey){
        return axios.post(API_URL_HOUPA + 'carrinho/getCarrinho',{},{
            headers: {
                "x-api-key": restkey
            }});
    },

};

export default CarrinhoService;
