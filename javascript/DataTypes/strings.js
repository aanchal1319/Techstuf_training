let str1="double \"string";// "\"is use to escape" in the JS like \t is used for tab \\ to add backlash
let str2='single quoted \n string\n';// \n is used to break lines
let str3=`backtick \t\tstring
it helps
us \\to 
write in multiple lines`;//backticks allows us to embbed expression into string and wrap it around ${}

function sum(a,b){
    return a+b;
};
console.log(`5+6=${sum(5,6)}`);
console.log(str2,str3,str1.length,str1);//.length is use to find string length

let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.at(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o
console.log( str.at(-1) );

for(let char of `hello`){
    console.log(char)
};
str[2]="v";// str cannot be changed
console.log(str.toUpperCase());

console.log(str.indexOf("e"));//find substring

console.log(str.includes("w"))//check whether it includes or not

