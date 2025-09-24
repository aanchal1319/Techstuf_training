// setTimeout(function(){
//     console.log("i run 5 second late")
// },5000)
// console.log("hello")

// const timer=setInterval(function(){
//     console.log("idk")
// },3000)
// clearInterval(timer)

// let count=0;

// const repeat=setInterval(()=>
// {
//     count++
//     console.log("cpunting:",count)
//     if(count===5){
//         clearInterval(repeat)
//         console.log("done")
//     }
// },1000)
let count=0;
const timer= setInterval(()=>{
    count++;
    console.log(count);
    if(count==5)clearInterval(timer)
},5000)