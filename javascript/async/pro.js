console.log("start");

let myProm=new Promise(function(res,rej){
    let x=1;
    if(x==0)res("OK")
    else rej("NOOO")
  console.log("pro");
  
 })
 console.log(10);
myProm 
.then(res=>console.log(res)
)
.catch(err=>console.error(err)
)