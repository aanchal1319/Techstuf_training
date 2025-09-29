let arr=[56,7,33,23,89,10]
let max=0;
let secmax=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secmax=max;
        max=arr[i];
        
    }
    // if(arr[i]>secmax)
    // {
    //     secmax=arr[i];
    // }
    // if((arr[i]<max )&& (arr[i]>secmax)) {
    //     secmax=arr[i];
    // }
}
// for(let i=0;i<arr.length;i++){
//     if((arr[i]<max )&& (arr[i]>secmax)){
//         secmax=arr[i];
//     }
// }


console.log(secmax)
console.log(max)