const reasonsToLove = []


const addBtn = document.querySelector("#add-btn") 
const recallBtn = document.querySelector("#recall-btn")

addBtn.addEventListener("click", function toggleDisplay () {
    let theDisplay = document.getElementsByClassName("form-display")
    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})

recallBtn.addEventListener("click", function toggleDisplay () {
    let theDisplay = document.getElementsByClassName("form-display")
    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})