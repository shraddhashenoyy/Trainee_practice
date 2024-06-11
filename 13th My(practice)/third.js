//for loops
//Factors of a number
let num1=5;
console.log("Entered number is:",num1);
console.log("The factors of the number:");
for(let i=1;i<=num1;i++){
    if(num1%i===0){
        console.log(i);
    }
}
console.log("\n");

//while-loops
let num2=5;
let j=1;
console.log("The factors are:");
while(j<=num2){
    if(num2%j===0){
        console.log(j);
    }
    j++;
}
console.log("\n");

//do-while loops
let i=1;
let num=5;
do{
     if(num%i===0){
        console.log(i);
     }
     i++;
}
while(i<=num);








