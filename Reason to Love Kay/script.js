// const addBtn = document.querySelector("#add-btn")
// const theDisplay = document.querySelector("#add-display")

// addBtn.addEventListener("click",function () {
//     theDisplay.classList.toggle("hide")
// })

const addBtn = document.querySelector("#add-btn") 

addBtn.addEventListener("click", function toggleDisplay () {
    const theDisplay = document.getElementById("add-display")
    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})