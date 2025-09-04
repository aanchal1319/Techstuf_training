let x=20;

if(x%2===0){
    console.log(`${x} is even`)
}
else{
    console.log(`${x} is odd`)
}
let time=22;

if(time<10){
    console.log("goodmorning")
}
else if(time<20){
    console.log("good day")
}
else{
    console.log("good")
};

// -------------------------------------------->>>>>>>>>>>>>>>>>>>>

let custom="reg";
let tot=2000;
let dis;

if(custom=="reg"){
    if(tot>1000){
        dis =5%tot;
    }
    else{
        dis="no dis"
    }
}
else if(custom=="member"){
    if(tot<200){
        dis=5%tot;
    }
    else if(200<=tot<=600){
        dis=10%tot;
    }
    else{
        dis=15%tot;
    }
}
else if(custom=="vip"){
    dis=20%tot;
}
else{
    console.log("invalid")
}

console.log(`ur discount is ${dis}`);

//--------------------------->>>>>>>>>>>>>>>>>>>

let age=10;

const result=(age>=18)?"access granted":(age>=13)?"parent supervis":"denied";

console.log(result);

//--------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

