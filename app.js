import data from "./data.js"

const randomOptions = document.getElementById("random-options")
const randomBtn = document.getElementById("random-btn")
const output = document.getElementById("output")

let keys = Object.keys(data)
keys.forEach((value, index) => {
    let option = document.createElement("option")
    option.innerHTML = value
    option.value = value

    randomOptions.appendChild(option)
})

randomBtn.addEventListener("click", (event) => {
    let index = randomOptions.value
    let indexData = data[index]
    if (indexData.length == 0) return console.warn("Array is empty.")

    let ran = Math.floor(Math.random() * indexData.length)
    let node = indexData[ran]

    output.innerHTML = node
})