const sumAll = function(num1, num2) {
    let arr = []
    let reducer = (a, b) => a + b;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
        arr.push(i)
        }
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            arr.push(i)
            }
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else if (!isNaN(num1) || !isNaN(num2)) {
        return 'ERROR' 
}    else   {
        return 'ERROR'
    }
    let totalSum = arr.reduce(reducer, 0)
        return totalSum 
}

module.exports = sumAll
