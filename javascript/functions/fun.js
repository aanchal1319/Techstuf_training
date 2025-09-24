//self invoking function--they call themselves wihtout anyone triggering it its also called anonymous self invoking function it is made by ending the function using()
//Immediately Invoked Function Expressions (IIFE)
(function(){
   console.log("hello ") ;
})();
(function (){
    return 0;
})(); 

// javascript hoisting function can be called before declaring and still there is gonna be answer

//function declaration it is hoisted can be called before it defineed
const multi=(a,b)=>a*b;
let z =multi(4,7)
console.log(z)
//function expression asssigned to varaible cant be hoisted
//its an anonymous function cause it does not have name
const greet = function(name) {
    return "Hello, " + name + "!";
};

//calling a function just declaring a function does not excute it we have to call it like in fist line
//a function can call itself
 function fact(n){
    if(n==0||n==1){ 
        return 1;
    }
    return n*fact(n-1)
 }
console.log(fact(5))//calling the function


const person={
    fullname:function(){
        return this.fname +" "+this.lname;
    }
}
const p1={
    fname:"ben",
    lname:"ten",
}
const p2={
    fname:"gwen",
    lname:"ten",
} 
//when we call function it works on current aboject but we can make it work on different obect using call function
console.log(person.fullname.call(p2))


// function scope means variable declared inside function cannot be accesed outside
//a global function can access global variables
//an inner function of a function can acceses to variables of all parent function
//but a parent function cannot access variables of inner function
function fun(){
    console.log("something");
}
let f1=(a,b)=>a*b;
console.log(f1(3,4))