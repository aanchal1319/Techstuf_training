try{
    let x=3;
    let r=x.toUpperCase();
    console.log(`this wont run`)
}catch(err){
    console.log("oops")
    console.log(err.message)
}
// try run a code to check
//catch the error if the code dosent run and handle when somethin ggoes wrong
//throw sends error costum made
// finnally runs the code whatever the result may be
function checkage(age){
    if(age<18){
        throw new Error("not an adult")
    }
    console.log("adult huray")
}

try{
    checkage(12)
}catch(err){
    console.log("X " +err.message)
}

try{
    null.toUpperCase();
}
catch(err){
    console.log(err.name);
    
}

try {
    let result =10/10;
    console.log(result);
    throw new Error("custom error")
    
}
catch(err){
    console.log(err.name);
    console.log(err.message);
    
    
}finally{
    console.log("this always run");
    
}