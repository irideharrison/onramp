console.log("Hello Onramp")
const y =2.5
const x = "Boris Johnson"
const w = false
let f;
let s = null

console.log("type of y =",typeof y)
console.log("type of x =", typeof x)
console.log("type of w =", typeof w)
console.log("type of f =", typeof f)
console.log("type of s =", typeof s)
let dob=document.getElementById('dob').value = "2023-02-20"

// const dateOfBirth = document.querySelector('#dob')

let myArr = ["John", "Joe", "Mary",2,4]
console.log(myArr[0])


console.log("before")
console.log(myArr)

myArr.unshift('Joy')
console.log("after")
console.log(myArr)

console.log([...myArr,'joy'])

const cities = ["Tokyo","Cairo","Los Angelis","Paris","Seattle"]
console.log("before slicing",cities)
const newCities = cities.slice(2)
console.log("after slicing",newCities)

const startEndOption = cities.slice(2, 4)
console.log("start and end options", startEndOption) 

const months = ['Jan', 'March', 'April','June']
console.log("original array", months)
months.splice(1,0, "Feb")
console.log("splice with three param", months)
months.splice(4,0, "May")
console.log("adding may",months)

months.splice(6,0, "June")
console.log("adding June",months)

months.splice(6,0, "July")
console.log("adding July",months)

months.splice(8,0, "August")
console.log("adding August",months)

let monthss = ['January','February','March','April','May','June','July','August','September','October','November','December']
monthss.forEach(month => console.log(month));

const numbers = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<numbers.length; i++){
console.log(numbers[i])}


for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 3 === 0){
console.log(numbers[i])}
}

const myString = "osapkolor"
console.log (myString.toUpperCase())


function addition (){}

