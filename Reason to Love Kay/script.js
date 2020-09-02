const reasonsToLove = []


const addBtn = document.querySelector("#add-btn") 
const recallBtn = document.querySelector("#recall-btn")
const generateBtn = document.querySelector("#generate-btn")

addBtn.addEventListener("click", function toggleDisplay () {
    let theDisplay = document.getElementById("form-display-add")
    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})

recallBtn.addEventListener("click", function toggleDisplay () {
    let theDisplay = document.getElementById("form-display-recall")
    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})

generateBtn.addEventListener("click", function toggleDisplay () {
    let theDisplay = document.getElementById("form-display-generate")
    const genRandom = Math.floor(Math.random() * reasonsToLove.length)
    console.log(headerText)
    headerText.innerHTML = "Hello World";





    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})