const helloWorld = "Hello! Thank you for checking this out for some odd ball reason. This is mostly in the pandemic time of early 2020s(late February) to whatever. My Github should illustrate that. Not well, but it should give some picture. Maybe this is just a comment to my future self. I hope you keep learning. Keep breaking it down so that it's digestable."

console.log(helloWorld)



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

// console.log(listOfStrings[0])

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

// Button to Replace First Text(This) with Second Text(That) WIP**

const userInputReplace = {
    replacedWords: "" ,
    
}



document.getElementById("replace-btn").onclick = function() {
    // const userInputRegex = document.getElementById("replaced-string")
    // userInputRegex = ""
    // console.log(userInputRegex)
    const userInputReplacingWord = document.getElementById("replacing-string").value
    const userInputReplacedWord = document.getElementById("replaced-string").value
    const find = new RegExp(document.getElementById("find").value, 'gi')

    const replace = userInputReplacingWord.replace(find, userInputReplacedWord)
    
    console.log(replace)
    // const replacedWords = listOfStrings.replace(userInputReplace.replacedWords, userInputReplacingWord)
    // document.getElementById("strings-to-be-replaced").textContent = replacedWords

}

let exampleArray = [{
    title: "The Full Caterpillar",
    entry: "There was once a caterpillar like no other. And then it become even more so. A caterpillar who ate far too much and stayed that way. It was a strange Saturday afternoon. The sun was just hot enough where each step gave a tingle to the lowly caterpillar. But it was not enough to stopped the caterpillar from seeking its food, its destiny. Its destination was one that always seemingly evaded the caterpillar, but that never gave defeat onto the caterpillar. No. It only just motivated the caterpillar even more. It made the caterpillar even more hungry despite its fullness.",
    date: "September 20, 2018"
}, {
    title: "False Memories",
    entry: "I get fond of memories. Nostalgic even. Something about looking back just makes me look forward to so much in the future. At times, I would remember something and get so excited to talk about it with my wife. I tell her, expecting her remember the same memory as well, but she just looks at me with a raised eyebrow giving me a concerning stare that just pierces my soul and well-being. She rejects the notion that she was a part of that memory and exclaims that it was probably with somebody else. It makes me question the validity of my memories. Can I even trust those mememories? If I can't trust my memory, how can I even trust myself? Hell, I don't even trust me right now.",
    date: "November 11, 2019"
}, {
    title: "The Routine",
    entry: "Wake up at 6:00AM. Drink the full cup of water on the nightstand. Go to bathroom to brush teeth, swish mouthwash, wash face, and rinse. Then prep lunch and go to work with it. Eat lunch at work. Come back home. Grab hammer and swing at tire a bunch. Shower. Go to bed. ",
    date: "June 16th, 2015"
}]

// for of loop
// for (const journal of exampleArray) {
//      console.log(journal)
// }

// forEach loop
// exampleArray.forEach( journal => console.log(journal))

// Spread Syntax: example
let moreExample = {
    title: "The Test",
    entry: "She asked me what is 7 times 6. I stalled. It was too late. I yelled the answer I just knew. She looked at me. It's 42, dumbo. I was ashamed.",
    date: "September 29th, 2012"
}


// console.log(...exampleArray)

// Filter
const filterWordExample = exampleArray.filter(e => e.date.includes("June"))

// console.log(filterWordExample)

// Print Array of Objects onto HTML
const stringedArray1 = JSON.stringify(exampleArray[0], null, 4)
const stringedArray2 = JSON.stringify(exampleArray[1], null, 4)
const stringedArray3 = JSON.stringify(exampleArray[2], null, 4)
const stringedArray4 = JSON.stringify(moreExample, null, 4)
document.getElementById("arr-the-pirate-ship").innerHTML = stringedArray1 + "<br><br>" + stringedArray2 + "<br><br>" + stringedArray3 + "<br><br>" + stringedArray4
console.log(stringedArray4)


// Added additional entry to main array
exampleArray[3] = moreExample
console.log(exampleArray)
let nextInArray = {
    title: "Waiting",
    entry: "John said he'd come back. He told me to sit. He told me to wait here. Be a good boy, John said. I'm gonna wait here. Be a good boy. Oh, what was that?! I have to wait here. I'm a little tired. I'm gonna lay down here.",
    date: "January 19th, 2001"
}

// Keeping main array to only have 4 objects at a time -> Removes first entry first, then add in new entry at the end
document.getElementById("add-entry").onclick = function() {
    exampleArray.shift()
    exampleArray.push(nextInArray)
    console.log(exampleArray)
}

// Grab input from user and assign it to nextInArray variable and add that variable as new entry in main array


// document.getElementById("add-custom-entry").onclick = function () {
//     exampleArray.shift()
//     exampleArray.push(nextInArray)
//     console.log(exampleArray)
// }

document.querySelector("#add-entry-form").addEventListener("submit", function(e) {
    e.preventDefault()
    let theEntry = e.target.elements.newEntry.value
    let theTitle = e.target.elements.newTitle.value
    let theDate = e.target.elements.newDate.value
    exampleArray.shift()
    exampleArray.push({
        title: theTitle,
        entry: theEntry, 
        date: theDate
    })
    console.log(exampleArray)
})