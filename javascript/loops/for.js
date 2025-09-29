
let str="hello ben"
for(let i =0;i<str.length;i++){
    if(str[i]!==" "){
    console.log(`${str[i]} is at ${i}`);}
    else{
        i--;
    }
};

let n = 5;
 
for(let i=1;i<=n;i++){
    let row='';
    let count=2;
    for(let j=1;j<=i;j++){
        if(count==2){
            row+=count;
        }
        for(let j=3;j<=Math.sqrt(count);j+=2){
            if(count%j==0){
                count++;
            }
            else{
                row+=count;
            }
        }
    }console.log(row)
}