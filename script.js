let countElement = document.getElementById("countElement")
let saveElement = document.getElementById("saveElement")
let count = 0

function increment() {
    count += 1
    document.getElementById("countElement").innerHTML = count
}

function save () {
    let saveEntries = count + " - "
    saveElement.textContent += saveEntries
    
    count = 0
    countElement.textContent = count
}
