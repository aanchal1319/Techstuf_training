const car={
    name:"honda",
    color:"red",
    year:1780,
    hidden:{
    value:"secret",
    enumerable:false
  }
}

//object methods------------------------

//keys
console.log(Object.keys(car)) //return an array of alll thekeys of objec
//values
console.log(Object.values(car))//returns all trhe values
//entries
console.log(Object.entries(car))//return key value pairs in array
//hasown
console.log(Object.hasOwn(car,"year"))//checks whether the object have a [property or not it checks in object not prototype

//freeze
console.log(Object.freeze(car))//prevents from changing any property modifyiong,deleting or adding
car.color="pink"
console.log(car)


const details={
  name:"jenna",
  age:77,
  gender:"female"
}
//seal
Object.seal(details)//it prvent from adding or deleting property but can be modifies
details.city="goa"
details.age=15
console.log(details)

const obj =Object.create({},{

  hidden:{
    value:"secret",
    enumerable:false
  }
})
console.log(Object.getOwnPropertyNames(obj))//get vall the properties of object even the hidden ones
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(car))

console.log(Object.getPrototypeOf(obj))
console.log(Object.prototype)