// let x=[45,22,78,23,76]
// console.log(x.pop())
// console.log(x.shift())

// const obj={
//   name:"riya",
//   age:45,
// }
// console.log(Object.entries(ob
console.log([]==[])
let fruits=["apple","peach","berry"]
fruits[3]="banana"

console.log(Object.keys(fruits));
fruits.length=10


fruits.forEach((i)=>console.log(i))
// array length property is allways property and assign empty slots or can even delete the array items if the given length is shorter the the number of elemts assigned to the array 
fruits = fruits.concat(1,2,3)
console.log(fruits);
console.log(fruits.join("-"));
fruits.push("a")
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.shift());
fruits.unshift(4,5)
console.log(fruits);
console.log(fruits.slice(1,4));
console.log(fruits.reverse());
console.log(fruits.indexOf("peach"));
let a= fruits.map((i)=>i*10)
console.log(a)
let n= fruits.filter((item)=>typeof item==="number")   
console.log(n);
console.log(fruits.every(isNaN));
console.log(fruits.length);
console.log(fruits[16])
let arr=[45,76,2,4,]
const sum=arr.reduce((a,i)=>a+i,0)
console.log(sum);
const originalArray = [{ a: 1 }, { b: 2 }];
const newArray=structuredClone(originalArray)//structure clone can be used in making deep copies of array in 
console.log(newArray);
console.log(fruits);
let array=fruits.filter(Boolean)

array.splice(2,1,3,4)
console.log(array)
//splice is to modifiy the existing array and either add or remove elements and slice is to create new array from the already array by giving index of start and end in array

const getmax = (a,b)=>Math.max(a,b);
console.log(array.filter(Number).reduce(getmax))
const x =[...new Set(array.filter(Number))]
console.log(x.sort((a,b)=>{return a-b}))
// set is used to remove all duplicates elements in the array
//we can use filter(boolean ) to remove all the elemenst in the array
//for copying array we use slice or str4uctguresd clone
//to join 2 array we can use concat method or spread operatore