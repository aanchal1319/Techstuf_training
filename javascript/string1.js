let str="hello world"
// const obj={
//     h:0,
//     e:0,
//     l:0,
//     o:0,
//     w:0,
//     r:0,
//     l:0,
//     d:0,
// }
// for(key in obj){
//     for(let i=0;i<str.length;i++){
//         if(key==str[i]){
//             obj[key]+=1;
//         }
//     }
// }
const obj={}
for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        continue;
    }
    else if(obj[str[i]]>=1){
        obj[str[i]]++;
    }
    // if(str[i]!=obj[str[i]]){
    //     obj[str[i]]=1;
    // }
    // else if(str[i]==obj[str[i]]){
    //     obj[str[i]]+=1;
    // }
    else{
        obj[str[i]]=1;
    }
}
console.log(obj)
