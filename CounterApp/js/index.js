var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("save-el")

var count=0

function increment() {
    count = count+1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count=0
    countEl.innerText = count
}
