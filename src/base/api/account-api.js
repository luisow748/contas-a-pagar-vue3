import axios from "axios";

export const accountApi = axios.create({
    baseURL: "http://localhost:8082/api", timeout: 1000
});
const accountApiName = "account"
export default {
    getAccounts() {
        return accountApi.get(`/${accountApiName}`, {errorHandle: false})
            .then((res) => {
                return res.data
            });
    },
    getAccountsByMonth(monthId) {
        let url = `/${accountApiName}/year/`  + new Date().getFullYear() + "/month/" + monthId
        return accountApi.get(url)
            .then((res) => {
                return res.data
            });
    },
    saveRegister(account) {
        let installmentValue = Number(account.installmentValue).toFixed(2);
        let totalValue = Number(account.totalValue).toFixed(2);
        return accountApi.post(accountApiName, {
            name: account.name,
            status: null,
            totalValue: totalValue,
            installmentQty: account.installmentQty,
            installmentValue: installmentValue
        })
            .then((res) => {
                return res.data
            });
    },
    deleteRegister(id) {
        return accountApi.delete(`${accountApiName}/${id}`)
            .then((res) => {
                return res.data
            });
    }
}
