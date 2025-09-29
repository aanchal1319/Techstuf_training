/**
 * there are are 8 DT in JS
 * 7 are primitive object is non primitive means can store more than one value
 * falsy && anything is short-circuit evaluated to the falsy value.
truthy || anything is short-circuit evaluated to the truthy value.
nonNullish ?? anything is short-circuit evaluated to the non-nullish value.
 */console.log({} + []); // "[object Object]"
 console.log({}=={});
 const person={
  name:"ren",
  age:44,
 }

 const p1=Object.create(person)
 p1.name="jen";
 console.log(p1)
 console.log(Object.keys(person));
 let str="134"
console.log(+str);
console.log(typeof NaN);


