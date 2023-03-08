import apiBase from "@/base/api/Api";

const registerApiName = "/register"
export default {
    saveRegister(register) {
        return apiBase.post(registerApiName, register)
            .then((res) => {
                return res.data
            });
    },
    getRegisters() {
        return apiBase.get(registerApiName)
            .then((res) => {
                return res.data
            });
    }
}
