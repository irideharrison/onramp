console.log("Welcome to day 8")

function filterNumbers(myArr) {
    return myArr.filter(item => typeof item === 'number');
}
const myArr = [2, 50, "ellias", "fish", "Suga", 44, "fales", 2, "salt"]
console.log(filterNumbers(myArr));




function onlyNum(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.unshift(arr[i])
        }
    }
    return newArr
}
console.log(onlyNum(myArr))

// function filterArr(myArr){
//     return myArr.filter((item) => typeof item === 'number')
// }

const fruits = ["Banan", "Orange", "Apple", "Mango"];
const sortb = fruits.sort();
console.log (sortA)

function showIdentity(name, age, phone){
    const id = `my name is ${name}, i am ${age} years old,  and my phonumber is ${phon}`
    const id = "my name is " + name  + ", i am "
}

const fruitss = ["Banan", "Orange", "Apple", "Mango"];
const sortA = fruitss.sort();
const sortReverse = sortA.reverse()
console.log (sortA)


const sortB = fruits.sort((a, b) => b - a)















