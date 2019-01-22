import { api_list } from "./list";
import {ENVIRONMENT_CURRENT} from "../environments/current";

// API Indicada (ec2, localhost, production)
export const API_CURRENT = "ec2";

// A url da api indicada, baseada no ambiente atual
export const API_URL = api_list[ENVIRONMENT_CURRENT][API_CURRENT];

//A url com /starriad/controller
export const API_URL_STAR = API_URL;