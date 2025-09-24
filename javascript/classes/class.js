//classes are not hoisted
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello ${this.name} of ${this.age}`)
    }
}
const p1=new person("joy",22)
p1.greet()

class car {
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    speak(){
        console.log(`${this.model}`)
    }
}
class pink extends car{
    speak(){
        console.log(`${this.model} is pink`)
    }
}
const c1=new pink("honda",1988)
c1.speak()

class female extends person{
    constructor(name,gender){
        super(name);
        this.gender=gender;
    }
    hi(){
        console.log(`${this.name} is ${this.gender}`)
    }
}
const p2=new female("tina",33,"female")
p2.greet()