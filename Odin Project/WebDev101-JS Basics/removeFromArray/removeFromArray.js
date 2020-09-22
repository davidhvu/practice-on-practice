const removeFromArray = function(arr, val1, val2, val3, val4) {
    let removingVal = [val1, val2, val3, val4]
    return arr.filter(value => !removingVal.includes(value));
    // let index = arr.indexOf(value)
    // if (index > -1) {
    //     arr.splice(index, 1)
    // }
    // return arr
}

module.exports = removeFromArray
