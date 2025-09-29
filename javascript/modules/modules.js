//we can import external files in javascript using import and type in script tag
// modules with function and variables can be stored in external files
//there are 2 types of export
//named export

export const name = "Jesse";//in line individually export
export const age = 40;

//or

const name = "Jesse";
const age = 40;

export {name, age};//export all at once
async function loadMath() {
  const data=await import('./messages.js')//importing during runtime called lazy loading
  
}