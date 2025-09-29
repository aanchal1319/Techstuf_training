const a={
  color:"pink",
  name:"abc",
  age:99
}
const b={
  color:"pink",
  name:"abc",
  age:99
}

console.log(JSON.stringify(a)==JSON.stringify(b));
console.log(Object.entries(b));
console.log(Object.defineProperties(a));


