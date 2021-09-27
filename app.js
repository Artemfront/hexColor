let btn = document.getElementById('btn')
let body = document.querySelector('body')
let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let value = document.querySelector('#colorValue')

btn.addEventListener('click', hexChangeColor)

function hexChangeColor() {
    let hex = "#"

    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexValues.length)

        hex += hexValues[index]
    }

    value.textContent = hex
    body.style.backgroundColor = hex
}
