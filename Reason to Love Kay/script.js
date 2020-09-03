const reasonsToLove = [
    "She's the girl of my dreams.",
    "I love that she makes me laugh just as much as I make her laugh",
    "I love her family(so far) and I am so honored to be welcomed into this family. I hope I can prove myself! She's stupidly silly, I hope that part of her never changes",
    "Kay gushed. Gushed. And gushed some more. That kiss meant a lot to her. For me, seeing her gush, that meant the world to me. Thank you, God"
]

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
    if (theDisplay.style.display === 'none') {
        theDisplay.style.display = "block";
    } else {
        theDisplay.style.display = "none";
    }
})

document.querySelector("#gen-reason").onclick = function generateReason () {
    const genRandom = Math.floor(Math.random() * reasonsToLove.length)
    const genReason = (genRandom, reasonsToLove[genRandom])
    const strArr = JSON.stringify(genReason, null, 4)
    const getGenRand = function (arr) {
        const reasonNumberDOM = document.createElement("h4")
        const reasonDOM = document.createElement("p")
        reasonDOM.innerHTML =  `${strArr}`
        return reasonDOM 
        console.log(reasonDOM)
    }

    document.querySelector("#random-reason-box").innerHTML = ""
    document.querySelector("#random-reason-box").appendChild(getGenRand(reasonsToLove))

}