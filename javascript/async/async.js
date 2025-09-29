//async is a keyword that make an function asynchronous it always returns a promise
//a promise is a placeholder or proxy of the future result wihich either csn be resolved or failed
//await is also a key word that we use to tll that we have to wait for until oit give he promise
function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("data recieved"),2000);
  })
}
async function getData() {
  console.log("fetching");
  let data= await user()
  console.log(data);
  console.log("done");
    
  
}
getData()
//async function always gives an promise together with async and await we make an asynchronous function
async function user() {
  try{
    const user =await fetch("https://jsonplaceholder.typicode.com/users/1")
    const details= await user.json()
    console.log(details);
    
  }
  catch(e){
    console.log("cant find the user");
  }
}

async function Dataget(){
  const data= await fetch("https://jsonplaceholder.typicode.com/users/1")
  const res= await data.json()
}
async function dynamo(){
  if(x>0){
    con
  }
}