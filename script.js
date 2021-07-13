let a =""
let b =""

a=10
b=2

a=Math.pow(a,2)
b=b*a
a=b

function logResultA(result) {
    console.log("a est égale à :" +result)
}
function logResultB(result) {
    console.log("b est égale à :" +result)
}

logResultA(a)
logResultB(b)