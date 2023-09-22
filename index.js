let num1 = 5
let num2 = 10
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    let result1 = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + result1
}
function subtract(){
    let result2 = num1 - num2
    document.getElementById("sum-el").textContent = "Sum: " + result2
}
function divide(){
    let result3 = num1 / num2
    document.getElementById("sum-el").textContent = "Sum: " + result3
}
function multiply(){
    let result4 = num1 * num2
    document.getElementById("sum-el").textContent = "Sum: " + result4
}