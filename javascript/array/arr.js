// arrays are objects 
// they can be accesed using arrayname[index]
//they can be reassigned

const color=["red","white","pink","yellow","blue",66,9]
console.log(typeof(color))


color[2]="grey"
console.log(color[2])

console.log(color.toString())
console.log(color)
console.log(color.length) //check length of array

const n=[4,7,1,90,13,25]

console.log(n.sort(function(a,b){return b-a}))// array first converts the numbers into strings and then sort their hexadecimals
console.log(color.sort())
color.push("pink")// to add at the end of array
console.log(color.join("*"))// to join array replacing , by *

console.log(color.pop())//to remove last element of array
console.log(color.shift())// shift remove first element
color.unshift("purple")// add element at start

console.log(color.reverse())
console.log(color.concat(n))// concatenate the array
console.log(color.filter(Number))
let a=[45,6,3,4,8]
let b=[45,6,3,4,8]
console.log(a==b)