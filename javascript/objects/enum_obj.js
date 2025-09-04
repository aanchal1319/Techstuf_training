//enmurating object means transversing through object properties
const person = {
  name: "Anjali",
  age: 22,
  isStudent: true,
  fullname: function(){
    console.log( `hello ${this.name} age ${this.age}`);// we use this to get the object of the current objects
  }
};
//emmurating object properties
for (let key in person){
    console.log(key,person[key])
};
person.fullname();
delete person.age;
Object.keys(person).forEach(key =>{
    console.log(key,person[key]);
});

const entries=Object.entries(person);
console.log(entries);

const car={
    cname:"honda",
    year:"2002",
    color:"red",
    msg: function(){
        console.log(`the car ${this.cname}\'s color is ${this.color}`);
    }

};
car.msg();

Object.entries(car).forEach(([key,values]) =>{
    console.log(key,values);
})
//getters and setters
const Myobj={
    a:5,
    get b(){
        return this.a+1;
    },
    set c(x){
        this.a=x/2;
    },


};
console.log(Myobj.b);
Myobj.c=50;
console.log(Myobj.a);