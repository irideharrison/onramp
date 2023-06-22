function addition(){
    let newNum = 5+5
    return newNum
}
const callFunction = addition(10,5)
console.log(callFunction)

function showIdentity(name, age, phone){
    const id = `my name is ${name}, i am ${age} years old, and my phonenumber ${phone}`
    return id}
console.log(showIdentity("Osas", "18", "09075857844"))


function filterNumbers(myArr){
    return myArr.filter(item => typeof item === 'number');
}
const myArr = [2, "ellias", "fish", 44, "fales", "salt"]
console.log(filterNumbers(myArr));
