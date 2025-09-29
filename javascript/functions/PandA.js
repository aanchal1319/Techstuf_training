//parameters are the name listed when function is defined
//arguments are the real values passed to the function

////function defination dont specify data types neither does it check it whenarguments are passed
//aldo does not check number of arguments passed

//default parameter when  their are missing arguments in function it return undefined
//therefore we set default arguments to the parameter
 function sum(a,b){
    if(y===undefined){
        y=2
    }
 }

 //setting default value 
 function myFunction(x, y = 10) {
  return x + y; //return value return at the end of function it can return anything after return would not work
}
myFunction(5);

//rest parameter
// using ... we can treat indefinite parameters
function tot(...args){
    let sum=0;
    for(let arg of args) sum +=arg;
    return sum
}

//js have built in object called arguments 
x=findmax(2,76,35,3,7,56,699);
function findmax(){
    let max=-Infinity;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max)max=arguments[i];
    }
    return max;
}
console.log(x)
//arguments are passed by value that means they only see value if function change value it does not change real value
//but object are passed by reference if the property is changed in object the orginal value also changes