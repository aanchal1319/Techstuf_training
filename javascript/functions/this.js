// this refers to different in different context in function it means who is calling the function in object it means to the object this.name will mean the name of this object 

const emp={
    greet(){
        console.log(`${this.name} is ${this.age} year old`)// here this means the object its name is of this name meaning name of the object
    }
}

const emp1={
    fname:"ben"
}
emp.greet.call(emp1,22) ;//call method is use to call a function for diffrent argument  it lets u pretend that the function belongs to other object

//apply method is the same but call take arguments seperately and apply takes in array
emp.greet.apply(emp1,[10])

//bind is same it allows u to borrrow method of other objects 
// call bind apply are used tell what this is in function bind creates a new function that runs later

const person={
    fname:"abc",
    age:33,
    fullname: function(){
        console.log(`${this.fname} is ${this.age}`)
    }
}

person.fullname.call(emp1)
function counter() {
  let count = 0; // private variable

  return function() {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3
