const repeatString = function(word, num) {
    if (num > -1) {
       return  word.repeat(num)
    } else {
        return "ERROR"
    }
}

module.exports = repeatString
