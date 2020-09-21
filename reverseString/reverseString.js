const reverseString = function(string) {
    let str = string
    let strInReverse = str.split('').reverse().join('')
    return strInReverse
}

module.exports = reverseString
