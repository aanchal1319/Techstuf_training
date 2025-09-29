/*there r 2 types of data types in JS primitive and nonprimitive
ptimitive data types are simple they store single values
JS have 8 DT i.e numbers,string,object,null,undefined,symbol,bigint,boolean
JS is weak typing language*/

//numbers
let x=66;
let y=6.88;
Number.MIN_SAFE_INTEGER  // -9007199254740991
Number.MAX_SAFE_INTEGER  //  9007199254740991

//there are special numbers 
//infinity
let a=1/0;
console.log(a)
//NaN is not a number used for computational errors
console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN, So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1

//range of number is from (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. therefore to storemore bigger numbrs we use BIGINT
const bigInt = 1234567890123456789012345678901234567890n;

//null to show empyt value is just means nothing
let user = null;

//boolean to store true or false values
let isMale=true;
let isEven=false;

//undefined is wan the var is declare but have no value
let username;
console.log(username,isMale,user,bigInt);

//Symbol Symbols are always unique, even if they have the same description. Often used as unique keys in objects.
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2); // false
