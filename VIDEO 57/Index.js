console.log("I am a Tutorial on the Loops")

let a = 1;
//console.log(a)
//console.log(a+1)
//console.log(a+2)

for (let i = 0; i < 100; i++) {
    console.log(a + i);

}


let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodewithHarry AI"
}


for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}


for (const c of "Harry")
    console.log(c)


//let i = 5;
//while (i < 6) {
//console.log(i)
//i++;
//}


let i = 10;
do {
    console.log(i)
    i++;
} while (i < 6);