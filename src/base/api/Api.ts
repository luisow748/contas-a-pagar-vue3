
import axios, { type AxiosInstance } from "axios";

import { VueCookieNext } from 'vue-cookie-next'

let cookie = VueCookieNext.getCookie("access_token")

const apiBase: AxiosInstance = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {
        // "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Authorization, Content-Type",
        // "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
        // "Content-Type": "application/json;charset=UTF-8"
        "Authorization": "Bearer " + cookie
    },
});

export default apiBase;
