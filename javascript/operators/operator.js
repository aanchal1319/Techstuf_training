//assignment operators =
let  x=5;
console.log(typeof x);

let y=8;
console.log("x+y=", x+y);
console.log("x-y=", x-y);
console.log("x%y=", x%y);
console.log("x/y=", x/y);
console.log("x*y=", x*y);
console.log("x^y=", x**2);

x=y++;//this will increment after for next iteration
console.log(x);
x=++y;//this will increment then assign
console.log(x);// same for -- too

//-------Comparision operators

let a=5;
console.log("a==3",a=="5");// it coverts first into same type
console.log("a===3",a===3); //checks value and type
console.log("a!=3",a==3);
console.log("a!==3",a==3);//checks value and type both are not equal
console.log("a>3",a>3);
console.log("a>=3",a>=3);

//-----logical operators
let u=4;
let i=9;
console.log(u==3 && i==9);
console.log(u==3 || i==9);
console.log(!(u==i));

//-----The Conditional (Ternary) Operator
let age=19;
voteage=(age<18)?"too young":"old enough";
console.log(voteage);

let fname = null;
let text = "missing";
let result = fname ?? text;
console.log(result);
