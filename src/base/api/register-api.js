import axios from "axios";

export const accountApi = axios.create({
    baseURL: "http://localhost:8082/api"
});
const registerApiName = "/register"
export default {
    getRegisters() {
        return accountApi.get(registerApiName)
            .then((res) => {
                return res.data
            });
    },
    saveRegister(register) {
        return accountApi.post(registerApiName, register)
            .then((res) => {
                return res.data
            });
    }
}
