//promises are object representing eventual compilation which can be suces or fail
//a callback is function that is passed as argument to other another function so it tells if u r done with this run this
// arrow function keep this from parent scope 
// async function foo() {
//     const result= await new Promise((resolve) => 
//       setTimeout(() =>resolve("1") ),)
//     const result2= await new Promise((resolve)=>
//     setTimeout(()=>resolve("2"))
//   )
// }
// foo()
// async function demo() {
//   console.log("Start");
//   const result = await new Promise(resolve => setTimeout(() => resolve(42), 2000));
//   console.log("Result:", result);
//   console.log("End");
// }

// demo();

 const p1=Promise.reject("error");
 const p2=new Promise((resolve)=>setTimeout(()=>resolve("success"),1000))
 const p3=Promise.resolve("success")

 Promise.allSettled([p1,p2,p3])
 .then((res)=>console.log(res) )
 .catch(err => console.error("opps",err))

const p4=new Promise((_, reject) => {setTimeout(()=>reject("fast afil"),100)})
const p5=new Promise((resolve) => {setTimeout(()=>resolve("slow"),1000)})

Promise.any([p4,p5])
.then(res=>console.log(res))
.catch(err=>console.error(err))