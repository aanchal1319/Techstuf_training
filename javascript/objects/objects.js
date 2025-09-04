/*let num=null
console.log(num)*/
function person(fname,age,live){//making object using constructor functions
    this.fname=fname;
    this.age=age;
    this.live=live;
};
/*here fname,age,live are properties of the objectthey are case sensitive can only contai strings and symbols */
const ben= {//normal objects making
    fname:"ben ten",
    age:"14",
    live:{city:"indore",state:"mp"},//objects inside an objects
};
//accessing properties
console.log(ben.fname);//by using dot nottation
console.log(ben["age"]);//by using brackets
const john= new person("john doe","55","usa");//creating new object by using"new" 
const rand = new person("Rand McKinnon", 33, "M");
const ken = new person("Ken Jones", 39, "M");

//emmurating object properties
for (let key in person){
    console.log(key,person.key)
};
function car(type,color,year,owner){
    this.type=type;
    this.color=color;
    this.year=year;
    this.owner=owner
};
const mycar= new car("honda","red","2002",john);
const car1 = new car("Eagle", "Talon TSi", 1993, rand);
const car2 = new car("Nissan", "300ZX", 1992, ken);
console.log(mycar);
console.log(car2.owner.fname);
console.log(car1.color);
//creating a new object using Object.create
const Animal={
    type:"domestic",
    displayType(){
        console.log("animal type is "+ this.type);
    },
};
const animal=Object.create(Animal);
animal.displayType();
const fish=Object.create(Animal);
fish.type="aquatic";
fish.displayType();
//use square bracket to access property that have spaces or is not yet defined
const Myobj={};
const str="my string";
const ran=Math.random();
const otherObj={};
Myobj.type="using dot to create new property";
Myobj[str]="adding new property that have variable string therefore use bracket";
Myobj["date created"]="it contains space thus the bracket";
Myobj[ran]="random number";
Myobj[otherObj]="using other object";
Myobj[" "]="using spaces";
console.log(Myobj);

