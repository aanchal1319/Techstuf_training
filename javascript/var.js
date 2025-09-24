// console.log(a);//undfeined
// console.log(b);//refrence error
// console.log(c);//refrence error
// //let and const are hoisted but not initialized therefore causes refrence error
// var a;
// let b ;
// const c=9;//cant be declared without intialization
// //var is function scoped or global scoped,let const are block scoped
// if(true){
//   var x=1;
//   let y=2;
// }
// console.log(x);//will return 2
// console.log(y)//refrence error;
// function f()
// {
//   var a=1;
//   if (true){
//     var a=2;// same binding it overwrites
//   }
//   console.log(a)//2
// }
// //we cant redeclare let and const but we can shaddow outer declaration
// let z=1
// {
//   let i=5
// }
// const o = {name: "A"};
// o.name = "B"; // allowed (mutation)
// o = {};      // TypeError: Assignment to constant variable.


// {let a=10
//   console.log(a);

// }
// var a= 9;
// console.log(a);

// const a=10;
const obj1={
  name:"ren",
  age:23,
}

// const obj2={ ...obj1}
// obj2.name="jen"
// console.log(obj1,obj2)

console.log(Object.keys(obj1));
