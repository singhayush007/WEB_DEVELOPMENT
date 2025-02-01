console.log("Hello I am conditional tutorial ")

let age = 3;
let grace = 2;

console.log(age + grace) 
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)
if((age + grace)>18){
    console.log("You Can Drive")
}

else{
    console.log("You Cannot Drive")
}


a = 6;
b = 8;
let c = a > b ? (a - b): (b - a);

/* 
Translate to:
if(a > b){
    let c = a - b;
}
else{
    let c = a - b;
}

*/