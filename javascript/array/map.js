//map are used to apply function on elements of array
//it does not change the main array
//it does not es=xcute on empty elements

// const num=[3,5,6,23,45,78,13];
// const n=num.map(Math.sqrt);
// console.log(n)

// function ten(x){
//     return x*10;
// }
// console.log(num.map(ten))

// const details=[
//     {fname:"ben",
//     lname:"ten"},
//     {fname : "Kaylee", lname: "Frye"},
//   {fname : "Jayne", lname: "Cobb"}
// ];

// function display(item){
//     return ([item.fname,item.lname].join("*"))   
// }
// console.log(details.flatMap(display))

// function checkn(n){
//     return n>20;
// }
// console.log(num.filter(checkn))

//=====================searching>>

const day=["mon","tue","wed","thur","fri"];
console.log(day.indexOf("wed"))
console.log(day.includes("wed"))
console.log(day.includes("sat"))

const temp=[55,2,8,12,87,23,44]
let high=temp.find(x=>x>80)

console.log(high)
console.log(day.sort())//it creates new array but tosort and toreverse change the original array
console.log(day.reverse())

const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
console.log(myArr.sort())

//=============================>deconstructing array
// deconstructing array mieans extracting values from array
let[day1,,,day2]=day;
console.log(day1," ",day2)
let{[4]:day3,[5]:day4}=day
console.log(day3," ",day4)

// we can do same for objects like


// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName, firstName} = person;
console.log(lastName,firstName)




