const account = {
    name: 'Dahveed',
    expenses: [],
    income: [],
    addExpense: function (descr, amount) {
        this.expenses.push({
            descr: descr,
            amount: amount
        })
    },
    addIncome: function (descr, amount) {
        this.income.push({
            descr: descr,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        
        let totalBalance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

// Expense -> Description, Amount
// addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Dahveed has $1250 in expenses. (forEach)

// 1. Add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary
// Dahveed has a balance of $10. $100 in income. $90 in expenses.




// const addExpense = function (descr, amount) {
//     account.expenses.push(descr, amount)
// }

// const getAccountSummary = function (account) {
//     account.expenses.forEach(function (expense) {
//         const expenseSum = expenseSum + expense
//         return expenseSum
       
//     })
//     console.log(`${name} has $${expenseSum} in expenses.`)
// }


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
account.addIncome('Side hustle', 200)
console.log(account.getAccountSummary())