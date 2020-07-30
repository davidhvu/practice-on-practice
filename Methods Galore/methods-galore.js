const listOfStrings = [
    "Pack my box with five dozen liquor jugs.", 
    "The quick brown fox jumps over the lazy dog.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
]

// Set String onto HTML

const setString = function (id, data) {
    const pString =  document.getElementById(id);
    pString.textContent = data
}

console.log(listOfStrings[0])

setString("string-city", listOfStrings[0])
setString("string-town", listOfStrings[1])
setString("string-village", listOfStrings[2])

// Button to get length of string

document.getElementById("length-gen").onclick = function() {
    const stringLength1 = listOfStrings[0].length
    const stringLength2 = listOfStrings[1].length
    const stringLength3 = listOfStrings[2].length
    const htmlStringLength1 = document.getElementById('string-length-results-1');
    htmlStringLength1.innerHTML = "The first string's length is " + stringLength1 + " characters long." + "<br>" + "The second string's length is " + stringLength2 + " characters long." + "<br>" + "The third string's length is a whopping " + stringLength3 + " characters long."    
    
}

// Button to Split chars into items of an array

document.getElementById("split-gen").onclick = function() {
    const stringSplit1 = listOfStrings[0].split(' ')
    const stringSplit2 = listOfStrings[1].split(' ')
    const stringSplit3 = listOfStrings[2].split(' ', 10)
    document.getElementById('string-split-1').textContent = stringSplit1
    document.getElementById('string-split-2').textContent = stringSplit2
    document.getElementById('string-split-3').innerHTML = stringSplit3 + "<br>" + "-This string has been limited by the first 10 words to conserve space."

}

// Button to Split characters, then get the length of those chars => Word Counter

document.getElementById("split-length-gen").onclick = function() {
    const stringSplit1 = listOfStrings[0].split(' ')
    const stringSplit2 = listOfStrings[1].split(' ')
    const stringSplit3 = listOfStrings[2].split(' ')
    const stringSplitLength1 = stringSplit1.length
    const stringSplitLength2 = stringSplit2.length
    const stringSplitLength3 = stringSplit3.length
    document.getElementById('string-split-length-1').textContent = "There are " + stringSplitLength1 + " words in the first string."
    document.getElementById('string-split-length-2').textContent = "There are " + stringSplitLength2 + " words in the second string."
    document.getElementById('string-split-length-3').textContent = "There are " + stringSplitLength3 + " words in the third string."
    
}