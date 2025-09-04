//----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>do while loop it iterates at least one time
let i= 10;
// console.log(i);
do{
    console.log(i)
    i++
}while(i<10);

//--------------------------->>>>>>>>>>>>>>>>>>>>>>while
console.log("while loop")
let y=10;
while(y<10){
    console.log(y)
    y++
}  
//---------------------------->>>>>>>>>>>>>>>>>label\, break,contninue
// let x=0;
// let z=0;
outerlooplable:
for(let k=0;k<=3;k++){
    for(let j=0;j<=3;j++){
        console.log(`k=${k}, j=${j}`);
        if(k==2 && j==2){
            break outerlooplable;
        }
    }
    
}
outerLoop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue outerLoop; // skips to next i
        }
        console.log(`i=${i}, j=${j}`);
    }
}

//break statement is use to terminet the innermost loop but if used with lable it termintaed that labeled loop
// continue statement it terminate the current iteration of the innermost loop and strt with nxt iteration but if used with lable it start that labled loop