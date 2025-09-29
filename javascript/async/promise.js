// // let checkeven= new Promise((t,f)=>{
// //     let x=4;
// //     if(x%2===0)t("its even");
// //     else f("its odd")
// // });
// // checkeven
// // .then((message)=>console.log(message))
// // .then((error)=>console.log(error))

// // function dis(some){
// //     console.log(some)
// // }
// //  let myProm=new Promise(function(res,rej){
// //     let x=1;
// //     if(x==0)res("OK")
// //     else rej("NOOO")
// //  })
// //  myProm.then(
// //     function(value){dis(value)},
// //     function(err){dis(err)}
// //  )

// // async function getUSer(){
// //     try{
// //         const response= await fetch("https://jsonplaceholder.typicode.com/bad-url")
// //         const user= await response.json()
// //         console.log("user data:",user)
// //     }
// //     catch(error){
// //         console.error("user data not found",error)
// //     }
// // }
// // getUSer()

// // console.log("start");

// // setTimeout(()=>{console.log("setimeout callaback");
// // },0)

// // Promise.resolve().then(()=>{
// //     console.log("promise callback");
    
// // })

// // console.log("end");

// // async function getUsers() {
// //     try{
// //         const response=await fetch("https://jsonplaceholder.typicode.com/users");
// //         const data= await response.json();
// //         console.log("user",data);
        
// //     }
// //     catch(e){
// //         console.log("user cant find");
        
// //     }
// // }
// // getUsers();
// // promisess
// // const myPromise= new Promise((res,rej)=>{
// //     let success=true;
// //     if(success){
// //         res("completed task")
// //     }
// //     else {
// //         rej("not completed")
// //     }
// // })
// // myPromise
// //   .then(result => {
// //     console.log(result); // ✅ Operation successful!
// //   })
// //   .catch(error => {
// //     console.error(error); // ❌ Operation failed!
// //   });

// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //   .then(response => response.json())
// //   .then(user => {
// //     console.log("User:", user);
// //     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
// //   })
// //   .then(response => response.json())
// //   .then(posts => console.log("Posts:", posts))
// //   .catch(error => console.error("Error:", error));

// // Promise.all(
// //     [fetch("https://jsonplaceholder.typicode.com/users/1"),
// //         fetch("https://jsonplaceholder.typicode.com/users/2")
// //     ]
// // )
// // .then(response=>Promise.all(response.map(r=>r.json())))
// // .then(data=>console.log("users",data))
// // .catch(error=>console.log("one failed",error))//promise all whether all the promises has been resollved or not
// // //all settled waits for all promises to settle and doesnot just stop if one fails it just prints the result
// // //.race gove the first promise that is settled resolved or rejected
// // //,any give the first promise that is resolved
// // //async 
//  fetch("https://jsonplaceholder.typicode.com/users/1")
//  .then (response=>{
//     if (!response.ok){
//         throw new Error("network prob")
//     }
//     return response.json()
//  })
//  .then (data=>{
//     console.log("user",data);
    
//  })
//  .catch(e=>{
//     console.log(e.name);
    
//  })



// console.log(true == false ); //false
// console.log(true === false );//false

console.log("start");
setTimeout(()=>
{
   console.log("runnning");
   
},1000)
console.log("end");

Promise.all(
   [
      fetch("https://jsonplaceholder.typicode.com/users/1").then(r=>r.json()),
      fetch("https://jsonplaceholder.typicode.com/users/2").then(r=>r.json())
   ]
)
.then(([user1,user2])=>{
   console.log(user1,user2);
   
})
.catch(e=>{
   console.log(e.name);
   
})

Promise.race([
   fetch("https://jsonplaceholder.typicode.com/users/1"),
   fetch("https://jsonplaceholder.typicode.com/users/2")
]).then((data)=>{console.log(data);
}).catch(e=>{console.log(e.name);
})
Promise.allSettled([
  fetch("/ok"),
  fetch("/fail")
]).then(results => {
  results.forEach(r => console.log(r.status, r.value || r.reason));
});
setTimeout(()=> saySome("10 seconds passed"),10*1000)
const wait=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms))

wait(10*1000)
.then(()=>saySome("10 sec"))
.catch(failureCallback)