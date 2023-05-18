let countElement = document.getElementById("countElement")
let count = 0

function increment() {
    count += 1
    document.getElementById("countElement").innerHTML = count
}

function save () {
    console.log(count)
}