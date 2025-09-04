const person={
    name:"ben ten",
    age:15,
    live:{
        city:"ind",
        country:"india",
        street:"abc",
    },
    display:function(){
        console.log(`hi ${this.name} of ${this.live.city}`);
    }
};
person.display();

for(key in person){
    console.log(`${key} : ${person[key]}`)
};
// for in interates over property and for of iterates over values
console.log("for of loop")

for(const [key,value]of Object.entries(person)){
    console.log(key,value);
}