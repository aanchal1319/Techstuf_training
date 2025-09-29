let str1="doucnble \"string";// "\"is use to escape" in the JS like \t is used for tab \\ to add backlash
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

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(text.charAt(3))//returns character at speciifc index
console.log(text.charCodeAt(3))//returns utf code
console.log(text.codePointAt(3))
console.log(text.concat(str3))
console.log(text.slice(4,7))//extracting string part we give start and end index in it
console.log(text.substring(8))//same as slice if u omit the second parameter it wil slice out the rest but difference the negative value dont work in substring
console.log(text.isWellFormed())//checks whether strings is wellformed or not it is not when there is lone surrogates in it
console.log(text.trim())//remove whitespace
console.log(text.trimStart)//only remove whitespace fromstart
console.log(text.repeat(4))//repeats string accord to count
console.log(text.padStart(4,"0"))//add padding at start
console.log(text.replace("A","Z"))//replace
console.log(text.split("|"))//split th string convert string to array
console.log(text.endsWith("Z"));
console.log(str1.matchAll("n"));



