//get elements
const button = document.getElementById("submit")
const background = document.getElementById("background")
const first = document.getElementById("first")
const second = document.getElementById("second")

//event handler
first.addEventListener("change", function(e){
    first.textContent = e.target.value
})

second.addEventListener("change", function(e){
    second.textContent = e.target.value
})

button.addEventListener("click", function(){
    background.style.backgroundImage = `linear-gradient(to bottom right, ${cleanInput(first.textContent)}, ${cleanInput(second.textContent)})`
    console.log(`clicked\n${cleanInput(first.textContent)}, ${cleanInput(second.textContent)}`)
})

//function
function cleanInput(input){
    return input[0] === "#" ? input : `#${input}`
}