

const button1 = document.querySelector(".btn1")
const button2 = document.querySelector(".btn2")
const button3 = document.querySelector(".btn3")
const button4 = document.querySelector(".btn4")


const body1 = document.querySelector(".body1")





button1.addEventListener("click", () => {
   body1.style.backgroundColor = "green"
   button1.style.color = "pink"
  button1.textContent = "Hello green"
})



button2.addEventListener("click", () => {
    body1.style.backgroundColor = "blue"
    button2.style.color = "red"
    button2.textContent = "Hello blue"
})

button3.addEventListener("click", () => {
    body1.style.backgroundColor = "Red"
    button3.style.color = "purple"
    button3.textContent = "Hello red"
})
button4.addEventListener("click", () => {
    body1.style.backgroundColor = "yellow"
    button4.style.color = "green"
    button4.textContent = "Hello yellow"
})