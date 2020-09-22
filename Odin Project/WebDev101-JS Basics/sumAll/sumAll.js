const sumAll = function(num1, num2) {
    let arr = []
    let reducer = (a, b) => a + b;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
        arr.push(i)
        }
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i--) {
            arr.push(i)
            }
    }
    let totalSum = arr.reduce(reducer, 0)
        return totalSum 
}

module.exports = sumAll
