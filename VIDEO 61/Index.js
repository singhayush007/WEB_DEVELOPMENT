/* create a faulty calculator using a javascript 

This faulty calculator does following :
1- It takes two numbers as input from the user
2- It performs wrogn operation as follows:


+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrogn operation 10% of the times

*/


let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


console.log(random)
if (random > 0.1) {
    //Perform correct calculation

    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

else {
    //Perform wrogn calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}