//converting text into object we use json.parse
let text ='{"employees":['+
'{"fname":"john","lnam":"doe"},'+'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj=JSON.parse(text);

console.log(obj)

//json syntax is {"name":"value"}
//json value can be any of the data types
//functions are not allowed in json

const objs = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(objs);
localStorage.setItem("testJSON",myJSON)//stringify use to convert obj to string

console.log(myJSON)

// can use stringify in array

const arr = ["John", "Peter", "Sally", "Jane"];
const JSONs = JSON.stringify(arr);
console.log(JSONs)