export default {
    formatDate(account) {
        return account.expirationDay + "/" +
            account.expirationMonth + "/" +
            account.expirationYear.replace('20', '');
    },
    getMonths() {
        return [
            {id: 1, month: "Janeiro", selected: false},
            {id: 2, month: "Fevereiro", selected: false},
            {id: 3, month: "Março", selected: false},
            {id: 4, month: "Abril", selected: false},
            {id: 5, month: "Maio", selected: false},
            {id: 6, month: "Junho", selected: false},
            {id: 7, month: "Julho", selected: false},
            {id: 8, month: "Agosto", selected: false},
            {id: 9, month: "Setembro", selected: false},
            {id: 10, month: "Outubro", selected: false},
            {id: 11, month: "Novembro", selected: false},
            {id: 12, month: "Dezembro", selected: false}
        ]
    }
}