////object revision
//let obj = {
//  name:"riya",
//  age:44,
//  live:{
//    city:"indore",
//    country:"india"
//  },
//  msg(){
//    console.log(`hello ${this.name} from ${this.live.city}`)
//  }
//}
//obj.msg()
///*ways to create object:
//1.using literals
//2.new keyord
//3.contstructor function
//4.object.create
//5.object.fromentries it creat object from array
//6.object.assign
//7.class */
//function human(name,age){
//  this.name=name;
//  this.age=age;
//}
//const p1=new human("ravi",77)
//console.log(p1)
//const p2= Object.create(obj)
//p2.name="tiya";
//console.log(p2)

// console.log(NaN===NaN)
// console.log(undefined);
// //js treat them both as empty therefore
// //they r loosely equal
// //but when === isw used it checks type too so
// function f() {
//   console.log("F!");
//   return 2;
// }
// function g() {
//   console.log("G!");
//   return 3;
// }
// let x, y;
// y = x = f();
// let str="fdu"
// let num=+str;
// console.log(isNaN(num))

// const ob1={
//   name:"ren",
//   age:89,
// }
// const ob2=ob1;
// ob2.name="jen"
// console.log(ob1,ob2)
var a= 60;
{
  var a=50
  console.log(a)
}
console.log(a)
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined