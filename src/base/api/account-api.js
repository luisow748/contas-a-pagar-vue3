import apiBase from "@/base/api/Api";

const accountApiName = "account"
export default {
    getAccounts() {
        return apiBase.get(`/${accountApiName}`)
            .then((res) => {
                return res.data
            });
    },
    getAccountsByMonth(monthId) {
        let url = `/${accountApiName}/year/`  + new Date().getFullYear() + "/month/" + monthId
        return apiBase.get(url)
            .then((res) => {
                return res.data
            });
    },
    saveRegister(account) {
        let installmentValue = Number(account.installmentValue).toFixed(2);
        let totalValue = Number(account.totalValue).toFixed(2);
        return apiBase.post(accountApiName, {
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
        return apiBase.delete(`${accountApiName}/${id}`)
            .then((res) => {
                return res.data
            });
    }
}
