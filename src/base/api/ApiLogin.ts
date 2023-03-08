import axios, {type AxiosInstance} from "axios";


const apiBaseLogin: AxiosInstance = axios.create({
    baseURL: "http://localhost:8082/api",
    headers: {},
});

export default apiBaseLogin;
