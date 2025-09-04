
let m=44;
let branch;

switch(true){
  case m>90:
    branch="CS";
    break;
  case m>70:
    branch="IT";
    break;
  case m>50:
    branch="ME";
    break;
  case m>40:
    branch="EC"
    break;
  default:
    branch="civil"
    break;
};

console.log(`accord to marks branch is ${branch}`);

let x=0
// switch statement is strict it checks the avlue and the type both 
switch(x){
  case "0":
    console.log("same");
    break;
  case "8":
    console.log("no same");
    break;
  default:
    console.log("no val");
    break;
}
// if the value of two case is same the first case statement will excute 
// if there is no default then the code will just go to next staement
let day=0;

switch(day){
  case 0:// we can write same code for different switrches
  case 3:
    console.log("happy day");
    break;
  case 2:
  case 7:
  case 9:
    console.log("sad day");
    break;
  default:
    console.log("norm day");
    break;
}

// TERNERY OPERATOR------------------------------------------------------->>>>>>>>>>
/*
  the syntax is 
  (condition)? if true: if false;
*/
let age=22;

const result=(age>=18)? "eligible to vote":"not eligible";

console.log(result);

//-------------->>>>>>>>>>>>

