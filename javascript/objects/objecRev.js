// defining objects
//using object literal
const person={
    name:"mona",
    age:35,
}
//using new keyword
const person1=new Object({//less used same result as above 
    name:"tina",
    age:78
})
//using constructor function
function human(name,age){//object templates
    this.name=name;
    this.age=age;
}
const person2=new human("rina",88);
const proto={
    greet(){
        console.log(`hello ${this.name}`)
    }
}
//using object.create
const person3=Object.create(proto);
person3.name="mina";
person3.greet();

//using object.from entries
const ent=[
    ["name","jen"],
    ["age",19]
]
const person4=Object.fromEntries(ent)//convertes array into objects
console.log(person4)

//using object.assign

const person5={name:"riya",age:33}

Object.keys(person).forEach(key=>{
    console.log(key,person[key])
})
Object.assign(person,person5)

//Object 
person.year=2001//adding a new property
console.log(person)
delete person.year /// deleting a property
console.log(person)