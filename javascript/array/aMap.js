let x=[78,28,99,23]
const double=(a)=>a*2;
console.log(x.map(double))

console.log(x.map(x=>x*x))

console.log(x.filter(x=>x>30))


let a=[59,23,98,1,45,5]
let b=[43,78,11,43,90,3]
//1.
console.log(a.length)
//2.
console.log(a.toString())
//3.
console.log(a.pop())
//4
b.push(7)
console.log(b)
//5.
b.shift()
console.log(b)
//6.
b.unshift(17)
console.log(b)
//7.
console.log(a.join("*"))
//8
console.log(a.at(3))
//9
delete a[3]
console.log(a)
//10
console.log(a.concat(b))
//11
console.log(a.slice(4))
//12
console.log(a.tospl)